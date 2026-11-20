# 🌤️ Panduan Instalasi & Inisialisasi SKIE di KMP (Swift Interop untuk iOS)

Dokumen ini menjelaskan cara mengonfigurasi **SKIE (Swift Kotlin Interface Enhancer)** dari Touchlab pada proyek **Kotlin Multiplatform (KMP)** sampai tahap **instalasi plugin, konfigurasi framework, dan konfigurasi fitur**, sehingga API shared module (UseCase, `Flow`, `suspend`) nyaman dipakai dari **SwiftUI**.

> **Apakah sudah termasuk di Kotlin?** Tidak. Kotlin/Native mengekspor API ke Swift **melalui Objective-C**, sehingga banyak fitur Kotlin hilang: `suspend` jadi callback, `Flow` tidak bisa di-iterasi, `sealed class` tidak exhaustive di `switch`, dan default argument hilang. SKIE adalah **compiler plugin** yang memodifikasi Xcode Framework hasil build untuk mengembalikan fitur-fitur tersebut.

> **Cakupan:** SKIE **hanya berpengaruh ke target iOS**. Tidak ada dampak ke Android, Desktop, atau Web.

> Struktur file mengikuti `docs/architecture/kmp-shared-architecture.md`. SKIE tidak menambah file Kotlin baru: plugin dipasang di `shared/build.gradle.kts`, API yang diekspor tetap use case `fun interface` di `<feature>/application/usecase/`, dan jembatan Koin tetap di `iosMain/.../core/KoinIos.kt` (lihat panduan Koin). Package contoh: `me.poc.kmpchat`, fitur contoh: `chat`, framework: `Shared`.

---

## 1. Apa yang Didapat dari SKIE

| Fitur Kotlin | Tanpa SKIE (di Swift) | Dengan SKIE (di Swift) |
|---|---|---|
| `suspend fun` | Completion handler / `async` terbatas, tanpa cancellation | `async` function biasa, **mendukung cancellation** |
| `Flow<T>` / `StateFlow<T>` | Tidak bisa di-iterasi langsung | `AsyncSequence` → `for await item in flow` |
| `sealed class` | Class biasa, `switch` tidak exhaustive | Swift enum via `onEnum(of:)` → `switch` exhaustive |
| `enum class` | Class Obj-C | **Swift enum asli** |
| Default argument | Semua parameter wajib diisi | Overload otomatis untuk kombinasi default argument |
| Fungsi top-level | `FileKt.functionName()` | Lebih ringkas |

Contoh `LoginUseCase` dari panduan Koin. Tanpa SKIE, cancellation dari `Task` di Swift tidak diteruskan ke coroutine Kotlin. Dengan SKIE:

```swift
// Swift dengan SKIE
let profile = try await deps.loginUseCase.invoke(username: "Alex Dev")
```

> Konversi `Flow` dilakukan SKIE di **layer Swift**. Header Objective-C (`Shared.h`) tetap menampilkan `Kotlinx_coroutines_coreFlow`, tapi dari Swift tipe yang terlihat sudah `SkieSwiftFlow<T>` (`AsyncSequence`). Ini juga berlaku untuk method milik `fun interface` seperti `ObserveChatMessagesUseCase.invoke()`.

---

## 2. Kompatibilitas Versi

| Komponen | Versi |
|---|---|
| SKIE | `0.10.16` (cek rilis terbaru di https://github.com/touchlab/SKIE/releases) |
| Kotlin proyek | `2.4.21` (sudah terverifikasi build dengan SKIE `0.10.16`) |
| Swift / Xcode minimum | Swift 5.8 (Xcode 14.3) |

> ⚠️ **Penting: SKIE adalah compiler plugin yang terikat ketat ke versi Kotlin.**
> - SKIE memeriksa versi Kotlin saat build dan **akan gagal dengan pesan jelas** jika versinya belum didukung.
> - Jika gagal: (1) cek changelog di https://skie.touchlab.co/category/changelog untuk versi SKIE yang lebih baru, atau (2) sementara pin Kotlin ke versi terakhir yang didukung.
> - **Selalu cek kompatibilitas SKIE sebelum menaikkan versi Kotlin.** SKIE biasanya merilis dukungan versi Kotlin baru dalam beberapa hari kerja, tapi pernah tertunda lebih lama.

---

## 3. Konfigurasi Version Catalog (`gradle/libs.versions.toml`)

```toml
[versions]
kotlin = "2.4.21"
skie = "0.10.16"

[libraries]
# (Opsional) Anotasi untuk konfigurasi SKIE per-deklarasi di source code
skie-annotations = { module = "co.touchlab.skie:configuration-annotations", version.ref = "skie" }

[plugins]
skie = { id = "co.touchlab.skie", version.ref = "skie" }
```

Daftarkan plugin di root `build.gradle.kts` (agar tidak di-load berkali-kali per subproject):

```kotlin
// build.gradle.kts (root)
plugins {
    alias(libs.plugins.kotlinMultiplatform) apply false
    alias(libs.plugins.skie) apply false
}
```

Pastikan `mavenCentral()` ada di repositori plugin (`settings.gradle.kts`):

```kotlin
pluginManagement {
    repositories {
        google()
        mavenCentral()
        gradlePluginPortal()
    }
}
```

---

## 4. Konfigurasi Gradle (`shared/build.gradle.kts`)

Plugin **hanya** di-apply di modul yang **membuat Xcode Framework**. Di project ini modul tersebut adalah `shared` (punya blok `binaries.framework { }`).

```kotlin
plugins {
    alias(libs.plugins.kotlinMultiplatform)
    alias(libs.plugins.androidMultiplatformLibrary)
    alias(libs.plugins.skie)   // ← SKIE
}

kotlin {
    // Target iOS + framework yang diproses SKIE
    listOf(
        iosArm64(),
        iosSimulatorArm64(),
    ).forEach { iosTarget ->
        iosTarget.binaries.framework {
            baseName = "Shared"   // sama dengan `import Shared` di Swift
            isStatic = true
        }
    }
    jvm()
    js {
        browser()
        binaries.library()
        generateTypeScriptDefinitions()
    }
    android { /* namespace, compileSdk, minSdk */ }

    sourceSets {
        commonMain.dependencies {
            // (Opsional) hanya jika memakai anotasi SKIE di source code
            // implementation(libs.skie.annotations)
        }
    }
}
```

> **Proyek multi-modul:** jangan apply SKIE di modul yang tidak membuat framework (mis. `composeUI`). SKIE otomatis memproses **semua kode yang diekspor** ke framework, termasuk modul lain dan dependency yang di-`export()`.

---

## 5. Konfigurasi SKIE (`skie { }`)

Default SKIE sudah masuk akal untuk proyek baru. Blok berikut dipakai di project ini:

```kotlin
// shared/build.gradle.kts
import co.touchlab.skie.configuration.FlowInterop
import co.touchlab.skie.configuration.SuspendInterop

skie {
    // Matikan sementara tanpa menghapus plugin (berguna saat debugging / membandingkan output)
    // isEnabled.set(false)

    features {
        // Default global: suspend → async, Flow → AsyncSequence
        group {
            SuspendInterop.Enabled(true)
            FlowInterop.Enabled(true)
        }

        // Contoh: matikan Flow interop untuk package yang tidak dipakai Swift
        // group("me.poc.kmpchat.core.network") {
        //     FlowInterop.Enabled(false)
        // }

        // (Opsional, preview) helper SwiftUI untuk mengobservasi Flow langsung di View
        // enableSwiftUIObservingPreview = true
    }

    analytics {
        // SKIE mengumpulkan analitik anonim (opsional).
        // Nonaktifkan upload agar lolos review keamanan.
        disableUpload.set(true)
    }
}
```

Aturan `group`:
- **Tanpa argumen:** berlaku global.
- **Dengan argumen:** berlaku untuk deklarasi yang **fully qualified name-nya diawali** string tersebut (misalnya nama package).
- **Group terakhir yang cocok** yang menang.

### (Opsional) Konfigurasi via anotasi

Untuk override per fungsi/interface langsung di source code (butuh `skie-annotations`). Contoh pada use case yang sudah ada:

```kotlin
// shared/src/commonMain/kotlin/me/poc/kmpchat/chat/application/usecase/ObserveChatMessagesUseCase.kt
package me.poc.kmpchat.chat.application.usecase

import co.touchlab.skie.configuration.annotations.FlowInterop
import kotlinx.coroutines.flow.Flow
import me.poc.kmpchat.chat.application.model.ChatMessage

fun interface ObserveChatMessagesUseCase {
    @FlowInterop.Enabled
    operator fun invoke(): Flow<List<ChatMessage>>
}

// internal class ObserveChatMessagesUseCaseImpl(...) tetap sama
```

> Secara default, **anotasi mengalahkan konfigurasi Gradle**. Gunakan `group(..., overridesAnnotations = true)` jika ingin sebaliknya.

---

## 6. Penyesuaian Shared Code agar Optimal untuk SKIE

SKIE bekerja paling baik jika API publik shared module mengikuti pola berikut (sejalan dengan arsitektur):

1. **Expose `Flow` / `StateFlow` dengan tipe konkret**, misalnya `Flow<List<ChatMessage>>`, bukan `Flow<*>` atau generic bebas.
2. **(Opsional) Gunakan `sealed interface` untuk state & result** agar Swift mendapat `switch` exhaustive. Model ini diletakkan di `<feature>/application/model/`:
   ```kotlin
   // shared/src/commonMain/kotlin/me/poc/kmpchat/chat/application/model/LoginResult.kt
   sealed interface LoginResult {
       data class Success(val profile: UserProfile) : LoginResult
       data class Failure(val message: String) : LoginResult
   }
   ```
   > Saat ini `LoginUseCase` mengembalikan `UserProfile` dan melempar exception saat gagal; di Swift ditangani dengan `do/catch`. Pola sealed ini baru relevan jika kontrak use case diubah.
3. **Jangan expose `CoroutineScope`, `Job`, atau `Dispatcher` ke Swift.** Dispatcher hanya di-inject ke `UseCaseImpl` lewat Koin. Swift cukup memanggil `suspend`/`Flow`, dan cancellation dikelola oleh `Task` Swift.
4. **Batasi API yang diekspor.** `UseCaseImpl`, `RemoteServiceImpl`, dan helper lain tetap `internal` agar tidak ikut diproses dan memperbesar framework.

---

## 7. Pemakaian di iOS (SwiftUI)

Inisialisasi Koin tetap sama seperti panduan Koin (`KoinIosKt.doInitKoinIos()` di `iOSApp.swift`). Bedanya, `suspend` dan `Flow` sekarang native Swift:

```swift
// iosApp/iosApp/ChatViewModel.swift
import SwiftUI
import Shared

@MainActor
final class ChatViewModel: ObservableObject {
    @Published var profile: UserProfile?
    @Published var messages: [ChatMessage] = []
    @Published var errorMessage: String?

    private let deps = KoinDependencies()

    // suspend fun → async throws (SKIE)
    func login(username: String) async {
        do {
            profile = try await deps.loginUseCase.invoke(username: username)
            errorMessage = nil
        } catch {
            errorMessage = error.localizedDescription
        }
    }

    func sendMessage(_ text: String) async {
        do {
            try await deps.sendMessageUseCase.invoke(text: text)
        } catch {
            errorMessage = error.localizedDescription
        }
    }

    // Flow → AsyncSequence (SKIE). Dibatalkan otomatis saat Task (.task di View) selesai.
    func observeMessages() async {
        for await items in deps.observeChatUseCase.invoke() {
            messages = items
        }
    }
}
```

```swift
// iosApp/iosApp/ChatView.swift
import SwiftUI
import Shared

struct ChatView: View {
    @StateObject private var vm = ChatViewModel()

    var body: some View {
        List(vm.messages, id: \.id) { Text($0.message) }
            // .task otomatis membatalkan iterasi Flow saat View hilang
            // → cancellation diteruskan ke coroutine Kotlin oleh SKIE
            .task { await vm.observeMessages() }
            .task { await vm.login(username: "Alex Dev") }
    }
}
```

```swift
// iosApp/iosApp/iOSApp.swift
import SwiftUI
import Shared

@main
struct iOSApp: App {
    init() {
        KoinIosKt.doInitKoinIos()
    }

    var body: some Scene {
        WindowGroup {
            ChatView()
        }
    }
}
```

> Jika memakai sealed result (§6 poin 2), tangani dengan `switch onEnum(of: result) { case .success(let s): ... case .failure(let f): ... }`.

> Project Xcode memakai *file system synchronized group*, jadi file Swift baru di `iosApp/iosApp/` otomatis ikut ter-compile tanpa mengedit `project.pbxproj`.

---

## 8. Verifikasi

```bash
# Build framework iOS (SKIE ikut berjalan)
./gradlew :shared:linkDebugFrameworkIosSimulatorArm64

# Kode Swift hasil generate SKIE (untuk melihat signature async / Flow)
ls shared/build/skie/binaries/debugFramework/DEBUG/iosSimulatorArm64/swift/generated/

# Build app iOS
xcodebuild -project iosApp/iosApp.xcodeproj -scheme iosApp \
  -sdk iphonesimulator -destination 'generic/platform=iOS Simulator' \
  CODE_SIGNING_ALLOWED=NO build
```

Contoh output generate untuk `LoginUseCase`:

```swift
// Generated by Touchlab SKIE 0.10.16
extension Shared.LoginUseCase {
    public func invoke(username: Swift.String) async throws -> Shared.UserProfile { ... }
}
```

---

## 9. Catatan & Batasan

- **Waktu build iOS bertambah**, karena SKIE ikut meng-compile kode Swift tambahan ke dalam framework. Ini normal.
- **Proyek existing:** SKIE mengubah tipe API yang terlihat di Swift. Kode Swift lama yang memakai callback bisa perlu disesuaikan. Baca panduan migrasi di https://skie.touchlab.co/migration sebelum memasang di proyek berjalan, dan pertimbangkan menonaktifkan fitur tertentu dulu lewat `group { }`.
- **Header ObjC tidak berubah untuk `Flow`.** Jangan menilai dari `Shared.h`; verifikasi dari Swift (Xcode autocomplete atau `swiftc -typecheck`).
- **Cache Gradle:** jika muncul error tidak menemukan artifact SKIE setelah rilis baru, jalankan `./gradlew dependencies --refresh-dependencies`.
- **Alternatif:** jika hanya butuh interop `suspend`/`Flow` (tanpa sealed/enum/default argument), **KMP-NativeCoroutines** adalah alternatif yang lebih ringan dan biasanya lebih cepat mendukung versi Kotlin baru.
- **Analitik:** verifikasi konfigurasi `analytics { }` di https://skie.touchlab.co/Analytics sesuai kebijakan keamanan tim.

---

## 10. Ringkasan Struktur File

```
KMPChat/
├── settings.gradle.kts                          # mavenCentral() di pluginManagement
├── build.gradle.kts                             # alias(libs.plugins.skie) apply false
├── gradle/libs.versions.toml                    # skie = "0.10.16", plugin co.touchlab.skie
├── shared/
│   ├── build.gradle.kts                         # alias(libs.plugins.skie) + skie { features, analytics }
│   └── src/
│       ├── commonMain/kotlin/me/poc/kmpchat/
│       │   ├── core/AppModule.kt                # sharedModule (tidak berubah)
│       │   └── chat/application/usecase/        # fun interface: suspend / Flow → diproses SKIE
│       └── iosMain/kotlin/me/poc/kmpchat/core/
│           └── KoinIos.kt                       # doInitKoinIos(), KoinDependencies (tidak berubah)
└── iosApp/iosApp/
    ├── iOSApp.swift                             # KoinIosKt.doInitKoinIos() + ChatView()
    ├── ChatViewModel.swift                      # async/await + for await
    └── ChatView.swift                           # .task { } untuk lifecycle & cancellation
```
