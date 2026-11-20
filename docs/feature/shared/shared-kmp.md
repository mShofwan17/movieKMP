# 🧩 Modul `shared` — Dokumentasi Implementasi Saat Ini

Dokumen ini menjelaskan **kondisi nyata** modul `shared` di KMPChat: struktur file, kontrak domain, use case, DI, jembatan per platform, dan cara memakainya dari Android, Desktop, iOS, dan Web. Dokumen ini menjadi acuan untuk `docs/feature/platform/*-presentation.md`.

- Blueprint arsitektur: [`docs/architecture/kmp-shared-architecture.md`](../../architecture/kmp-shared-architecture.md)
- Panduan library: [`docs/libs/shared/`](../../libs/shared/) (Koin, SKIE, Ktor, multiplatform-settings, cryptography) dan [`docs/libs/platform/`](../../libs/platform/)

> Package root: `me.poc.kmpchat` · Fitur: `chat` · Framework iOS: `Shared` · Package npm: `shared`

---

## 1. Ringkasan

| Aspek | Kondisi saat ini |
|---|---|
| Target | `android`, `iosArm64`, `iosSimulatorArm64`, `jvm`, `js` (browser, `binaries.library()`, `.d.ts`) |
| Layer | `chat/application` (model, repository interface, use case) dan `chat/data` (repository in-memory) |
| Data | **In-memory dummy** (`MutableStateFlow`) di `ChatRepositoryImpl`. Belum ada network/persistence. |
| DI | Koin `4.0.0` — `chatModule` + `commonModule` → `sharedModule` |
| Interop iOS | SKIE `0.10.16` (`suspend` → `async throws`, `Flow` → `AsyncSequence`) |
| Interop Web | `@JsExport` model & use case + `KmpFactory` (getter use case) + `JsObserveChatMessagesUseCase` (Flow → callback) |
| Dependency `commonMain` | `kotlinx-coroutines-core`, `koin-core` |

`shared` **tidak** berisi ViewModel atau kode UI. Module UI hanya bergantung pada **interface use case** dan **model domain**.

---

## 2. Struktur File

```
shared/
├── build.gradle.kts                         # target, SKIE, framework "Shared", JS library
└── src/
    ├── commonMain/kotlin/me/poc/kmpchat/
    │   ├── core/
    │   │   └── AppModule.kt                 # ioDispatcher, commonModule, sharedModule
    │   ├── chat/
    │   │   ├── ChatSharedModule.kt          # val chatModule
    │   │   ├── application/
    │   │   │   ├── ChatRepository.kt        # interface
    │   │   │   ├── model/
    │   │   │   │   ├── ChatMessage.kt       # @JsExport
    │   │   │   │   ├── UserProfile.kt       # @JsExport
    │   │   │   │   └── LoginBody.kt         # validate()
    │   │   │   └── usecase/                 # 1 file = 1 fun interface + internal Impl
    │   │   │       ├── LoginUseCase.kt
    │   │   │       ├── GetProfileUseCase.kt
    │   │   │       ├── ObserveChatMessagesUseCase.kt
    │   │   │       └── SendMessageUseCase.kt
    │   │   └── data/
    │   │       └── ChatRepositoryImpl.kt    # in-memory (MutableStateFlow)
    │   ├── Platform.kt                      # expect fun getPlatform() (template)
    │   ├── Greeting.kt                      # template
    │   └── GreetingUtil.kt                  # template
    ├── commonTest/kotlin/me/poc/kmpchat/chat/
    │   └── ChatUseCaseTest.kt
    ├── iosMain/kotlin/me/poc/kmpchat/
    │   ├── core/KoinIos.kt                  # doInitKoinIos(), KoinDependencies
    │   └── Platform.ios.kt
    ├── jsMain/kotlin/me/poc/kmpchat/
    │   ├── chat/KmpFactory.kt               # @JsExport object: getter use case (Koin lazy)
    │   ├── chat/JsChatAdapter.kt            # JsObserveChatMessagesUseCase, JsSubscription
    │   └── Platform.js.kt
    ├── androidMain/kotlin/me/poc/kmpchat/Platform.android.kt
    └── jvmMain/kotlin/me/poc/kmpchat/Platform.jvm.kt
```

---

## 3. Model Domain (`chat/application/model`)

```kotlin
@JsExport
data class UserProfile(
    val id: String,
    val name: String,
    val bio: String,
    val avatarUrl: String,      // non-null; string kosong jika tidak ada
)

@JsExport
data class ChatMessage(
    val id: String,
    val senderName: String,
    val message: String,        // isi pesan (bukan `text`)
    val isMine: Boolean,
    val timestamp: Long,        // epoch millis; di TS menjadi `bigint`
)

data class LoginBody(val username: String) {
    fun validate(): Result<Unit>   // gagal jika username blank → "Username tidak boleh kosong"
}
```

> `LoginBody` tidak di-`@JsExport` karena hanya dipakai di dalam `LoginUseCaseImpl`.

---

## 4. Repository (`chat/application/ChatRepository.kt`)

```kotlin
interface ChatRepository {
    suspend fun login(username: String): UserProfile
    suspend fun getProfile(userId: String): UserProfile
    fun observeMessages(): Flow<List<ChatMessage>>
    suspend fun sendMessage(text: String)
}
```

Implementasi `ChatRepositoryImpl` (singleton Koin):

| Method | Perilaku saat ini |
|---|---|
| `login(username)` | `delay(500)`, lalu mengganti nama user aktif menjadi `username`. Selalu mengembalikan profil `id = "u1"`. |
| `getProfile(userId)` | **Mengabaikan `userId`**; selalu mengembalikan user aktif. |
| `observeMessages()` | `StateFlow` berisi 3 pesan awal (`m1`–`m3`) + pesan baru. |
| `sendMessage(text)` | Menambah pesan `isMine = true` dengan pengirim = nama user aktif. |

> Karena state disimpan di memori proses, **restart app (atau reload halaman web) = data kembali ke awal**. Tidak ada sesi tersimpan.

---

## 5. Use Case (`chat/application/usecase`)

Semua use case berupa `fun interface` publik + `internal class ...Impl` dengan `CoroutineDispatcher` di-inject. `invoke` pada use case `suspend` diberi `@Throws(Throwable::class)` (interface dan Impl) agar exception menjadi `Error` di Swift.

| Use case | Signature Kotlin | Catatan |
|---|---|---|
| `LoginUseCase` | `suspend operator fun invoke(username: String): UserProfile` | Validasi via `LoginBody.validate()`; username blank → `IllegalArgumentException("Username tidak boleh kosong")` |
| `GetProfileUseCase` | `suspend operator fun invoke(userId: String): UserProfile` | Wajib kirim `userId` (pakai `UserProfile.id` dari hasil login) |
| `ObserveChatMessagesUseCase` | `operator fun invoke(): Flow<List<ChatMessage>>` | Stream panas (`StateFlow`), langsung emit nilai terkini |
| `SendMessageUseCase` | `suspend operator fun invoke(text: String)` | Teks blank **diabaikan** (tidak error) |

`LoginUseCase`, `GetProfileUseCase`, dan `SendMessageUseCase` di-`@JsExport`. `ObserveChatMessagesUseCase` tidak (karena `Flow`), dan diekspos ke JS lewat `JsObserveChatMessagesUseCase`.

### 5.1 Tampilan signature per platform

| Use case | Kotlin (Android/Desktop) | Swift (SKIE) | TypeScript |
|---|---|---|---|
| Login | `loginUseCase(username)` | `try await loginUseCase.invoke(username:)` | `loginUseCase.invoke(username): Promise<UserProfile>` |
| Get profile | `getProfileUseCase(userId)` | `try await getProfileUseCase.invoke(userId:)` | `getProfileUseCase.invoke(userId): Promise<UserProfile>` |
| Observe | `observeChatMessagesUseCase()` → `Flow` | `for await items in observeChatUseCase.invoke()` | `observeUseCase.subscribe(cb): JsSubscription` |
| Send | `sendMessageUseCase(text)` | `try await sendMessageUseCase.invoke(text:)` | `sendMessageUseCase.invoke(text): Promise<void>` |

---

## 6. Dependency Injection

```kotlin
// core/AppModule.kt
const val ioDispatcher = "ioDispatcher"

val commonModule = module {
    single<CoroutineDispatcher>(named(ioDispatcher)) { Dispatchers.Default }
}

val sharedModule: List<Module> = listOf(commonModule, chatModule)
```

```kotlin
// chat/ChatSharedModule.kt
val chatModule = module {
    single<ChatRepository> { ChatRepositoryImpl() }

    factory<LoginUseCase> { LoginUseCaseImpl(get(), get(named(ioDispatcher))) }
    factory<GetProfileUseCase> { GetProfileUseCaseImpl(get(), get(named(ioDispatcher))) }
    factory<ObserveChatMessagesUseCase> { ObserveChatMessagesUseCaseImpl(get(), get(named(ioDispatcher))) }
    factory<SendMessageUseCase> { SendMessageUseCaseImpl(get(), get(named(ioDispatcher))) }
}
```

> Tidak ada fungsi `initKoin()`. Setiap platform memanggil `startKoin { modules(sharedModule ...) }` sendiri (lihat §7).

---

## 7. Inisialisasi per Platform

| Platform | Titik inisialisasi | Status |
|---|---|---|
| Android | `androidApp/.../MainApplication.kt` → `startKoin { androidContext(this); modules(sharedModule) }` | ✅ ada |
| Desktop | `desktopApp/.../main.kt` → `startKoin { modules(sharedModule) }` sebelum `application {}` | ✅ ada |
| iOS | `iOSApp.swift` → `KoinIosKt.doInitKoinIos()` di `init()` | ✅ ada |
| Web | `KmpFactory` → Koin di-start **lazy** saat getter pertama dipanggil | ✅ ada (tanpa `init()`) |

Module UI menambahkan module ViewModel-nya sendiri, misalnya `modules(sharedModule + androidViewModelModule)`.

### 7.1 Jembatan iOS (`iosMain/.../core/KoinIos.kt`)

```kotlin
fun doInitKoinIos() { startKoin { modules(sharedModule) } }

class KoinDependencies : KoinComponent {
    val loginUseCase: LoginUseCase by inject()
    val getProfileUseCase: GetProfileUseCase by inject()
    val observeChatUseCase: ObserveChatMessagesUseCase by inject()
    val sendMessageUseCase: SendMessageUseCase by inject()
}
```

### 7.2 Jembatan Web (`jsMain/.../chat/`)

```kotlin
@JsExport
object KmpFactory {
    private val koinApp by lazy { startKoin { modules(sharedModule) }.koin }

    fun getLoginUseCase(): LoginUseCase = koinApp.get()
    fun getGetProfileUseCase(): GetProfileUseCase = koinApp.get()
    fun getObserveChatMessagesUseCase(): JsObserveChatMessagesUseCase =
        JsObserveChatMessagesUseCase(koinApp.get<ObserveChatMessagesUseCase>())
    fun getSendMessageUseCase(): SendMessageUseCase = koinApp.get()
}

@JsExport
class JsObserveChatMessagesUseCase internal constructor(private val useCase: ObserveChatMessagesUseCase) {
    fun subscribe(onData: (Array<ChatMessage>) -> Unit): JsSubscription
}

@JsExport
class JsSubscription(private val onUnsubscribe: () -> Unit) { fun unsubscribe() }
```

Potongan `.d.ts` yang dihasilkan (`shared/build/dist/js/developmentLibrary/shared.d.mts`):

```ts
export declare class UserProfile { get id(): string; get name(): string; get bio(): string; get avatarUrl(): string; }
export declare class ChatMessage { get id(): string; get senderName(): string; get message(): string; get isMine(): boolean; get timestamp(): bigint; }
export declare interface LoginUseCase { invoke(username: string): Promise<UserProfile>; }
export declare interface GetProfileUseCase { invoke(userId: string): Promise<UserProfile>; }
export declare interface SendMessageUseCase { invoke(text: string): Promise<void>; }
export declare class JsObserveChatMessagesUseCase { subscribe(onData: (p0: Array<ChatMessage>) => void): JsSubscription; }
export declare abstract class KmpFactory { static readonly getInstance: () => /* KmpFactory */; }
```

Pemakaian dari TypeScript:

```ts
import { KmpFactory } from 'shared';

const factory = KmpFactory.getInstance();
const profile = await factory.getLoginUseCase().invoke('Alex Dev');
const sub = factory.getObserveChatMessagesUseCase().subscribe((items) => console.log(items));
sub.unsubscribe();
```

> `timestamp` bertipe `bigint` (compiler flag `-Xes-long-as-bigint`). Konversi dengan `Number(m.timestamp)` sebelum dipakai untuk `Date`.

---

## 8. Konfigurasi Build (`shared/build.gradle.kts`)

```kotlin
plugins {
    alias(libs.plugins.kotlinMultiplatform)
    alias(libs.plugins.androidMultiplatformLibrary)
    alias(libs.plugins.skie)
}

kotlin {
    listOf(iosArm64(), iosSimulatorArm64()).forEach {
        it.binaries.framework { baseName = "Shared"; isStatic = true }
    }
    jvm()
    js {
        outputModuleName = "shared"
        browser()
        binaries.library()
        generateTypeScriptDefinitions()
        compilerOptions {
            target = "es2015"
            optIn.add("kotlin.js.ExperimentalJsExport")
            freeCompilerArgs.add("-Xes-long-as-bigint")
        }
    }
    android { namespace = "me.poc.kmpchat.shared" /* compileSdk 37, minSdk 24, JVM 11 */ }

    sourceSets {
        commonMain.dependencies {
            implementation(libs.kotlinx.coroutines.core)
            implementation(libs.koin.core)
        }
        commonTest.dependencies {
            implementation(libs.kotlin.test)
            implementation(libs.kotlinx.coroutines.test)
        }
        jsMain.dependencies { implementation(libs.wrappers.browser) }
    }
}

skie {
    features { group { SuspendInterop.Enabled(true); FlowInterop.Enabled(true) } }
    analytics { disableUpload.set(true) }
}
```

Konsumen modul:

| Module | Cara bergantung ke `shared` |
|---|---|
| `androidApp` | saat ini via `:composeUI`; rencana presentation: `implementation(project(":shared"))` langsung (+ `koin-android` untuk `androidContext`) |
| `desktopApp` | saat ini via `:composeUI`; rencana presentation: `implementation(project(":shared"))` langsung (+ `koin-core` untuk `startKoin`, karena di `shared` Koin hanya `implementation`) |
| `composeUI` | `api(project(":shared"))` — **diabaikan dulu**; UI diterapkan di masing-masing platform |
| `iosApp` | framework `Shared` (`import Shared`) |
| `webApp` | npm workspace `shared` → `shared/build/dist/js/developmentLibrary` |

---

## 9. Testing

`commonTest/.../chat/ChatUseCaseTest.kt` menguji use case bersama `ChatRepositoryImpl` asli dengan `Dispatchers.Unconfined`: login sukses/gagal (username blank), get profile, observe pesan awal, dan kirim pesan.

```bash
./gradlew :shared:allTests          # atau :shared:jvmTest
./gradlew :shared:linkDebugFrameworkIosSimulatorArm64
./gradlew :shared:jsBrowserDevelopmentLibraryDistribution   # untuk webApp (npm run build:shared)
```

---

## 10. Batasan & Catatan untuk Layer Presentation

1. **`getProfile` butuh `userId`.** Simpan `UserProfile.id` dari hasil `LoginUseCase` dan teruskan ke layar Chat/Profile (lewat route atau state). Repository saat ini mengabaikannya, tapi kontraknya tetap mewajibkan.
2. **Validasi login sudah di `shared`.** Di Android, Desktop, dan Web, UI cukup menampilkan `error.message` dari exception / `Promise` reject.
3. **iOS: exception jadi `Error` Swift berkat `@Throws`.** `invoke` pada use case `suspend` diberi `@Throws(Throwable::class)`, sehingga semua exception Kotlin bisa di-`catch` di Swift. **Use case `suspend` baru wajib diberi anotasi yang sama** (interface dan Impl); tanpanya, exception selain `CancellationException` meng-crash app iOS.
4. **Kirim pesan kosong diabaikan** di `SendMessageUseCase`. UI tetap sebaiknya men-disable tombol kirim saat input kosong.
5. **Tidak ada sesi tersimpan / logout.** Belum ada `GetSavedSessionUseCase` / `LogoutUseCase` (lihat `docs/libs/shared/shared-multiplatformSettings-integration.md` untuk rencananya).
6. **`avatarUrl` non-null.** Cek string kosong, bukan `null`.
7. **Nama field pesan adalah `message`, waktu adalah `timestamp`.**
8. **File template** (`Greeting`, `GreetingUtil`, `Platform`) masih ada dan dipakai UI template; aman dihapus setelah UI chat menggantikannya.
