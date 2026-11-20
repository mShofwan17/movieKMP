# Arsitektur Module `shared` (Kotlin Multiplatform)

Dokumen ini menjelaskan arsitektur module `shared` di NgucapinFans sebagai **blueprint** yang bisa
diterapkan ulang di project KMP lain. Semua contoh kode diambil dari implementasi nyata di repo ini
(package `id.sovereign.ngucapin.fans`) — ganti package dan nama fitur sesuai project kamu.

---

## 1. Gambaran Umum

`shared` adalah module **non-UI** yang berisi seluruh logika bisnis dan akses data. Module UI
(`composeApp`, `iosApp`) hanya bergantung pada **interface** use case & model domain dari `shared`.

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ androidApp / iosApp / desktopApp / webApp  (UI: Screen, ViewModel, viewModelModule)    │
└───────────────┬────────────────────────────────────────────────────────────────────────┘
                │ inject UseCase (interface) via Koin
┌───────────────▼──────────────────────────────────────────────────┐
│ shared                                                           │
│                                                                  │
│  <feature>/application   ← domain: Repository (interface),       │
│                            model, usecase                        │
│  <feature>/data          ← RepositoryImpl, RemoteService, DTO    │
│  <feature>/<Feature>SharedModule.kt  ← Koin module per fitur     │
│                                                                  │
│  core/                   ← HttpClient, error handling, DI root,  │
│                            helpers, firebase, network inspector  │
└──────────────────────────────────────────────────────────────────┘
```

Prinsip utama:

- **Feature-first, lalu layer.** Folder level atas adalah fitur (`auth`, `artist`, `profile`, ...),
  di dalamnya dipecah per layer (`application`, `data`).
- **Arah dependensi satu arah:** `UI → application ← data`. Layer `application` tidak tahu Ktor,
  DTO, atau `Settings`.
- **UseCase = satu aksi bisnis**, diekspos sebagai `fun interface`, implementasinya `internal`.
- **Semua wiring lewat Koin**, dikumpulkan dalam satu list `sharedModule`.
- **Hampir semua kode di `commonMain`.** `expect/actual` hanya dipakai untuk hal yang benar-benar
  platform-spesifik (engine HTTP, flag debug, `Platform`).

---

## 2. Struktur Folder

```
shared/
├── build.gradle.kts
└── src/
    ├── commonMain/kotlin/<package>/
    │   ├── core/
    │   │   ├── AppModule.kt              # commonModule + sharedModule (root DI)
    │   │   ├── Helpers.kt                # util KMP-safe (format tanggal, mime type, URL media)
    │   │   ├── httpClient/
    │   │   │   ├── HttpClient.kt         # provideHttpClient(): base URL, JSON, Logging, Auth bearer
    │   │   │   ├── ExceptionHandlers.kt  # HttpResponse.bodyOrError()
    │   │   │   └── models/
    │   │   │       ├── ApiException.kt
    │   │   │       └── ErrorResponse.kt
    │   │   ├── network/                  # expect engine, isDebugBuild, network inspector (debug)
    │   │   └── firebase/remoteConfig/    # service + module Remote Config
    │   │
    │   ├── <feature>/                    # contoh: artist
    │   │   ├── <Feature>SharedModule.kt  # val artistModule = module { ... }
    │   │   ├── application/
    │   │   │   ├── <Feature>Repository.kt        # interface
    │   │   │   ├── model/                        # data class domain (+ validasi)
    │   │   │   └── usecase/                      # 1 file = 1 fun interface + Impl
    │   │   ├── data/
    │   │   │   ├── <Feature>RepositoryImpl.kt
    │   │   │   ├── service/<Feature>RemoteService.kt   # interface + Impl (Ktor)
    │   │   │   └── dto/
    │   │   │       ├── request/
    │   │   │       └── response/                 # @Serializable + toModel()
    │   │
    │   ├── Platform.kt                   # expect fun getPlatform()
    │   └── Greeting.kt
    │
    ├── commonTest/kotlin/<package>/<feature>/    # unit test use case & repository
    ├── androidMain/
    │   ├── AndroidManifest.xml           # ContentProvider untuk menangkap app Context
    │   └── kotlin/<package>/core/network/ # OkHttp engine + Chucker, BuildConfig.DEBUG
    ├── iosMain/kotlin/<package>/core/network/     # Darwin engine, Platform.isDebugBinary
    └── jvmMain/kotlin/<package>/core/network/     # Java engine
```

Konvensi penamaan:

| Elemen | Pola | Contoh |
|---|---|---|
| Koin module fitur | `<Feature>SharedModule.kt` berisi `val <feature>Module` | `ArtistSharedModule.kt` → `artistModule` |
| Repository | `<Feature>Repository` / `<Feature>RepositoryImpl` | `ArtistRepository`, `ArtistRepositoryImpl` |
| Remote service | `<Feature>RemoteService` / `<Feature>RemoteServiceImpl` | `ArtistRemoteService` |
| Use case | `<Verb><Object>UseCase` / `...UseCaseImpl` | `GetDetailArtistUseCase` |
| DTO request/response | `<Name>Request` / `<Name>Response` | `LoginRequest`, `ArtisResponse` |
| Model domain | nama bisnis, tanpa suffix | `ArtistItem`, `ArtistDetail` |
| Body input domain | `<Action>Body` (punya `validate()` & `toRequest()`) | `LoginBody`, `RegisterBody` |

---

## 3. Layer per Fitur

Alur data untuk satu request:

```
ViewModel
  └─ UseCase.invoke()                 application/usecase   (dispatcher, validasi, orkestrasi)
       └─ Repository.method()         application (interface) → data/RepositoryImpl
            └─ RemoteService.method() data/service           (Ktor call → DTO)
                 └─ HttpClient        core/httpClient
            ← DTO.toModel()           mapping DTO → model domain
  ← Flow<Model> / Model
```

### 3.1 Model domain (`application/model`)

Data class murni, tanpa anotasi serialisasi. Nilai sudah "bersih" (nullable di-resolve, URL
sudah lengkap, dll).

```kotlin
data class ArtistItem(
    val id: Int,
    val name: String,
    val imageUrl: String?,
    val ratings: Double,
    val category: String,
)
```

Untuk input dari user, buat `<Action>Body` yang memegang **validasi** dan **konversi ke request DTO**:

```kotlin
data class LoginBody(val email: String, val password: String) {
    fun validate(): Result<Unit> {
        if (email.isBlank()) return Result.failure(IllegalArgumentException("Email tidak boleh kosong"))
        // ... aturan lain
        return Result.success(Unit)
    }

    fun toRequest(): LoginRequest = LoginRequest(email = email, password = password)
}
```

> Catatan: `toRequest()` membuat `application` meng-import DTO dari `data`. Ini kompromi praktis
> di project ini. Jika ingin layer domain benar-benar bersih, pindahkan mapping ke `RepositoryImpl`.

### 3.2 Repository interface (`application/<Feature>Repository.kt`)

Kontrak yang dipakai use case. Hanya berbicara dalam **model domain**.

```kotlin
interface ArtistRepository {
    suspend fun getListCategory(activeOnly: Boolean): List<ArtistCategory>
    suspend fun getListArtistAll(page: Int, pageSize: Int): List<ArtistItem>
    suspend fun getDetailArtist(id: String): ArtistDetail
}
```

### 3.3 Use case (`application/usecase`)

Satu file berisi `fun interface` publik + implementasi `internal`. Dispatcher di-inject (bukan
hardcode) agar mudah di-test.

**Varian A — mengembalikan `Flow`** (paling umum, untuk data yang di-collect di ViewModel):

```kotlin
fun interface GetDetailArtistUseCase {
    fun invoke(id: String): Flow<ArtistDetail>
}

internal class GetDetailArtistUseCaseImpl(
    private val repository: ArtistRepository,
    private val dispatcher: CoroutineDispatcher
) : GetDetailArtistUseCase {
    override fun invoke(id: String): Flow<ArtistDetail> = flow {
        emit(repository.getDetailArtist(id))
    }.flowOn(dispatcher)
}
```

**Varian B — `suspend` one-shot** (untuk nilai tunggal / status):

```kotlin
fun interface GetDetailBannerUseCase {
    suspend fun invoke(id: String): BannerDetail
}

internal class GetDetailBannerUseCaseImpl(
    private val repository: BannerRepository,
    private val dispatcher: CoroutineDispatcher
) : GetDetailBannerUseCase {
    override suspend fun invoke(id: String): BannerDetail = withContext(dispatcher) {
        repository.getDetailBanner(id)
    }
}
```

**Use case dengan validasi** — validasi dijalankan di dalam flow agar error sampai ke collector:

```kotlin
override fun invoke(email: String, password: String): Flow<Boolean> = flow {
    val body = LoginBody(email = email, password = password)
    body.validate().getOrThrow()
    repository.doLogin(body).collect { emit(it) }
}.flowOn(dispatcher)
```

Kenapa `fun interface` + `internal` Impl:

- UI hanya melihat kontrak; implementasi bisa diganti tanpa menyentuh UI.
- `fun interface` memudahkan membuat stub lambda di test ViewModel (`GetDetailBannerUseCase { BannerDetail(...) }`).
- `internal` mencegah UI membuat instance langsung — wajib lewat Koin.
- Boleh pakai `operator fun invoke` agar bisa dipanggil `useCase(...)`.

### 3.4 Remote service (`data/service`)

Interface + Impl berbasis Ktor. Path relatif (base URL diatur di `HttpClient`). Selalu akhiri
dengan `.bodyOrError()` agar error HTTP dikonversi ke `ApiException`.

```kotlin
interface ArtistRemoteService {
    suspend fun getArtisAll(page: Int, perPage: Int): ArtisResponse
    suspend fun getDetailArtist(id: String): ArtistDetailResponse
}

class ArtistRemoteServiceImpl(private val httpClient: HttpClient) : ArtistRemoteService {
    override suspend fun getArtisAll(page: Int, perPage: Int): ArtisResponse =
        httpClient.get("artists") {
            parameter("page", page)
            parameter("per_page", perPage)
        }.bodyOrError()

    override suspend fun getDetailArtist(id: String): ArtistDetailResponse =
        httpClient.get("artists/$id").bodyOrError()
}
```

Upload multipart (contoh `ProfileRemoteService.uploadAvatar`):

```kotlin
httpClient.post("users/me/avatar") {
    setBody(MultiPartFormDataContent(formData {
        append("file", fileBytes, Headers.build {
            append(HttpHeaders.ContentDisposition, "form-data; name=\"file\"; filename=\"$fileName\"")
            append(HttpHeaders.ContentType, guessMimeType(fileName))
        })
    }))
}.bodyOrError<AvatarUploadResponse>()
```

Download dengan progress (contoh `UcapanRemoteServiceImpl.downloadOrderVideo`):

```kotlin
client.get("orders/$orderId/download") {
    onDownload { downloaded, total -> onProgress?.invoke(downloaded, total) }
}.bodyOrError<ByteArray>()
```

### 3.5 DTO (`data/dto`)

`@Serializable` + `@SerialName` untuk snake_case API. Beri default untuk field yang mungkin tidak
ada. **Mapping ke domain diletakkan di DTO** lewat `toModel()`.

```kotlin
@Serializable
data class ArtisItemResponse(
    @SerialName("id") val id: Int,
    @SerialName("stage_name") val stageName: String,
    @SerialName("avatar_url") val avatarUrl: String?,
    @SerialName("rating") val rating: Double,
    @SerialName("category_name") val categoryName: String,
    @SerialName("bio") val bio: String? = "",
) {
    fun toModel(): ArtistItem = ArtistItem(
        id = id,
        name = stageName,
        imageUrl = avatarUrl?.resolvedAvatarUrl(),
        ratings = rating,
        category = categoryName,
    )
}

@Serializable
data class ArtisResponse(@SerialName("items") val items: List<ArtisItemResponse> = emptyList())
```

### 3.6 Repository implementation (`data/<Feature>RepositoryImpl.kt`)

Memanggil remote service (dan/atau storage lokal), lalu memetakan DTO → model.

```kotlin
class ArtistRepositoryImpl(
    private val remoteService: ArtistRemoteService
) : ArtistRepository {
    override suspend fun getListArtistAll(page: Int, pageSize: Int): List<ArtistItem> =
        remoteService.getArtisAll(page = page, perPage = pageSize).items.map { it.toModel() }

    override suspend fun getDetailArtist(id: String): ArtistDetail =
        remoteService.getDetailArtist(id).toModel()
}
```

Repository yang butuh penyimpanan lokal menerima `Settings` (multiplatform-settings), contohnya
`AuthRepositoryImpl` yang menyimpan token. Kunci storage didefinisikan sebagai konstanta di
`companion object` agar bisa dipakai juga oleh `HttpClient`:

```kotlin
class AuthRepositoryImpl(
    private val remoteService: AuthRemoteService,
    private val settings: Settings
) : AuthRepository {
    companion object {
        const val KEY_ACCESS_TOKEN = "access_token"
        const val KEY_REFRESH_TOKEN = "refresh_token"
        const val KEY_LOGIN_STATUS = "login_status"
        // ...
    }

    override fun doLogin(loginBody: LoginBody): Flow<Boolean> = flow {
        val response = remoteService.login(request = loginBody.toRequest())
        saveCredentials(response.toModel())
        emit(true)
    }
}
```

---

## 4. Dependency Injection (Koin)

### 4.1 Module per fitur

Aturan scope:

- `single` → `RemoteService`, `Repository` (stateless / shared state).
- `factory` → `UseCase` (ringan, dibuat per injeksi).
- Dispatcher di-inject dengan qualifier `named(ioDispatcher)`.

```kotlin
val artistModule = module {
    single<ArtistRemoteService> { ArtistRemoteServiceImpl(httpClient = get()) }
    single<ArtistRepository> { ArtistRepositoryImpl(remoteService = get()) }

    factory<GetListArtistAllUseCase> {
        GetListArtistAllUseCaseImpl(get(), get(named(ioDispatcher)))
    }
    factory<GetDetailArtistUseCase> {
        GetDetailArtistUseCaseImpl(get(), get(named(ioDispatcher)))
    }
}
```

Selalu deklarasikan dengan tipe interface (`single<ArtistRepository> { ... }`) supaya consumer
hanya bergantung pada kontrak.

### 4.2 Root module (`core/AppModule.kt`)

```kotlin
const val ioDispatcher = "ioDispatcher"

val commonModule = module {
    single<CoroutineDispatcher>(named(ioDispatcher)) { Dispatchers.Default }
    single { Settings() }                    // multiplatform-settings-no-arg
    single { provideHttpClient(get()) }
}

val sharedModule: List<Module> = listOf(
    authModule,
    profileModule,
    bannerModule,
    artistModule,
    ucapanModule,
    reviewModule,
    paymentModule,
    remoteConfigModule,
    commonModule
)
```

> `Dispatchers.IO` tidak tersedia di semua target KMP (mis. JS), sehingga project ini memakai
> `Dispatchers.Default`. Di project yang hanya Android/iOS/JVM kamu bisa memakai `Dispatchers.IO`
> (`kotlinx.coroutines.IO` di Native).

### 4.3 Konsumsi dari UI (`composeApp`)

```kotlin
// composeApp/.../core/di/AppModule.kt
val appModule: List<Module> = viewModelModule + sharedModule

// App.kt
KoinApplication(configuration = koinConfiguration { modules(appModule) }) {
    val remoteConfigService = koinInject<RemoteConfigService>()
    LaunchedEffect(Unit) { runCatching { remoteConfigService.initialize() } }
    /* NavHost ... */
}

// viewModelModule
viewModel { HomeViewModel(get(), get(), get(), get(), get(), get(), get()) }
```

ViewModel hanya menerima use case (dan service publik seperti `RemoteConfigService`):

```kotlin
class HomeViewModel(
    private val getListCategoryUseCase: GetListCategoryUseCase,
    private val getDetailBannerUseCase: GetDetailBannerUseCase,
    // ...
) : ViewModel() {
    private fun loadCategories() = viewModelScope.launch {
        getListCategoryUseCase.invoke(activeOnly = true)
            .catch { e -> _uiState.update { it.copy(error = e.message) } }
            .collect { cats -> _uiState.update { it.copy(categories = cats) } }
    }
}
```

---

## 5. Core: Networking

### 5.1 `provideHttpClient(settings)`

Satu `HttpClient` untuk seluruh app, dengan plugin:

| Plugin | Fungsi |
|---|---|
| `defaultRequest` | `https://<BASE_HOST>/api/` + header `Accept`/`Content-Type: application/json` |
| `ContentNegotiation` | kotlinx.serialization JSON, `ignoreUnknownKeys = true`, `isLenient = true` |
| `Logging` | `LogLevel.ALL` dengan `sanitizeHeader` untuk `Authorization` |
| `Auth` (bearer) | `loadTokens` dari `Settings`, `refreshTokens` otomatis saat 401, `sendWithoutRequest` hanya untuk path yang dilindungi |
| `NetworkInspectorPlugin` | hanya debug build & bila inspector terdaftar (iOS/Pulse) — lihat §6 |

Pola penting di blok `Auth`:

```kotlin
install(Auth) {
    bearer {
        loadTokens {
            if (!settings.getBoolean(KEY_LOGIN_STATUS, false)) return@loadTokens null
            BearerTokens(
                accessToken = settings.getStringOrNull(KEY_ACCESS_TOKEN) ?: return@loadTokens null,
                refreshToken = settings.getStringOrNull(KEY_REFRESH_TOKEN) ?: return@loadTokens null,
            )
        }

        refreshTokens {
            // Jangan refresh untuk host pihak ketiga (mis. FCM)
            if (response.call.request.url.host != BASE_HOST) return@refreshTokens null
            try {
                val res = client.post("auth/refresh") {
                    markAsRefreshTokenRequest()        // cegah loop refresh
                    setBody(RefreshTokenRequest(refreshToken = storedRefreshToken))
                }.body<RefreshTokenResponse>()
                settings.putString(KEY_ACCESS_TOKEN, res.accessToken)
                settings.putString(KEY_REFRESH_TOKEN, res.refreshToken)
                BearerTokens(res.accessToken, res.refreshToken)
            } catch (_: Throwable) {
                client.clearAuthTokens()
                clearAuthTokens(settings)              // paksa logout
                null
            }
        }

        // Kirim token proaktif hanya ke endpoint yang butuh auth
        sendWithoutRequest { request ->
            shouldSendBearerToken(request.url.host, request.url.encodedPath)
        }
    }
}
```

`shouldSendBearerToken` mencocokkan path dengan daftar `protectedPaths`
(`api/users/me/...`, `api/orders`, `api/payments/...`, dll). Saat menambah endpoint ber-auth,
**tambahkan prefix path-nya ke daftar ini**.

### 5.2 Error handling (`ExceptionHandlers.kt`)

Semua response diproses lewat satu extension:

```kotlin
suspend inline fun <reified T> HttpResponse.bodyOrError(): T {
    if (status.isSuccess()) return body()
    val message = try {
        jsonParser.decodeFromString<ErrorResponse>(bodyAsText()).detail
    } catch (_: Exception) { null }
    throw ApiException(message ?: "Terjadi kesalahan")
}
```

- `ErrorResponse` mengikuti format error backend (`{"detail": "..."}`) — sesuaikan dengan API kamu.
- `ApiException(message)` di-throw → mengalir ke `Flow` → ditangkap `.catch {}` di ViewModel →
  `e.message` siap ditampilkan.

### 5.3 Engine per platform (`expect/actual`)

```kotlin
// commonMain
internal expect fun providePlatformHttpClientEngine(): HttpClientEngine

// androidMain — OkHttp (bukan ktor-client-android) agar Chucker bisa dipasang
internal actual fun providePlatformHttpClientEngine() = OkHttp.create {
    addInterceptor(ChuckerInterceptor.Builder(AppContextHolder.appContext) /* ... */ .build())
}

// iosMain
internal actual fun providePlatformHttpClientEngine() = Darwin.create()

// jvmMain
internal actual fun providePlatformHttpClientEngine() = Java.create()
```

`HttpClient(providePlatformHttpClientEngine()) { ... }` — konfigurasi plugin tetap 100% di common.

---

## 6. Core: Network Inspector (debug only)

Ringkasnya (detail lengkap di `docs/NETWORK_DEBUGGING.md`):

| Platform | Mekanisme | Aktif di release? |
|---|---|---|
| Android | `ChuckerInterceptor` di OkHttp engine | Tidak — `releaseImplementation(chucker-noop)` |
| iOS | `NetworkInspectorPlugin` (Ktor) → `NetworkInspector` yang diimplementasi Swift (Pulse) | Tidak — dijaga `isDebugBuild` (`Platform.isDebugBinary`) |
| JVM | tidak ada | — |

Komponen di `core/network`:

- `isDebugBuild` (`expect val`) — `BuildConfig.DEBUG` / `Platform.isDebugBinary` / `false`.
- `NetworkInspector` (interface) + `NoOpNetworkInspector` + `NetworkInspectorRegistry`
  (Swift memanggil `NetworkInspectorRegistry.shared.register(...)` saat startup).
- `NetworkLogSanitizer` — masking header & field JSON sensitif, batas ukuran body 256 KB,
  placeholder untuk binary/multipart/streaming.
- `AppContextInitializer` (androidMain) — `ContentProvider` yang menangkap `applicationContext`
  sebelum `Application.onCreate`, didaftarkan di `shared/src/androidMain/AndroidManifest.xml`,
  sehingga `shared` tidak butuh wiring dari app.

```xml
<provider
    android:name="<package>.core.network.AppContextInitializer"
    android:authorities="${applicationId}.<unik>.shared.contextprovider"
    android:exported="false" />
```

Bagian ini opsional — boleh dilewati jika project baru belum butuh network inspector.

---

## 7. Core: Service Pihak Ketiga (contoh Firebase Remote Config)

Pola untuk SDK eksternal: **interface publik + implementasi `internal`**, sehingga UI tidak
bergantung langsung pada SDK.

```kotlin
// Kontrak publik
interface RemoteConfigService {
    suspend fun initialize()
    fun getValues(): RemoteConfigValues
}

// Implementasi tersembunyi (GitLive Firebase SDK)
internal class FirebaseRemoteConfigService : RemoteConfigService {
    // Lazy getter: Koin bisa membuat objek ini sebelum Firebase.initialize() dipanggil
    private val remoteConfig get() = Firebase.remoteConfig
    override suspend fun initialize() { /* settings, setDefaults, fetchAndActivate */ }
    override fun getValues() = RemoteConfigValues(/* ... */)
}

internal object RemoteConfigKeys { const val FIREBASE_TOKEN_ARTIST = "firebase_token_artist" }
internal object RemoteConfigDefaults { const val FIREBASE_TOKEN_ARTIST = "" }

val remoteConfigModule = module {
    single<RemoteConfigService> { FirebaseRemoteConfigService() }
}
```

---

## 8. Testing

Dependency test di `commonTest`: `kotlin-test`, `kotlinx-coroutines-test`,
`multiplatform-settings-test` (`MapSettings`), dan plugin **Mokkery** untuk mocking.

### 8.1 Test use case + repository nyata + mock service

Mock `RemoteService` dengan Mokkery, lalu uji use case bersama `RepositoryImpl` yang asli
(sekaligus menguji mapping DTO → model):

```kotlin
class ArtistUseCaseTest {
    private val remoteService = mock<ArtistRemoteService>()
    private val useCase = GetListArtistAllUseCaseImpl(
        ArtistRepositoryImpl(remoteService),
        Dispatchers.Default
    )

    @Test
    fun `GetListArtistAllUseCase returns correct list`() = runTest {
        everySuspend { remoteService.getArtisAll(any(), any()) } returns ArtisResponse(
            items = listOf(/* ArtisItemResponse(...) */)
        )

        val result = useCase.invoke(page = 1, pageSize = 20).first()

        assertEquals("Tulus", result.first().name)
        verifySuspend { remoteService.getArtisAll(page = 1, perPage = 20) }
    }
}
```

Karena `UseCaseImpl` bersifat `internal`, test di `commonTest` module yang sama tetap bisa
mengaksesnya.

### 8.3 Coverage (Kover)

`kover` di-setup dengan exclude untuk kode wiring/boilerplate: `*SharedModule*`, `*.AppModule*`,
`*.Platform*`, `*RemoteServiceImpl*`, `*.dto.*`. Laporan HTML & XML dibuat saat `check`.

```bash
./gradlew :shared:allTests
./gradlew :shared:koverHtmlReport
```

---

## 9. Setup `build.gradle.kts`

```kotlin
plugins {
    alias(libs.plugins.kotlinMultiplatform)
    alias(libs.plugins.androidLibrary)
    alias(libs.plugins.kotlinSerialization)
    alias(libs.plugins.kover)      // opsional
    alias(libs.plugins.mokkery)    // opsional
}

kotlin {
    androidTarget { compilerOptions { jvmTarget.set(JvmTarget.JVM_11) } }
    iosArm64()
    iosSimulatorArm64()
    jvm()

    sourceSets {
        commonMain.dependencies {
            implementation(project.dependencies.platform(libs.koin.bom))
            implementation(libs.koin.core)
            implementation(libs.kotlinx.coroutines.core)
            implementation(libs.ktor.client.core)
            implementation(libs.ktor.client.content.negotiation)
            implementation(libs.ktor.serialization.kotlinx.json)
            implementation(libs.ktor.client.logging)
            implementation(libs.ktor.client.auth)
            implementation(libs.kotlinx.serialization.core)
            implementation(libs.kotlinx.datetime)
            implementation(libs.multiplatform.settings)   // no-arg → Settings()
        }
        androidMain.dependencies { implementation(libs.ktor.client.okhttp) }
        iosMain.dependencies     { implementation(libs.ktor.client.darwin) }
        jvmMain.dependencies     { implementation(libs.ktor.client.java) }
        commonTest.dependencies {
            implementation(libs.kotlin.test)
            implementation(libs.kotlinx.coroutines.test)
            implementation(libs.multiplatform.settings.test)
        }
    }
}

android {
    namespace = "<package>.shared"
    compileSdk = libs.versions.android.compileSdk.get().toInt()
    defaultConfig { minSdk = libs.versions.android.minSdk.get().toInt() }
    buildFeatures { buildConfig = true }   // untuk BuildConfig.DEBUG (isDebugBuild)
}
```

Versi yang dipakai di project ini (referensi): Kotlin 2.4.0, Ktor 3.4.0, Koin BOM 4.2.1,
Coroutines 1.10.2, Kover 0.9.8, Mokkery 3.4.2, GitLive Firebase 2.4.0, Chucker 4.2.0.

---

## 10. Checklist: Menambah Fitur Baru

Contoh fitur `order`:

1. **Model domain** — `order/application/model/OrderItem.kt` (+ `CreateOrderBody` dengan
   `validate()` jika ada input user).
2. **Repository interface** — `order/application/OrderRepository.kt`.
3. **DTO** — `order/data/dto/request/*Request.kt`, `order/data/dto/response/*Response.kt`
   dengan `@Serializable`, `@SerialName`, dan `toModel()`.
4. **Remote service** — `order/data/service/OrderRemoteService.kt` (interface + Impl,
   gunakan `.bodyOrError()`).
5. **Repository impl** — `order/data/OrderRepositoryImpl.kt` (panggil service, map ke model).
6. **Use case** — satu file per aksi di `order/application/usecase/`, `fun interface` + `internal Impl`
   dengan `CoroutineDispatcher` di-inject.
7. **Koin module** — `order/OrderSharedModule.kt` → `val orderModule = module { ... }`.
8. **Daftarkan** `orderModule` ke `sharedModule` di `core/AppModule.kt`.
9. **Endpoint ber-auth?** Tambahkan prefix path ke `protectedPaths` di `HttpClient.kt`.
10. **Test** — mock `OrderRemoteService` (Mokkery) + test use case/repository di `commonTest`.
11. **Kover** — tambahkan `"*.OrderSharedModule*"` ke exclude jika perlu.
12. **UI** — inject use case ke ViewModel di `viewModelModule` (`composeApp`).

---

## 11. Checklist: Bootstrap di Project Baru

1. Buat module `shared` (KMP library) dan `include(":shared")` di `settings.gradle.kts`.
2. Salin `build.gradle.kts` (§9) dan entri yang dibutuhkan di `libs.versions.toml`.
3. Salin folder `core/`:
   - `AppModule.kt` (kosongkan list fitur dulu),
   - `httpClient/` — ganti `BASE_HOST`, `BASE_PATH`, format `ErrorResponse`, endpoint refresh
     token, dan `protectedPaths`,
   - `network/HttpClientEngine*.kt` + `IsDebugBuild*.kt` untuk tiap target,
   - `Helpers.kt` sesuai kebutuhan.
4. Buat fitur `auth` terlebih dulu (dibutuhkan `HttpClient` untuk kunci token `KEY_*`).
5. Di app: `KoinApplication(configuration = koinConfiguration { modules(viewModelModule + sharedModule) })`.
6. iOS: framework `shared` diekspor dari module UI (`composeApp`) atau langsung dari `shared`,
   sesuai setup project.
7. (Opsional) network inspector: Chucker (Android) + Pulse (iOS) — ikuti `docs/NETWORK_DEBUGGING.md`.

---

## 12. Catatan & Rekomendasi Perbaikan

Hal-hal yang ditemukan di implementasi saat ini dan sebaiknya diperbaiki saat diterapkan ulang:

- **Kunci token di-import dari `AuthRepositoryImpl` oleh `HttpClient`.** Lebih rapi jika
  dipindah ke objek `core` tersendiri (mis. `core/storage/StorageKeys.kt`) agar `core` tidak
  bergantung pada fitur `auth`.
- **Konsistensi `bodyOrError()`** — beberapa method masih memakai `.body()` langsung
  (mis. `getDetailArtist`), sehingga error HTTP tidak dikonversi ke `ApiException`.
- **`println` debug** di remote service (mis. `uploadAvatar`) — hapus atau ganti logger.
- **`Endpoints.kt` masih kosong** — bisa dipakai untuk memusatkan path endpoint sebagai konstanta.
- **Validasi & `toRequest()` di model domain** — pertimbangkan memindahkan mapping ke data layer
  jika ingin `application` bebas dari DTO.
