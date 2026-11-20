# 📦 Panduan Instalasi & Implementasi Koin di KMP (Shared UseCase + Native UI)

Dokumen ini menjelaskan cara mengonfigurasi **Koin Dependency Injection** pada proyek **Kotlin Multiplatform (KMP)** dengan batas shared layer sampai level **Repository & UseCase**, serta cara mengonsumsinya di **Android (Compose)**, **iOS (SwiftUI)**, **Web (Next.js)**, dan **Desktop (CMP)**.

> Struktur file mengikuti `docs/architecture/kmp-shared-architecture.md` §4: satu Koin module per fitur (`<feature>/<Feature>SharedModule.kt`), dikumpulkan dalam list `sharedModule` di `core/AppModule.kt`. Tidak ada folder `di/` terpisah. Package contoh: `me.poc.kmpchat`, fitur contoh: `chat`.

---

## 1. Konfigurasi Version Catalog (`gradle/libs.versions.toml`)

Tambahkan versi dan library Koin pada file `gradle/libs.versions.toml`:

```toml
[versions]
koin = "4.0.0"

[libraries]
# Koin Core untuk KMP (commonMain, iOS, Desktop, JS)
koin-core = { module = "io.insert-koin:koin-core", version.ref = "koin" }

# Koin khusus Android & Jetpack Compose (dipakai di androidApp, bukan di shared)
koin-android = { module = "io.insert-koin:koin-android", version.ref = "koin" }
koin-androidx-compose = { module = "io.insert-koin:koin-androidx-compose", version.ref = "koin" }

# Koin untuk Compose Multiplatform (opsional jika ingin koinInject di composeUI/desktopApp)
koin-compose = { module = "io.insert-koin:koin-compose", version.ref = "koin" }
```

---

## 2. Konfigurasi Gradle (`shared/build.gradle.kts`)

`shared` adalah module non-UI, jadi cukup `koin-core` di `commonMain`. Library Android/Compose dipasang di module UI (`androidApp`, `composeUI`).

```kotlin
kotlin {
    iosArm64()
    iosSimulatorArm64()
    jvm()
    js {
        browser()
        binaries.library()
        generateTypeScriptDefinitions()
    }
    android { /* namespace, compileSdk, minSdk */ }

    sourceSets {
        commonMain.dependencies {
            implementation(libs.kotlinx.coroutines.core)
            // Koin Core tersedia untuk semua target (Android, iOS, Desktop, JS)
            implementation(libs.koin.core)
        }
    }
}
```

```kotlin
// androidApp/build.gradle.kts
dependencies {
    implementation(libs.koin.android)
    implementation(libs.koin.androidx.compose)
}
```

---

## 3. Membuat Koin Module (`shared/src/commonMain`)

### A. Use case: `fun interface` + `internal` Impl

Setiap use case berada di file sendiri di `chat/application/usecase/`, dengan dispatcher di-inject:

```kotlin
// shared/src/commonMain/kotlin/me/poc/kmpchat/chat/application/usecase/LoginUseCase.kt
package me.poc.kmpchat.chat.application.usecase

import kotlinx.coroutines.CoroutineDispatcher
import kotlinx.coroutines.withContext
import me.poc.kmpchat.chat.application.ChatRepository
import me.poc.kmpchat.chat.application.model.LoginBody
import me.poc.kmpchat.chat.application.model.UserProfile
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport

@OptIn(ExperimentalJsExport::class)
@JsExport
fun interface LoginUseCase {
    @Throws(Throwable::class)   // iOS: exception → Error Swift, bukan crash
    suspend operator fun invoke(username: String): UserProfile
}

internal class LoginUseCaseImpl(
    private val repository: ChatRepository,
    private val dispatcher: CoroutineDispatcher
) : LoginUseCase {
    @Throws(Throwable::class)
    override suspend fun invoke(username: String): UserProfile = withContext(dispatcher) {
        val body = LoginBody(username)
        body.validate().getOrThrow()
        repository.login(body.username)
    }
}
```

### B. Module per fitur (`chat/ChatSharedModule.kt`)

Aturan scope: `single` untuk Repository/RemoteService, `factory` untuk UseCase, dispatcher lewat `named(ioDispatcher)`. Selalu deklarasikan dengan tipe interface.

```kotlin
// shared/src/commonMain/kotlin/me/poc/kmpchat/chat/ChatSharedModule.kt
package me.poc.kmpchat.chat

import me.poc.kmpchat.chat.application.ChatRepository
import me.poc.kmpchat.chat.application.usecase.*
import me.poc.kmpchat.chat.data.ChatRepositoryImpl
import me.poc.kmpchat.core.ioDispatcher
import org.koin.core.qualifier.named
import org.koin.dsl.module

val chatModule = module {
    // Repository (Singleton agar in-memory state terjaga)
    single<ChatRepository> { ChatRepositoryImpl() }

    // UseCases
    factory<LoginUseCase> { LoginUseCaseImpl(get(), get(named(ioDispatcher))) }
    factory<GetProfileUseCase> { GetProfileUseCaseImpl(get(), get(named(ioDispatcher))) }
    factory<ObserveChatMessagesUseCase> { ObserveChatMessagesUseCaseImpl(get(), get(named(ioDispatcher))) }
    factory<SendMessageUseCase> { SendMessageUseCaseImpl(get(), get(named(ioDispatcher))) }
}
```

> Jangan pakai `factoryOf(::LoginUseCase)` — `LoginUseCase` adalah interface, dan Impl butuh dispatcher dengan qualifier.

### C. Root module (`core/AppModule.kt`)

```kotlin
// shared/src/commonMain/kotlin/me/poc/kmpchat/core/AppModule.kt
package me.poc.kmpchat.core

import kotlinx.coroutines.CoroutineDispatcher
import kotlinx.coroutines.Dispatchers
import me.poc.kmpchat.chat.chatModule
import org.koin.core.module.Module
import org.koin.core.qualifier.named
import org.koin.dsl.module

const val ioDispatcher = "ioDispatcher"

val commonModule = module {
    single<CoroutineDispatcher>(named(ioDispatcher)) { Dispatchers.Default }
}

val sharedModule: List<Module> = listOf(
    commonModule,
    chatModule
)
```

Setiap fitur baru cukup menambahkan `<feature>Module` ke list `sharedModule`. Library lain (Ktor, multiplatform-settings, crypto) menambahkan dependency-nya ke `commonModule` atau module `core/*` masing-masing.

---

## 4. Jembatan Khusus iOS & Next.js Web

Karena Swift (iOS) dan TypeScript (Next.js) tidak bisa memanggil fungsi inline Kotlin reified `get<T>()` secara langsung, buat helper khusus di source set masing-masing. Jembatan ini hanya mengekspos **interface use case**.

### A. Jembatan iOS (`shared/src/iosMain/kotlin/me/poc/kmpchat/core/KoinIos.kt`)
```kotlin
package me.poc.kmpchat.core

import me.poc.kmpchat.chat.application.usecase.*
import org.koin.core.component.KoinComponent
import org.koin.core.component.inject
import org.koin.core.context.startKoin

// Dipanggil dari iOSApp.swift saat aplikasi iOS pertama kali dibuka
fun doInitKoinIos() {
    startKoin { modules(sharedModule) }
}

// Container untuk mengambil UseCase di Swift
class KoinDependencies : KoinComponent {
    val loginUseCase: LoginUseCase by inject()
    val getProfileUseCase: GetProfileUseCase by inject()
    val observeChatUseCase: ObserveChatMessagesUseCase by inject()
    val sendMessageUseCase: SendMessageUseCase by inject()
}
```

### B. Jembatan Web / Next.js (`shared/src/jsMain/kotlin/me/poc/kmpchat/chat/KmpFactory.kt`)

Adapter khusus JS (mis. `Flow` → callback) berada di fitur yang sama: `jsMain/.../chat/JsChatAdapter.kt`.

```kotlin
package me.poc.kmpchat.chat

import me.poc.kmpchat.chat.application.usecase.*
import me.poc.kmpchat.core.sharedModule
import org.koin.core.context.startKoin
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport

@OptIn(ExperimentalJsExport::class)
@JsExport
object KmpFactory {
    private val koinApp by lazy {
        startKoin { modules(sharedModule) }.koin
    }

    fun getLoginUseCase(): LoginUseCase = koinApp.get()
    fun getGetProfileUseCase(): GetProfileUseCase = koinApp.get()
    fun getObserveChatMessagesUseCase(): JsObserveChatMessagesUseCase =
        JsObserveChatMessagesUseCase(koinApp.get<ObserveChatMessagesUseCase>())
    fun getSendMessageUseCase(): SendMessageUseCase = koinApp.get()
}
```

---

## 5. Konsumsi Koin di Masing-Masing Platform

### A. Android (Jetpack Compose)
1. **Daftarkan ViewModel Android (`androidApp/src/main/kotlin/me/poc/kmpchat/AndroidModule.kt`)**:
```kotlin
val androidViewModelModule = module {
    viewModelOf(::MainViewModel)   // MainViewModel hanya menerima interface use case
}
```
2. **Inisialisasi di `Application` Class**:
```kotlin
class MainApplication : Application() {
    override fun onCreate() {
        super.onCreate()
        startKoin {
            androidContext(this@MainApplication)
            modules(sharedModule + androidViewModelModule)
        }
    }
}
```
3. **Panggil di Compose UI**:
```kotlin
@Composable
fun App() {
    val vm: MainViewModel = koinViewModel()
    AppNavigation(vm = vm)
}
```

---

### B. iOS (SwiftUI)
1. **Inisialisasi di Entry Point (`iOSApp.swift`)**:
```swift
import SwiftUI
import Shared

@main
struct iOSApp: App {
    init() {
        KoinIosKt.doInitKoinIos()
    }

    var body: some Scene {
        WindowGroup {
            let deps = KoinDependencies()
            let vm = ChatViewModel(
                loginUseCase: deps.loginUseCase,
                getProfileUseCase: deps.getProfileUseCase,
                observeChatUseCase: deps.observeChatUseCase,
                sendMessageUseCase: deps.sendMessageUseCase
            )
            MainView(vm: vm)
        }
    }
}
```

> Nama module Swift mengikuti `baseName` framework di `shared/build.gradle.kts` (`"Shared"`).

---

### C. Web (Next.js / TypeScript)
```tsx
// app/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { KmpFactory, UserProfile, ChatMessage } from 'shared';

export default function ChatWebPage() {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [chats, setChats] = useState<ChatMessage[]>([]);

  const handleLogin = async () => {
    // Koin diinisialisasi lazy saat getter pertama dipanggil
    const loginUc = KmpFactory.getLoginUseCase();
    const profile = await loginUc.invoke('Alex Dev');
    setUser(profile);
  };

  useEffect(() => {
    const observeUc = KmpFactory.getObserveChatMessagesUseCase();
    const sub = observeUc.subscribe((items) => setChats(items));
    return () => sub.unsubscribe();
  }, []);

  // Render UI...
}
```

---

### D. Desktop (Compose Multiplatform - JVM)
```kotlin
// desktopApp/src/main/kotlin/me/poc/kmpchat/main.kt
import androidx.compose.runtime.remember
import androidx.compose.ui.window.Window
import androidx.compose.ui.window.application
import me.poc.kmpchat.chat.application.usecase.*
import me.poc.kmpchat.core.sharedModule
import org.koin.core.context.startKoin

fun main() {
    // 1. Start Koin sebelum membuka Window
    val koin = startKoin { modules(sharedModule) }.koin

    application {
        Window(onCloseRequest = ::exitApplication, title = "Desktop Chat KMP") {
            // 2. Ambil instance UseCase (interface) dari Koin container
            val loginUseCase = remember { koin.get<LoginUseCase>() }
            val getProfileUseCase = remember { koin.get<GetProfileUseCase>() }
            val observeChatUseCase = remember { koin.get<ObserveChatMessagesUseCase>() }
            val sendMessageUseCase = remember { koin.get<SendMessageUseCase>() }

            DesktopChatScreen(
                loginUseCase = loginUseCase,
                getProfileUseCase = getProfileUseCase,
                observeChatUseCase = observeChatUseCase,
                sendMessageUseCase = sendMessageUseCase
            )
        }
    }
}
```

---

## 6. Ringkasan Struktur File

```
shared/src/
├── commonMain/kotlin/me/poc/kmpchat/
│   ├── core/
│   │   └── AppModule.kt                     # ioDispatcher, commonModule, sharedModule
│   └── chat/
│       ├── ChatSharedModule.kt              # val chatModule
│       ├── application/
│       │   ├── ChatRepository.kt            # interface
│       │   ├── model/                       # ChatMessage, UserProfile, LoginBody
│       │   └── usecase/                     # 1 file = 1 fun interface + internal Impl
│       └── data/
│           └── ChatRepositoryImpl.kt
├── iosMain/kotlin/me/poc/kmpchat/core/
│   └── KoinIos.kt                           # doInitKoinIos(), KoinDependencies
├── jsMain/kotlin/me/poc/kmpchat/chat/
│   ├── KmpFactory.kt                        # @JsExport getter use case
│   └── JsChatAdapter.kt                     # Flow → subscribe/unsubscribe
└── commonTest/kotlin/me/poc/kmpchat/chat/
    └── ChatUseCaseTest.kt
```
