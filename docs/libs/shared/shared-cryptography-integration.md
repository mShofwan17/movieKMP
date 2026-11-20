# 🔐 Panduan Instalasi & Inisialisasi cryptography-kotlin di KMP (Shared Crypto Layer)

Dokumen ini menjelaskan cara mengonfigurasi **cryptography-kotlin** (`dev.whyoleg.cryptography`) pada proyek **Kotlin Multiplatform (KMP)** sampai tahap **instalasi dan inisialisasi `CryptographyProvider`**, pemilihan provider per platform (**Android**, **iOS**, **Web/JS**, **Desktop/JVM**), dan pendaftarannya ke **Koin**.

> Cakupan dokumen ini berhenti di inisialisasi provider. Implementasi `CryptoService` (enkripsi, signing, key management) dibahas terpisah.

> Library ini **tidak mengimplementasikan algoritma sendiri**. Ia membungkus kriptografi bawaan platform (JCA, CryptoKit/Apple, WebCrypto, OpenSSL 3) dengan satu API Kotlin.

> Struktur file mengikuti `docs/architecture/kmp-shared-architecture.md`: crypto adalah infrastruktur lintas fitur, jadi diletakkan di `core/crypto/` (provider + Koin module-nya sendiri, seperti pola `core/firebase/remoteConfig/`). Package contoh: `me.poc.kmpchat`.

---

## 1. Pemetaan Provider per Platform

| Target | Provider | Basis |
|---|---|---|
| Android | `cryptography-provider-jdk` | JCA (Java Cryptography Architecture) |
| Desktop (JVM) | `cryptography-provider-jdk` | JCA |
| iOS | `cryptography-provider-cryptokit` + `cryptography-provider-apple` | CryptoKit + CommonCrypto/Security |
| Web (JS) | `cryptography-provider-webcrypto` | Web Crypto API browser |

Gunakan hanya algoritma yang didukung di **semua** provider di atas, misalnya:
- **Hash:** SHA-256, SHA-512
- **MAC:** HMAC
- **Symmetric:** AES-GCM
- **Asymmetric:** ECDSA P-256, RSA-OAEP
- **Derivation:** PBKDF2, HKDF

Cek tabel dukungan lengkap di https://whyoleg.github.io/cryptography-kotlin/providers/.

---

## 2. Konfigurasi Version Catalog (`gradle/libs.versions.toml`)

```toml
[versions]
cryptography = "0.6.0"   # cek rilis terbaru di https://github.com/whyoleg/cryptography-kotlin/releases

[libraries]
# BOM: menyamakan versi semua modul cryptography
cryptography-bom = { module = "dev.whyoleg.cryptography:cryptography-bom", version.ref = "cryptography" }

# Core API (commonMain)
cryptography-core = { module = "dev.whyoleg.cryptography:cryptography-core" }

# Provider per platform
cryptography-provider-jdk = { module = "dev.whyoleg.cryptography:cryptography-provider-jdk" }             # Android & Desktop
cryptography-provider-apple = { module = "dev.whyoleg.cryptography:cryptography-provider-apple" }         # iOS (CommonCrypto)
cryptography-provider-cryptokit = { module = "dev.whyoleg.cryptography:cryptography-provider-cryptokit" } # iOS (CryptoKit)
cryptography-provider-webcrypto = { module = "dev.whyoleg.cryptography:cryptography-provider-webcrypto" } # Web / Next.js

# Alternatif: satu dependency yang memilih provider otomatis untuk semua target
cryptography-provider-optimal = { module = "dev.whyoleg.cryptography:cryptography-provider-optimal" }
```

> Versi 0.6.0 dibangun dengan **Kotlin 2.3.20**. Pastikan versi Kotlin proyek setara atau lebih baru.

> Library masih **0.x**: setiap rilis minor bisa membawa breaking change. Pin versi secara eksplisit dan baca release notes sebelum upgrade.

---

## 3. Konfigurasi Gradle (`shared/build.gradle.kts`)

Ada dua opsi. Pilih **salah satu**.

### Opsi A — Provider eksplisit per platform (direkomendasikan)

Kontrol penuh atas provider yang masuk ke binary. Opsi ini menghindari OpenSSL prebuilt di iOS, sehingga ukuran binary lebih kecil.

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
            implementation(project.dependencies.platform(libs.cryptography.bom))
            implementation(libs.cryptography.core)
        }
        androidMain.dependencies {
            implementation(libs.cryptography.provider.jdk)
        }
        iosMain.dependencies {
            implementation(libs.cryptography.provider.cryptokit)
            implementation(libs.cryptography.provider.apple)
        }
        jvmMain.dependencies {
            implementation(libs.cryptography.provider.jdk)
        }
        jsMain.dependencies {
            implementation(libs.cryptography.provider.webcrypto)
        }
    }
}
```

### Opsi B — Provider `optimal` (paling sederhana)

Satu dependency di `commonMain`. Provider untuk tiap target dipilih otomatis oleh library.

```kotlin
kotlin {
    sourceSets {
        commonMain.dependencies {
            implementation(project.dependencies.platform(libs.cryptography.bom))
            implementation(libs.cryptography.core)
            implementation(libs.cryptography.provider.optimal)
        }
    }
}
```

> Untuk app produksi, cek provider apa saja yang ikut ter-bundle oleh `optimal` di target Apple. Kalau ada fallback OpenSSL prebuilt yang tidak dibutuhkan, gunakan Opsi A.

---

## 4. Inisialisasi Provider (`core/crypto`)

Saat dependency provider ditambahkan, provider tersebut otomatis terdaftar sebagai `CryptographyProvider.Default` di platformnya. Tidak perlu `init()` manual.

Agar mudah di-inject dan di-mock saat testing, bungkus akses provider dalam satu titik:

```kotlin
// shared/src/commonMain/kotlin/me/poc/kmpchat/core/crypto/CryptoProviderFactory.kt
package me.poc.kmpchat.core.crypto

import dev.whyoleg.cryptography.CryptographyProvider

internal object CryptoProviderFactory {

    /**
     * Provider default platform:
     * - Android/Desktop → JDK (JCA)
     * - iOS            → CryptoKit / Apple
     * - Web            → WebCrypto
     */
    fun create(): CryptographyProvider = CryptographyProvider.Default
}
```

### (Opsional) Pemilihan provider secara eksplisit via `expect`/`actual`

Gunakan cara ini jika ingin menentukan provider per platform secara tegas, tanpa bergantung pada registrasi otomatis. Sesuai arsitektur, `expect/actual` hanya dipakai untuk hal yang benar-benar platform-spesifik dan ditandai `internal`.

```kotlin
// shared/src/commonMain/kotlin/me/poc/kmpchat/core/crypto/PlatformCryptoProvider.kt
package me.poc.kmpchat.core.crypto

import dev.whyoleg.cryptography.CryptographyProvider

internal expect fun platformCryptoProvider(): CryptographyProvider
```

```kotlin
// shared/src/androidMain/kotlin/me/poc/kmpchat/core/crypto/PlatformCryptoProvider.android.kt
// shared/src/jvmMain/kotlin/me/poc/kmpchat/core/crypto/PlatformCryptoProvider.jvm.kt
package me.poc.kmpchat.core.crypto

import dev.whyoleg.cryptography.CryptographyProvider
import dev.whyoleg.cryptography.providers.jdk.JDK

internal actual fun platformCryptoProvider(): CryptographyProvider = CryptographyProvider.JDK
```

```kotlin
// shared/src/iosMain/kotlin/me/poc/kmpchat/core/crypto/PlatformCryptoProvider.ios.kt
package me.poc.kmpchat.core.crypto

import dev.whyoleg.cryptography.CryptographyProvider
import dev.whyoleg.cryptography.providers.cryptokit.CryptoKit

internal actual fun platformCryptoProvider(): CryptographyProvider = CryptographyProvider.CryptoKit
```

```kotlin
// shared/src/jsMain/kotlin/me/poc/kmpchat/core/crypto/PlatformCryptoProvider.js.kt
package me.poc.kmpchat.core.crypto

import dev.whyoleg.cryptography.CryptographyProvider
import dev.whyoleg.cryptography.providers.webcrypto.WebCrypto

internal actual fun platformCryptoProvider(): CryptographyProvider = CryptographyProvider.WebCrypto
```

> Nama package provider bisa berubah antar versi 0.x. Verifikasi import dengan versi yang dipakai.

---

## 5. Daftarkan Provider ke Koin

Buat `cryptoModule` di `core/crypto/`, lalu tambahkan ke list `sharedModule` di `core/AppModule.kt`:

```kotlin
// shared/src/commonMain/kotlin/me/poc/kmpchat/core/crypto/CryptoModule.kt
package me.poc.kmpchat.core.crypto

import dev.whyoleg.cryptography.CryptographyProvider
import org.koin.dsl.module

val cryptoModule = module {
    // Singleton: provider bersifat stateless dan aman dipakai ulang
    single<CryptographyProvider> { CryptoProviderFactory.create() }
}
```

```kotlin
// shared/src/commonMain/kotlin/me/poc/kmpchat/core/AppModule.kt
val sharedModule: List<Module> = listOf(
    commonModule,
    cryptoModule,
    chatModule
)
```

Setelah ini, `CryptographyProvider` bisa di-inject ke `<Feature>RepositoryImpl` (atau service crypto di `core/crypto/`) lewat `get()` di `<Feature>SharedModule.kt`. Jangan inject provider langsung ke UI/ViewModel — UI tetap hanya memakai use case.

---

## 6. Verifikasi Inisialisasi (Smoke Test)

Untuk memastikan provider aktif di semua target, jalankan hashing sederhana di `commonTest`:

```kotlin
// shared/src/commonTest/kotlin/me/poc/kmpchat/core/crypto/CryptoProviderTest.kt
package me.poc.kmpchat.core.crypto

import dev.whyoleg.cryptography.algorithms.SHA256
import kotlinx.coroutines.test.runTest
import kotlin.test.Test
import kotlin.test.assertEquals

class CryptoProviderTest {

    @Test
    fun providerIsAvailable() = runTest {
        val provider = CryptoProviderFactory.create()
        val hasher = provider.get(SHA256).hasher()

        // API suspend dipakai agar kompatibel dengan WebCrypto (async) di JS
        val digest = hasher.hash("hello".encodeToByteArray())

        assertEquals(32, digest.size) // SHA-256 = 32 byte
    }
}
```

> **Selalu gunakan API `suspend`** di `commonMain`. WebCrypto di browser bersifat async, sehingga varian blocking tidak tersedia di target JS.

---

## 7. Catatan per Platform

### A. Android
- Tidak ada setup tambahan. Provider JDK memakai JCA bawaan Android.
- Registrasi provider memakai `ServiceLoader` yang sudah dioptimasi untuk R8. Tetap jalankan build `release` dengan minify untuk memastikan provider tidak ter-strip.
- **Penyimpanan key:** library ini tidak menyimpan key. Key sensitif tetap disimpan di **Android Keystore** lewat implementasi `androidMain` terpisah (di `core/crypto/`).

### B. iOS
- Provider CryptoKit membutuhkan Swift runtime. Jika Xcode terpasang di lokasi non-standar, gunakan Gradle plugin `dev.whyoleg.cryptography` untuk mengatur linker options.
- **Penyimpanan key:** gunakan **Keychain** (atau Secure Enclave untuk P-256) lewat implementasi `iosMain` terpisah (di `core/crypto/`).

### C. Web (Next.js)
- WebCrypto hanya tersedia di **secure context** (HTTPS atau `localhost`).
- Semua operasi bersifat async. Saat di-export ke TypeScript, bungkus fungsi `suspend` menjadi `Promise` di jembatan `jsMain` (lihat pola `KmpFactory` di panduan Koin).
- Tidak ada penyimpanan key yang aman setara Keystore/Keychain di browser. Hindari menyimpan private key jangka panjang di sisi web.

### D. Desktop (JVM)
- Tidak ada setup tambahan. Jika butuh algoritma di luar JCA standar, provider JDK bisa dikonfigurasi memakai BouncyCastle sebagai security provider default.

---

## 8. Ringkasan Struktur File

```
shared/src/
├── commonMain/kotlin/me/poc/kmpchat/
│   └── core/
│       ├── AppModule.kt                         # sharedModule += cryptoModule
│       └── crypto/
│           ├── CryptoProviderFactory.kt         # CryptographyProvider.Default
│           ├── CryptoModule.kt                  # val cryptoModule: single<CryptographyProvider>
│           └── PlatformCryptoProvider.kt        # (opsional) internal expect platformCryptoProvider()
├── androidMain/kotlin/me/poc/kmpchat/core/crypto/PlatformCryptoProvider.android.kt   # (opsional) JDK
├── iosMain/kotlin/me/poc/kmpchat/core/crypto/PlatformCryptoProvider.ios.kt           # (opsional) CryptoKit
├── jvmMain/kotlin/me/poc/kmpchat/core/crypto/PlatformCryptoProvider.jvm.kt           # (opsional) JDK
├── jsMain/kotlin/me/poc/kmpchat/core/crypto/PlatformCryptoProvider.js.kt             # (opsional) WebCrypto
└── commonTest/kotlin/me/poc/kmpchat/core/crypto/
    └── CryptoProviderTest.kt                    # smoke test SHA-256
```
