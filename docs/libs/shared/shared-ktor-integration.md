# 🌐 Panduan Instalasi & Inisialisasi Ktor Client di KMP (Shared Network Layer)

Dokumen ini menjelaskan cara mengonfigurasi **Ktor Client** pada proyek **Kotlin Multiplatform (KMP)** sampai tahap **instalasi dan inisialisasi `HttpClient`**, termasuk pemilihan engine per platform (**Android**, **iOS**, **Web/JS**, **Desktop/JVM**) dan pendaftarannya ke **Koin**.

> Cakupan dokumen ini berhenti di pembuatan `HttpClient` + error handling dasar. Implementasi `<Feature>RemoteService` / `<Feature>RepositoryImpl` mengikuti `docs/architecture/kmp-shared-architecture.md` §3.4–3.6.

> Struktur file mengikuti `docs/architecture/kmp-shared-architecture.md`: semua kode networking berada di `core/httpClient/` (konfigurasi client & error) dan `core/network/` (engine `expect/actual`). Package contoh: `me.poc.kmpchat`.

---

## 1. Konfigurasi Version Catalog (`gradle/libs.versions.toml`)

Tambahkan versi, library, dan plugin yang dibutuhkan:

```toml
[versions]
ktor = "3.5.1"                 # cek rilis terbaru di https://github.com/ktorio/ktor/releases
kotlinx-serialization = "1.8.1"

[libraries]
# Ktor Core (commonMain)
ktor-client-core = { module = "io.ktor:ktor-client-core", version.ref = "ktor" }
ktor-client-content-negotiation = { module = "io.ktor:ktor-client-content-negotiation", version.ref = "ktor" }
ktor-serialization-kotlinx-json = { module = "io.ktor:ktor-serialization-kotlinx-json", version.ref = "ktor" }
ktor-client-logging = { module = "io.ktor:ktor-client-logging", version.ref = "ktor" }

# Engine per platform
ktor-client-okhttp = { module = "io.ktor:ktor-client-okhttp", version.ref = "ktor" }   # Android
ktor-client-darwin = { module = "io.ktor:ktor-client-darwin", version.ref = "ktor" }   # iOS
ktor-client-java = { module = "io.ktor:ktor-client-java", version.ref = "ktor" }       # Desktop (JVM)
ktor-client-js = { module = "io.ktor:ktor-client-js", version.ref = "ktor" }           # Web / Next.js

# Serialization runtime
kotlinx-serialization-json = { module = "org.jetbrains.kotlinx:kotlinx-serialization-json", version.ref = "kotlinx-serialization" }

[plugins]
kotlinSerialization = { id = "org.jetbrains.kotlin.plugin.serialization", version.ref = "kotlin" }
```

> `version.ref = "kotlin"` mengacu ke versi Kotlin yang sudah ada di catalog proyek.

---

## 2. Konfigurasi Gradle (`shared/build.gradle.kts`)

Aktifkan plugin serialization, lalu pasang library core di `commonMain` dan engine di masing-masing source set platform:

```kotlin
plugins {
    alias(libs.plugins.kotlinMultiplatform)
    alias(libs.plugins.androidMultiplatformLibrary)
    alias(libs.plugins.kotlinSerialization)
}

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
            implementation(libs.ktor.client.core)
            implementation(libs.ktor.client.content.negotiation)
            implementation(libs.ktor.serialization.kotlinx.json)
            implementation(libs.ktor.client.logging)
            implementation(libs.kotlinx.serialization.json)
        }
        androidMain.dependencies {
            implementation(libs.ktor.client.okhttp)
        }
        iosMain.dependencies {
            implementation(libs.ktor.client.darwin)
        }
        jvmMain.dependencies {
            implementation(libs.ktor.client.java)
        }
        jsMain.dependencies {
            implementation(libs.ktor.client.js)
        }
    }
}
```

---

## 3. Engine per Platform (`core/network`, `expect` / `actual`)

Deklarasikan engine secara `internal expect` di `commonMain`, lalu sediakan `actual` di tiap target. Konfigurasi plugin tetap 100% di common.

### A. `commonMain`
```kotlin
// shared/src/commonMain/kotlin/me/poc/kmpchat/core/network/HttpClientEngine.kt
package me.poc.kmpchat.core.network

import io.ktor.client.engine.HttpClientEngine

internal expect fun providePlatformHttpClientEngine(): HttpClientEngine
```

### B. `androidMain`
```kotlin
// shared/src/androidMain/kotlin/me/poc/kmpchat/core/network/HttpClientEngine.android.kt
package me.poc.kmpchat.core.network

import io.ktor.client.engine.HttpClientEngine
import io.ktor.client.engine.okhttp.OkHttp

// OkHttp (bukan ktor-client-android) agar interceptor seperti Chucker bisa dipasang
internal actual fun providePlatformHttpClientEngine(): HttpClientEngine = OkHttp.create()
```

### C. `iosMain`
```kotlin
// shared/src/iosMain/kotlin/me/poc/kmpchat/core/network/HttpClientEngine.ios.kt
package me.poc.kmpchat.core.network

import io.ktor.client.engine.HttpClientEngine
import io.ktor.client.engine.darwin.Darwin

internal actual fun providePlatformHttpClientEngine(): HttpClientEngine = Darwin.create()
```

### D. `jvmMain` (Desktop)
```kotlin
// shared/src/jvmMain/kotlin/me/poc/kmpchat/core/network/HttpClientEngine.jvm.kt
package me.poc.kmpchat.core.network

import io.ktor.client.engine.HttpClientEngine
import io.ktor.client.engine.java.Java

internal actual fun providePlatformHttpClientEngine(): HttpClientEngine = Java.create()
```

### E. `jsMain` (Web / Next.js)
```kotlin
// shared/src/jsMain/kotlin/me/poc/kmpchat/core/network/HttpClientEngine.js.kt
package me.poc.kmpchat.core.network

import io.ktor.client.engine.HttpClientEngine
import io.ktor.client.engine.js.Js

internal actual fun providePlatformHttpClientEngine(): HttpClientEngine = Js.create()
```

---

## 4. Inisialisasi `HttpClient` (`core/httpClient`)

### A. `provideHttpClient()`

Satu fungsi yang memasang plugin standar (JSON, logging, timeout, default request):

```kotlin
// shared/src/commonMain/kotlin/me/poc/kmpchat/core/httpClient/HttpClient.kt
package me.poc.kmpchat.core.httpClient

import io.ktor.client.HttpClient
import io.ktor.client.engine.HttpClientEngine
import io.ktor.client.plugins.HttpTimeout
import io.ktor.client.plugins.contentnegotiation.ContentNegotiation
import io.ktor.client.plugins.defaultRequest
import io.ktor.client.plugins.logging.LogLevel
import io.ktor.client.plugins.logging.Logger
import io.ktor.client.plugins.logging.Logging
import io.ktor.client.plugins.logging.SIMPLE
import io.ktor.http.ContentType
import io.ktor.http.HttpHeaders
import io.ktor.http.contentType
import io.ktor.serialization.kotlinx.json.json
import kotlinx.serialization.json.Json
import me.poc.kmpchat.core.network.providePlatformHttpClientEngine

internal const val BASE_HOST = "api.example.com"
internal const val BASE_URL = "https://$BASE_HOST/api/"

internal val jsonParser = Json {
    ignoreUnknownKeys = true
    isLenient = true
    explicitNulls = false
}

fun provideHttpClient(
    engine: HttpClientEngine = providePlatformHttpClientEngine(),
    enableLogging: Boolean = true,
): HttpClient = HttpClient(engine) {

    // 1. JSON (kotlinx.serialization)
    install(ContentNegotiation) { json(jsonParser) }

    // 2. Timeout
    install(HttpTimeout) {
        requestTimeoutMillis = 30_000
        connectTimeoutMillis = 15_000
        socketTimeoutMillis = 30_000
    }

    // 3. Logging (matikan di production)
    if (enableLogging) {
        install(Logging) {
            logger = Logger.SIMPLE
            level = LogLevel.ALL
            sanitizeHeader { it == HttpHeaders.Authorization }
        }
    }

    // 4. Default request: base URL & header bawaan
    defaultRequest {
        url(BASE_URL)
        contentType(ContentType.Application.Json)
    }

    // Jangan pakai `expectSuccess = true`: error HTTP dikonversi lewat `bodyOrError()` (lihat §4B)
}
```

> Bila nanti butuh bearer token (plugin `Auth`), `provideHttpClient` menerima `Settings` dan membaca kunci dari `core/storage/StorageKeys.kt` — lihat arsitektur §5.1 dan panduan `multiplatform-settings`.

### B. Error handling (`ExceptionHandlers.kt` + `models/`)

Semua response di `<Feature>RemoteServiceImpl` diakhiri `.bodyOrError()` agar error HTTP menjadi `ApiException`:

```kotlin
// shared/src/commonMain/kotlin/me/poc/kmpchat/core/httpClient/models/ApiException.kt
package me.poc.kmpchat.core.httpClient.models

class ApiException(message: String) : Exception(message)
```

```kotlin
// shared/src/commonMain/kotlin/me/poc/kmpchat/core/httpClient/models/ErrorResponse.kt
package me.poc.kmpchat.core.httpClient.models

import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

// Sesuaikan dengan format error backend, mis. {"detail": "..."}
@Serializable
data class ErrorResponse(@SerialName("detail") val detail: String? = null)
```

```kotlin
// shared/src/commonMain/kotlin/me/poc/kmpchat/core/httpClient/ExceptionHandlers.kt
package me.poc.kmpchat.core.httpClient

import io.ktor.client.call.body
import io.ktor.client.statement.HttpResponse
import io.ktor.client.statement.bodyAsText
import io.ktor.http.isSuccess
import me.poc.kmpchat.core.httpClient.models.ApiException
import me.poc.kmpchat.core.httpClient.models.ErrorResponse

suspend inline fun <reified T> HttpResponse.bodyOrError(): T {
    if (status.isSuccess()) return body()
    val message = try {
        jsonParser.decodeFromString<ErrorResponse>(bodyAsText()).detail
    } catch (_: Exception) {
        null
    }
    throw ApiException(message ?: "Terjadi kesalahan")
}
```

> `jsonParser` dipakai dari fungsi `inline` publik, jadi ubah visibilitasnya menjadi `@PublishedApi internal` bila compiler meminta.

---

## 5. Daftarkan `HttpClient` ke Koin (`core/AppModule.kt`)

`HttpClient` adalah infrastruktur bersama, jadi didaftarkan di `commonModule` (bukan module terpisah di folder `di/`). Module fitur cukup memakai `get()`:

```kotlin
// shared/src/commonMain/kotlin/me/poc/kmpchat/core/AppModule.kt
package me.poc.kmpchat.core

import io.ktor.client.HttpClient
import kotlinx.coroutines.CoroutineDispatcher
import kotlinx.coroutines.Dispatchers
import me.poc.kmpchat.chat.chatModule
import me.poc.kmpchat.core.httpClient.provideHttpClient
import org.koin.core.module.Module
import org.koin.core.qualifier.named
import org.koin.dsl.module

const val ioDispatcher = "ioDispatcher"

val commonModule = module {
    single<CoroutineDispatcher>(named(ioDispatcher)) { Dispatchers.Default }
    // Singleton: satu HttpClient untuk seluruh aplikasi (connection pool dipakai ulang)
    single<HttpClient> { provideHttpClient() }
}

val sharedModule: List<Module> = listOf(
    commonModule,
    chatModule
)
```

Contoh pemakaian di module fitur (`chat/ChatSharedModule.kt`):

```kotlin
single<ChatRemoteService> { ChatRemoteServiceImpl(httpClient = get()) }
single<ChatRepository> { ChatRepositoryImpl(remoteService = get()) }
```

---

## 6. Catatan per Platform

### A. Android
Tambahkan permission internet di `androidApp/src/main/AndroidManifest.xml`:
```xml
<uses-permission android:name="android.permission.INTERNET" />
```
Untuk endpoint `http://` (non-HTTPS) di environment dev/UAT, atur `network_security_config` atau `android:usesCleartextTraffic`.

### B. iOS
Tidak ada setup tambahan; cukup inisialisasi Koin dengan `sharedModule` (lihat panduan Koin). Untuk endpoint `http://`, tambahkan pengecualian **App Transport Security** (`NSAppTransportSecurity`) di `Info.plist`.

### C. Web (Next.js)
Engine `Js` memakai `fetch` milik browser, sehingga backend harus mengizinkan **CORS** untuk origin aplikasi Next.js. Inisialisasi tetap lewat `KmpFactory` di `jsMain` (lihat panduan Koin).

### D. Desktop (JVM)
Tidak ada setup tambahan; `startKoin { modules(sharedModule) }` di `main()` sudah ikut membuat `HttpClient`. Panggil `koin.get<HttpClient>().close()` saat aplikasi ditutup bila diperlukan.

---

## 7. Ringkasan Struktur File

```
shared/src/
├── commonMain/kotlin/me/poc/kmpchat/
│   └── core/
│       ├── AppModule.kt                         # commonModule: single<HttpClient> { provideHttpClient() }
│       ├── httpClient/
│       │   ├── HttpClient.kt                    # provideHttpClient(): JSON, timeout, logging, base URL
│       │   ├── ExceptionHandlers.kt             # HttpResponse.bodyOrError()
│       │   └── models/
│       │       ├── ApiException.kt
│       │       └── ErrorResponse.kt
│       └── network/
│           └── HttpClientEngine.kt              # internal expect providePlatformHttpClientEngine()
├── androidMain/kotlin/me/poc/kmpchat/core/network/HttpClientEngine.android.kt   # OkHttp
├── iosMain/kotlin/me/poc/kmpchat/core/network/HttpClientEngine.ios.kt           # Darwin
├── jvmMain/kotlin/me/poc/kmpchat/core/network/HttpClientEngine.jvm.kt           # Java
└── jsMain/kotlin/me/poc/kmpchat/core/network/HttpClientEngine.js.kt             # Js
```
