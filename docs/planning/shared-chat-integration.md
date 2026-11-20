# 📋 Perencanaan Arsitektur Feature Chat Modul `shared` (KMP Core)

Dokumen ini berisi rancangan teknis dan rencana implementasi fitur **Chat** pada modul `shared` (Kotlin Multiplatform) hingga ke layer **Use Case**. Rancangan ini mengacu pada blueprint arsitektur di [`docs/kmp-shared-architecture.md`](../architecture/kmp-shared-architecture.md) dan spesifikasi fitur di [`docs/kmp-integration-feature.md`](../kmp-integration-feature.md).

---

## 🎯 Batasan Scope & Prinsip Utama
1. **Scope Modul `:shared`**: Hanya mencakup **Domain Models**, **Repository (In-Memory Dummy)**, **Use Cases**, **DI (Koin)**, dan **Web Adapter (`jsMain`)**.
2. **Tidak ada ViewModel/UI Code**: Tidak ada kelas ViewModel, Compose UI, atau dependensi UI di modul `:shared`.
3. **Clean Architecture (Feature-First)**:
   - Package: `me.poc.kmpchat.chat`
   - Pemisahan tegas antara layer `application` (domain) dan `data`.
   - **Use Case = 1 Aksi Bisnis**: `fun interface` (public) dengan implementasi `internal class Impl`.
   - Inject `CoroutineDispatcher` via Koin (`named("ioDispatcher")` / `named("defaultDispatcher")`).

---

## 📐 Struktur Folder Modul `shared`

```
shared/src/
├── commonMain/kotlin/me/poc/kmpchat/
│   ├── core/
│   │   └── AppModule.kt                       # Root DI (commonModule + sharedModule)
│   │
│   └── chat/
│       ├── ChatSharedModule.kt                # Koin Module untuk fitur Chat
│       │
│       ├── application/                       # Layer Domain & Business Logic
│       │   ├── model/
│       │   │   ├── UserProfile.kt             # Data class profile (+ @JsExport)
│       │   │   ├── ChatMessage.kt             # Data class message (+ @JsExport)
│       │   │   └── LoginBody.kt               # Input body dengan validate()
│       │   │
│       │   ├── ChatRepository.kt              # Interface Repository Chat & Auth
│       │   │
│       │   └── usecase/                       # 1 file = 1 fun interface + internal Impl
│       │       ├── LoginUseCase.kt
│       │       ├── GetProfileUseCase.kt
│       │       ├── ObserveChatMessagesUseCase.kt
│       │       └── SendMessageUseCase.kt
│       │
│       └── data/                              # Layer Data (In-Memory Dummy)
│           └── ChatRepositoryImpl.kt          # Impl dengan MutableStateFlow
│
└── jsMain/kotlin/me/poc/kmpchat/chat/
    ├── JsChatAdapter.kt                       # Web subscription adapter untuk ObserveChatMessagesUseCase
    └── KmpFactory.kt                          # Singleton @JsExport untuk konsumsi Next.js / Web
```

---

## 🧱 Spesifikasi Komponen

### 1. Domain Models (`application/model/`)

#### A. `UserProfile.kt`
```kotlin
@OptIn(ExperimentalJsExport::class)
@JsExport
data class UserProfile(
    val id: String,
    val name: String,
    val bio: String,
    val avatarUrl: String
)
```

#### B. `ChatMessage.kt`
```kotlin
@OptIn(ExperimentalJsExport::class)
@JsExport
data class ChatMessage(
    val id: String,
    val senderName: String,
    val message: String,
    val isMine: Boolean,
    val timestamp: Long
)
```

#### C. `LoginBody.kt`
```kotlin
data class LoginBody(val username: String) {
    fun validate(): Result<Unit> {
        if (username.isBlank()) {
            return Result.failure(IllegalArgumentException("Username tidak boleh kosong"))
        }
        return Result.success(Unit)
    }
}
```

---

### 2. Repository Interface (`application/ChatRepository.kt`)

```kotlin
interface ChatRepository {
    suspend fun login(username: String): UserProfile
    suspend fun getProfile(userId: String): UserProfile
    fun observeMessages(): Flow<List<ChatMessage>>
    suspend fun sendMessage(text: String)
}
```

---

### 3. Repository Implementation (`data/ChatRepositoryImpl.kt`)

`ChatRepositoryImpl` menyimpan state di memori menggunakan `MutableStateFlow<List<ChatMessage>>`.

- **Default Profile Dummy**:
  - `id = "u1"`, `name = "Alex Dev"`, `bio = "Mobile & Web explorer | KMP enthusiast"`, `avatarUrl = "https://i.pravatar.cc/150?u=alex"`
- **Dummy Messages Awal**: 3 pesan dummy default.
- **`login(username)`**: Simulasi delay `500ms`, lalu mengembalikan `UserProfile` dengan nama dari parameter.
- **`sendMessage(text)`**: Membuat `ChatMessage` baru (`id = UUID/Timestamp`, `senderName = currentUser.name`, `message = text`, `isMine = true`, `timestamp = System.currentTimeMillis()`), lalu di-emit ke `MutableStateFlow`.

---

### 4. Use Cases (`application/usecase/`)

#### A. `LoginUseCase.kt`
```kotlin
@OptIn(ExperimentalJsExport::class)
@JsExport
fun interface LoginUseCase {
    suspend operator fun invoke(username: String): UserProfile
}

internal class LoginUseCaseImpl(
    private val repository: ChatRepository,
    private val dispatcher: CoroutineDispatcher
) : LoginUseCase {
    override suspend fun invoke(username: String): UserProfile = withContext(dispatcher) {
        val body = LoginBody(username)
        body.validate().getOrThrow()
        repository.login(body.username)
    }
}
```

#### B. `GetProfileUseCase.kt`
```kotlin
@OptIn(ExperimentalJsExport::class)
@JsExport
fun interface GetProfileUseCase {
    suspend operator fun invoke(userId: String): UserProfile
}

internal class GetProfileUseCaseImpl(
    private val repository: ChatRepository,
    private val dispatcher: CoroutineDispatcher
) : GetProfileUseCase {
    override suspend fun invoke(userId: String): UserProfile = withContext(dispatcher) {
        repository.getProfile(userId)
    }
}
```

#### C. `ObserveChatMessagesUseCase.kt`
```kotlin
fun interface ObserveChatMessagesUseCase {
    operator fun invoke(): Flow<List<ChatMessage>>
}

internal class ObserveChatMessagesUseCaseImpl(
    private val repository: ChatRepository,
    private val dispatcher: CoroutineDispatcher
) : ObserveChatMessagesUseCase {
    override fun invoke(): Flow<List<ChatMessage>> =
        repository.observeMessages().flowOn(dispatcher)
}
```

#### D. `SendMessageUseCase.kt`
```kotlin
@OptIn(ExperimentalJsExport::class)
@JsExport
fun interface SendMessageUseCase {
    suspend operator fun invoke(text: String)
}

internal class SendMessageUseCaseImpl(
    private val repository: ChatRepository,
    private val dispatcher: CoroutineDispatcher
) : SendMessageUseCase {
    override suspend fun invoke(text: String) = withContext(dispatcher) {
        if (text.isBlank()) return@withContext
        repository.sendMessage(text)
    }
}
```

---

### 5. Dependency Injection (`ChatSharedModule.kt` & `AppModule.kt`)

#### A. `ChatSharedModule.kt`
```kotlin
val chatModule = module {
    single<ChatRepository> { ChatRepositoryImpl() }

    factory<LoginUseCase> { LoginUseCaseImpl(get(), get(named(ioDispatcher))) }
    factory<GetProfileUseCase> { GetProfileUseCaseImpl(get(), get(named(ioDispatcher))) }
    factory<ObserveChatMessagesUseCase> { ObserveChatMessagesUseCaseImpl(get(), get(named(ioDispatcher))) }
    factory<SendMessageUseCase> { SendMessageUseCaseImpl(get(), get(named(ioDispatcher))) }
}
```

#### B. `AppModule.kt`
```kotlin
const val ioDispatcher = "ioDispatcher"

val commonModule = module {
    single<CoroutineDispatcher>(named(ioDispatcher)) { Dispatchers.Default }
}

val sharedModule: List<Module> = listOf(
    chatModule,
    commonModule
)
```

---

### 6. Web Interop Adapter (`jsMain/`)

Untuk platform Web (Next.js / TypeScript), `Flow` dikonversi menjadi callback subscription.

#### A. `JsChatAdapter.kt`
```kotlin
@OptIn(ExperimentalJsExport::class)
@JsExport
class JsSubscription(private val job: Job) {
    fun unsubscribe() {
        job.cancel()
    }
}

@OptIn(ExperimentalJsExport::class)
@JsExport
class JsObserveChatMessagesUseCase(private val useCase: ObserveChatMessagesUseCase) {
    fun subscribe(onData: (Array<ChatMessage>) -> Unit): JsSubscription {
        val scope = CoroutineScope(Dispatchers.Main + SupervisorJob())
        val job = scope.launch {
            useCase().collect { list ->
                onData(list.toTypedArray())
            }
        }
        return JsSubscription(job)
    }
}
```

#### B. `KmpFactory.kt`
```kotlin
@OptIn(ExperimentalJsExport::class)
@JsExport
object KmpFactory {
    private val koinApp by lazy {
        startKoin {
            modules(sharedModule)
        }.koin
    }

    fun getLoginUseCase(): LoginUseCase = koinApp.get()
    fun getGetProfileUseCase(): GetProfileUseCase = koinApp.get()
    fun getObserveChatMessagesUseCase(): JsObserveChatMessagesUseCase =
        JsObserveChatMessagesUseCase(koinApp.get())
    fun getSendMessageUseCase(): SendMessageUseCase = koinApp.get()
}
```

---

## 🛠️ Step-by-Step Implementation Plan (Modul `shared`)

- [ ] **Langkah 1: Update Dependensi `shared/build.gradle.kts`**
  - Tambahkan `kotlinx-coroutines-core` dan `koin-core` ke `commonMain.dependencies`.
- [ ] **Langkah 2: Buat Domain Models (`application/model/`)**
  - `UserProfile.kt`, `ChatMessage.kt`, `LoginBody.kt`.
- [ ] **Langkah 3: Buat `ChatRepository.kt` & `ChatRepositoryImpl.kt`**
  - Contract interface & In-memory `MutableStateFlow` implementation.
- [ ] **Langkah 4: Buat Use Cases (`application/usecase/`)**
  - `LoginUseCase`, `GetProfileUseCase`, `ObserveChatMessagesUseCase`, `SendMessageUseCase` (`fun interface` + `internal Impl`).
- [ ] **Langkah 5: Konfigurasi Koin DI (`ChatSharedModule.kt` & `AppModule.kt`)**
  - Pendaftaran repository (`single`) & use cases (`factory`).
- [ ] **Langkah 6: Konfigurasi Web Adapter (`jsMain/`)**
  - `JsSubscription`, `JsObserveChatMessagesUseCase`, `KmpFactory`.
- [ ] **Langkah 7: Verifikasi & Test (`commonTest/`)**
  - Buat unit test untuk `ChatRepositoryImpl` dan ke-4 UseCase di `commonTest`.
  - Jalankan build `./gradlew :shared:assemble`.
