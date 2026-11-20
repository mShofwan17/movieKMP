# 🗄️ Panduan Integrasi `multiplatform-settings` di KMP (Shared UseCase + Koin + 4 Platform)

Dokumen ini menjelaskan cara mengintegrasikan library **[multiplatform-settings](https://github.com/russhwolf/multiplatform-settings)** karya Russell Wolf ke dalam arsitektur **Kotlin Multiplatform (KMP)** Anda untuk menyimpan sesi login, token, dan profil pengguna secara persisten di:
- **Android**: `SharedPreferences`
- **iOS**: `NSUserDefaults`
- **Web (Next.js)**: `localStorage`
- **Desktop (CMP JVM)**: `java.util.prefs.Preferences`

> Struktur file mengikuti `docs/architecture/kmp-shared-architecture.md`:
> - instance `Settings` didaftarkan di `commonModule` (`core/AppModule.kt`) — §4.2,
> - kunci storage dipusatkan di `core/storage/StorageKeys.kt` agar `core` (mis. `HttpClient`) tidak bergantung pada fitur — §12,
> - akses storage lokal berada di layer `data` fitur (`chat/data/local/`), sejajar dengan `data/service/` untuk remote,
> - use case baru = 1 file per aksi, `fun interface` + `internal` Impl.
>
> Package contoh: `me.poc.kmpchat`, fitur contoh: `chat`.

---

## 1. Konfigurasi Version Catalog (`gradle/libs.versions.toml`)

Kita menggunakan modul **`multiplatform-settings-no-arg`** (untuk inisialisasi instan lintas platform tanpa boilerplate `Context` rumit) dan **`multiplatform-settings-coroutines`** (agar bisa mengamati perubahan data sebagai `Flow`).

```toml
[versions]
multiplatformSettings = "1.2.0"

[libraries]
multiplatform-settings = { module = "com.russhwolf:multiplatform-settings", version.ref = "multiplatformSettings" }
multiplatform-settings-no-arg = { module = "com.russhwolf:multiplatform-settings-no-arg", version.ref = "multiplatformSettings" }
multiplatform-settings-coroutines = { module = "com.russhwolf:multiplatform-settings-coroutines", version.ref = "multiplatformSettings" }
multiplatform-settings-serialization = { module = "com.russhwolf:multiplatform-settings-serialization", version.ref = "multiplatformSettings" }
multiplatform-settings-test = { module = "com.russhwolf:multiplatform-settings-test", version.ref = "multiplatformSettings" }
```

---

## 2. Konfigurasi Gradle (`shared/build.gradle.kts`)

Tambahkan dependensi pada blok `commonMain.dependencies` dan `commonTest.dependencies`:

```kotlin
kotlin {
    sourceSets {
        commonMain.dependencies {
            // Core & No-Arg (otomatis mendeteksi SharedPreferences, NSUserDefaults, localStorage, & JVM Prefs)
            implementation(libs.multiplatform.settings)
            implementation(libs.multiplatform.settings.no.arg)

            // Dukungan Flow / Coroutines
            implementation(libs.multiplatform.settings.coroutines)

            // Opsional: jika ingin menyimpan data class langsung dengan kotlinx.serialization
            implementation(libs.multiplatform.settings.serialization)
        }
        commonTest.dependencies {
            // MapSettings (in-memory) untuk unit test
            implementation(libs.multiplatform.settings.test)
        }
    }
}
```

> **Catatan tentang `no-arg` di Android:**
> Modul `multiplatform-settings-no-arg` menggunakan library *AndroidX Startup* di balik layar untuk mengambil `ApplicationContext` secara otomatis, sehingga Anda cukup memanggil `Settings()` di `commonMain` tanpa perlu passing `Context` manual dari Android!

---

## 3. Kunci Storage (`core/storage/StorageKeys.kt`)

Kunci dipusatkan di `core` supaya bisa dipakai bersama oleh repository fitur dan `HttpClient` (mis. token bearer) tanpa `core` meng-import kelas dari fitur.

```kotlin
// shared/src/commonMain/kotlin/me/poc/kmpchat/core/storage/StorageKeys.kt
package me.poc.kmpchat.core.storage

object StorageKeys {
    const val KEY_USER_ID = "user_id"
    const val KEY_USER_NAME = "user_name"
    const val KEY_USER_BIO = "user_bio"
    const val KEY_USER_AVATAR = "user_avatar"
}
```

---

## 4. Local Storage Fitur (`chat/data/local/ChatLocalStorage.kt`)

Pola sama dengan `<Feature>RemoteService`: **interface + Impl** di layer `data`, sehingga mudah di-mock. Kelas ini satu-satunya yang menyentuh `Settings`; layer `application` tidak tahu apa-apa soal `Settings`.

```kotlin
// shared/src/commonMain/kotlin/me/poc/kmpchat/chat/data/local/ChatLocalStorage.kt
package me.poc.kmpchat.chat.data.local

import com.russhwolf.settings.ExperimentalSettingsApi
import com.russhwolf.settings.ObservableSettings
import com.russhwolf.settings.Settings
import com.russhwolf.settings.coroutines.getStringOrNullFlow
import com.russhwolf.settings.set
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.flowOf
import me.poc.kmpchat.chat.application.model.UserProfile
import me.poc.kmpchat.core.storage.StorageKeys.KEY_USER_AVATAR
import me.poc.kmpchat.core.storage.StorageKeys.KEY_USER_BIO
import me.poc.kmpchat.core.storage.StorageKeys.KEY_USER_ID
import me.poc.kmpchat.core.storage.StorageKeys.KEY_USER_NAME

interface ChatLocalStorage {
    fun saveUserSession(profile: UserProfile)
    fun getSavedUserSession(): UserProfile?
    fun clearSession()
    fun isLoggedIn(): Boolean
    fun observeSavedUsername(): Flow<String?>
}

class ChatLocalStorageImpl(
    private val settings: Settings
) : ChatLocalStorage {

    // Simpan sesi user saat login berhasil
    override fun saveUserSession(profile: UserProfile) {
        settings[KEY_USER_ID] = profile.id
        settings[KEY_USER_NAME] = profile.name
        settings[KEY_USER_BIO] = profile.bio
        settings[KEY_USER_AVATAR] = profile.avatarUrl
    }

    // Ambil sesi user yang tersimpan (sinkron / one-shot)
    override fun getSavedUserSession(): UserProfile? {
        val id = settings.getStringOrNull(KEY_USER_ID) ?: return null
        return UserProfile(
            id = id,
            name = settings.getStringOrNull(KEY_USER_NAME) ?: "",
            bio = settings.getStringOrNull(KEY_USER_BIO) ?: "",
            avatarUrl = settings.getStringOrNull(KEY_USER_AVATAR) ?: "",
        )
    }

    // Hapus sesi saat logout
    override fun clearSession() {
        settings.remove(KEY_USER_ID)
        settings.remove(KEY_USER_NAME)
        settings.remove(KEY_USER_BIO)
        settings.remove(KEY_USER_AVATAR)
    }

    // Mengecek apakah user sudah login
    override fun isLoggedIn(): Boolean = settings.hasKey(KEY_USER_ID)

    // Opsional: Reactive Flow (jika Settings mendukung ObservableSettings seperti di Android, iOS, Desktop)
    @OptIn(ExperimentalSettingsApi::class)
    override fun observeSavedUsername(): Flow<String?> {
        val observable = settings as? ObservableSettings
            ?: return flowOf(settings.getStringOrNull(KEY_USER_NAME))
        return observable.getStringOrNullFlow(KEY_USER_NAME)
    }
}
```

---

## 5. Integrasi dengan Repository & UseCase

### A. Repository interface (`chat/application/ChatRepository.kt`)

Tambahkan kontrak sesi. Interface tetap hanya berbicara dalam **model domain**:

```kotlin
// shared/src/commonMain/kotlin/me/poc/kmpchat/chat/application/ChatRepository.kt
package me.poc.kmpchat.chat.application

import kotlinx.coroutines.flow.Flow
import me.poc.kmpchat.chat.application.model.ChatMessage
import me.poc.kmpchat.chat.application.model.UserProfile

interface ChatRepository {
    suspend fun login(username: String): UserProfile
    suspend fun getSavedSession(): UserProfile?
    suspend fun logout()
    suspend fun getProfile(userId: String): UserProfile
    fun observeMessages(): Flow<List<ChatMessage>>
    suspend fun sendMessage(text: String)
}
```

### B. Repository implementation (`chat/data/ChatRepositoryImpl.kt`)

Perbarui `ChatRepositoryImpl` agar menyimpan dan membaca profil lewat `ChatLocalStorage`, sehingga saat aplikasi ditutup dan dibuka kembali (di Android, iOS, Web, atau Desktop), user **tetap dalam keadaan login**.

```kotlin
// shared/src/commonMain/kotlin/me/poc/kmpchat/chat/data/ChatRepositoryImpl.kt
package me.poc.kmpchat.chat.data

import kotlinx.coroutines.delay
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow
import me.poc.kmpchat.chat.application.ChatRepository
import me.poc.kmpchat.chat.application.model.ChatMessage
import me.poc.kmpchat.chat.application.model.UserProfile
import me.poc.kmpchat.chat.data.local.ChatLocalStorage

class ChatRepositoryImpl(
    private val localStorage: ChatLocalStorage
) : ChatRepository {

    private val _messages = MutableStateFlow(
        listOf(
            ChatMessage("m1", "Sarah", "Halo! Gimana progres KMP?", false, 1710001000L),
            ChatMessage("m2", "Alex Dev", "Sudah terintegrasi multiplatform-settings!", true, 1710001050L)
        )
    )

    override suspend fun login(username: String): UserProfile {
        delay(400)
        val profile = UserProfile(
            id = "u1",
            name = username,
            bio = "Mobile & Web explorer | KMP + Multiplatform Settings",
            avatarUrl = "https://i.pravatar.cc/150?u=$username"
        )
        // Simpan ke multiplatform-settings!
        localStorage.saveUserSession(profile)
        return profile
    }

    override suspend fun getSavedSession(): UserProfile? = localStorage.getSavedUserSession()

    override suspend fun logout() = localStorage.clearSession()

    override suspend fun getProfile(userId: String): UserProfile =
        localStorage.getSavedUserSession() ?: UserProfile(
            id = userId,
            name = "Guest",
            bio = "Belum ada bio",
            avatarUrl = ""
        )

    override fun observeMessages(): Flow<List<ChatMessage>> = _messages.asStateFlow()

    override suspend fun sendMessage(text: String) {
        val sender = localStorage.getSavedUserSession()?.name ?: "Me"
        val currentSize = _messages.value.size
        _messages.value = _messages.value + ChatMessage(
            id = "m_${currentSize + 1}",
            senderName = sender,
            message = text,
            isMine = true,
            timestamp = 1710001000L + (currentSize * 1000L)
        )
    }
}
```

> Validasi input (mis. username kosong) tetap di `LoginBody.validate()` yang dipanggil `LoginUseCaseImpl`, bukan di repository.

### C. UseCase sesi baru (1 file = 1 use case)

```kotlin
// shared/src/commonMain/kotlin/me/poc/kmpchat/chat/application/usecase/GetSavedSessionUseCase.kt
package me.poc.kmpchat.chat.application.usecase

import kotlinx.coroutines.CoroutineDispatcher
import kotlinx.coroutines.withContext
import me.poc.kmpchat.chat.application.ChatRepository
import me.poc.kmpchat.chat.application.model.UserProfile
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport

@OptIn(ExperimentalJsExport::class)
@JsExport
fun interface GetSavedSessionUseCase {
    @Throws(Throwable::class)   // iOS: exception → Error Swift, bukan crash
    suspend operator fun invoke(): UserProfile?
}

internal class GetSavedSessionUseCaseImpl(
    private val repository: ChatRepository,
    private val dispatcher: CoroutineDispatcher
) : GetSavedSessionUseCase {
    @Throws(Throwable::class)
    override suspend fun invoke(): UserProfile? = withContext(dispatcher) {
        repository.getSavedSession()
    }
}
```

```kotlin
// shared/src/commonMain/kotlin/me/poc/kmpchat/chat/application/usecase/LogoutUseCase.kt
package me.poc.kmpchat.chat.application.usecase

import kotlinx.coroutines.CoroutineDispatcher
import kotlinx.coroutines.withContext
import me.poc.kmpchat.chat.application.ChatRepository
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport

@OptIn(ExperimentalJsExport::class)
@JsExport
fun interface LogoutUseCase {
    @Throws(Throwable::class)   // iOS: exception → Error Swift, bukan crash
    suspend operator fun invoke()
}

internal class LogoutUseCaseImpl(
    private val repository: ChatRepository,
    private val dispatcher: CoroutineDispatcher
) : LogoutUseCase {
    @Throws(Throwable::class)
    override suspend fun invoke() = withContext(dispatcher) {
        repository.logout()
    }
}
```

---

## 6. Registrasi di Koin

### A. `Settings` di root module (`core/AppModule.kt`)

`Settings` adalah infrastruktur bersama, jadi masuk ke `commonModule`:

```kotlin
// shared/src/commonMain/kotlin/me/poc/kmpchat/core/AppModule.kt
val commonModule = module {
    single<CoroutineDispatcher>(named(ioDispatcher)) { Dispatchers.Default }
    single<Settings> { Settings() }   // multiplatform-settings-no-arg
}
```

### B. Local storage, repository & use case di module fitur (`chat/ChatSharedModule.kt`)

```kotlin
// shared/src/commonMain/kotlin/me/poc/kmpchat/chat/ChatSharedModule.kt
package me.poc.kmpchat.chat

import me.poc.kmpchat.chat.application.ChatRepository
import me.poc.kmpchat.chat.application.usecase.*
import me.poc.kmpchat.chat.data.ChatRepositoryImpl
import me.poc.kmpchat.chat.data.local.ChatLocalStorage
import me.poc.kmpchat.chat.data.local.ChatLocalStorageImpl
import me.poc.kmpchat.core.ioDispatcher
import org.koin.core.qualifier.named
import org.koin.dsl.module

val chatModule = module {
    // 1. Local storage & Repository
    single<ChatLocalStorage> { ChatLocalStorageImpl(settings = get()) }
    single<ChatRepository> { ChatRepositoryImpl(localStorage = get()) }

    // 2. UseCases
    factory<LoginUseCase> { LoginUseCaseImpl(get(), get(named(ioDispatcher))) }
    factory<GetSavedSessionUseCase> { GetSavedSessionUseCaseImpl(get(), get(named(ioDispatcher))) }
    factory<LogoutUseCase> { LogoutUseCaseImpl(get(), get(named(ioDispatcher))) }
    factory<GetProfileUseCase> { GetProfileUseCaseImpl(get(), get(named(ioDispatcher))) }
    factory<ObserveChatMessagesUseCase> { ObserveChatMessagesUseCaseImpl(get(), get(named(ioDispatcher))) }
    factory<SendMessageUseCase> { SendMessageUseCaseImpl(get(), get(named(ioDispatcher))) }
}
```

### C. Ekspos ke iOS & Web

Tambahkan getter use case baru ke jembatan yang sudah ada (lihat panduan Koin §4):

```kotlin
// iosMain/.../core/KoinIos.kt → class KoinDependencies
val getSavedSessionUseCase: GetSavedSessionUseCase by inject()
val logoutUseCase: LogoutUseCase by inject()

// jsMain/.../chat/KmpFactory.kt
fun getGetSavedSessionUseCase(): GetSavedSessionUseCase = koinApp.get()
fun getLogoutUseCase(): LogoutUseCase = koinApp.get()
```

---

## 7. Testing (`commonTest`)

Gunakan `MapSettings` (in-memory) untuk menguji use case + repository + local storage yang asli:

```kotlin
// shared/src/commonTest/kotlin/me/poc/kmpchat/chat/ChatSessionUseCaseTest.kt
package me.poc.kmpchat.chat

import com.russhwolf.settings.MapSettings
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.test.runTest
import me.poc.kmpchat.chat.application.usecase.GetSavedSessionUseCaseImpl
import me.poc.kmpchat.chat.application.usecase.LoginUseCaseImpl
import me.poc.kmpchat.chat.application.usecase.LogoutUseCaseImpl
import me.poc.kmpchat.chat.data.ChatRepositoryImpl
import me.poc.kmpchat.chat.data.local.ChatLocalStorageImpl
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertNull

class ChatSessionUseCaseTest {
    private val repository = ChatRepositoryImpl(ChatLocalStorageImpl(MapSettings()))
    private val login = LoginUseCaseImpl(repository, Dispatchers.Default)
    private val getSavedSession = GetSavedSessionUseCaseImpl(repository, Dispatchers.Default)
    private val logout = LogoutUseCaseImpl(repository, Dispatchers.Default)

    @Test
    fun sessionIsPersistedAndCleared() = runTest {
        login("Alex Dev")
        assertEquals("Alex Dev", getSavedSession()?.name)

        logout()
        assertNull(getSavedSession())
    }
}
```

---

## 8. Cara Kerja Penyimpanan di Tiap Platform

| Platform | Engine Penyimpanan Native di Balik Layar | Lokasi Data |
| :--- | :--- | :--- |
| **Android** | `android.content.SharedPreferences` | File XML di `/data/data/<package>/shared_prefs/` |
| **iOS** | `Foundation.NSUserDefaults` | `NSUserDefaults.standardUserDefaults` (Plist sandbox app) |
| **Web (Next.js)** | `org.w3c.dom.Storage` (`window.localStorage`) | Browser `localStorage` (bisa dicek via DevTools -> Application -> Local Storage) |
| **Desktop (CMP)** | `java.util.prefs.Preferences` | Registry (Windows), `~/Library/Preferences` (macOS), atau `~/.java/.userPrefs` (Linux) |

---

## 9. Contoh Cek Auto-Login Saat Aplikasi Dibuka

### A. Android / Desktop Compose
```kotlin
LaunchedEffect(Unit) {
    val savedUser = getSavedSessionUseCase()
    if (savedUser != null) {
        currentUser = savedUser
        screen = "CHAT" // Langsung lompat ke layar Chat tanpa perlu Login ulang!
    }
}
```

### B. iOS (SwiftUI)
```swift
.task {
    if let savedUser = try? await deps.getSavedSessionUseCase.invoke() {
        vm.currentUser = savedUser
        screen = "CHAT"
    }
}
```

### C. Web (Next.js)
> **Penting untuk Next.js (SSR):** Karena `multiplatform-settings` di JS menggunakan `window.localStorage`, pastikan pemanggilan dilakukan di dalam `useEffect` (Client-side) agar tidak terjadi error `window is not defined` saat Server-Side Rendering.

```tsx
useEffect(() => {
  const checkSession = async () => {
    const savedSessionUc = KmpFactory.getGetSavedSessionUseCase();
    const savedUser = await savedSessionUc.invoke();
    if (savedUser) {
      setUser(savedUser);
      setScreen('CHAT');
    }
  };
  checkSession();
}, []);
```

---

## 10. Ringkasan Struktur File

```
shared/src/
├── commonMain/kotlin/me/poc/kmpchat/
│   ├── core/
│   │   ├── AppModule.kt                         # commonModule: single<Settings> { Settings() }
│   │   └── storage/
│   │       └── StorageKeys.kt                   # KEY_USER_ID, KEY_USER_NAME, ...
│   └── chat/
│       ├── ChatSharedModule.kt                  # ChatLocalStorage, ChatRepository, use case
│       ├── application/
│       │   ├── ChatRepository.kt                # + getSavedSession(), logout()
│       │   └── usecase/
│       │       ├── GetSavedSessionUseCase.kt    # fun interface + internal Impl
│       │       └── LogoutUseCase.kt             # fun interface + internal Impl
│       └── data/
│           ├── ChatRepositoryImpl.kt            # menerima ChatLocalStorage
│           └── local/
│               └── ChatLocalStorage.kt          # interface + Impl (Settings)
└── commonTest/kotlin/me/poc/kmpchat/chat/
    └── ChatSessionUseCaseTest.kt                # MapSettings
```
