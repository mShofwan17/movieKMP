# 🔐 Panduan & Perencanaan Keamanan Kredensial (XOR Obfuscation untuk KMP)

Dokumen ini menjelaskan perencanaan dan panduan teknis pengamanan nilai kredensial sensitif dari `local.properties` (seperti `BASE_URL` dan `MOVIE_API_KEY`) pada proyek **Kotlin Multiplatform (KMP)** menggunakan teknik **XOR Obfuscation** pada saat build-time dan runtime.

---

## 1. Latar Belakang & Permasalahan

Menyimpan nilai kredensial sensitif sebagai string polos (*plain string literals*) langsung di dalam source code atau file konfigurasi bawaan sangat berisiko:

- **Eksplorasi String Binari**: Penyerang dapat dengan mudah menjalankan perintah `strings` pada file binary (`.apk`, `.ipa`, `.jar`, atau `.js`) untuk menemukan kunci rahasia seperti `"48e9a557"` atau URL `"https://www.omdbapi.com/"`.
- **Dekomplikasi Code**: Alat dekompilasi seperti JADX (Android), Ghidra/Hopper (iOS/Desktop), atau Chrome DevTools (Web) dapat menampilkan konstanta string polos dengan sangat jelas.

---

## 2. Solusi: Bisakah Menggunakan Enkripsi XOR saat Build-Time?

> **Jawaban: Sangat Bisa!**

Dengan menggunakan **Gradle Task Custom** pada script `sharedLogic/build.gradle.kts`, kita dapat:
1. Membaca `local.properties` pada saat Gradle melakukan konfiguasi build.
2. Mengubah nilai string polos (seperti `MOVIE_API_KEY`) menjadi **XOR-encoded `ByteArray`** menggunakan Secret Masking Key tertentu.
3. Menghasilkan (*generate*) file kode Kotlin (`SecretConfig.kt`) di dalam source set `commonMain` secara otomatis sebelum kompilasi berjalan.
4. Mendekripsi `ByteArray` tersebut secara instan di memori aplikasi pada saat runtime menggunakan helper `deobfuscateXor()`.

---

## 3. Mekanisme Kerja XOR Obfuscation

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ BUILD TIME (Gradle Task)                                                        │
│                                                                                 │
│ local.properties  ──> Read String ──> XOR with Mask Key ──> Generate SecretConfig.kt │
│ ("48e9a557")                           (0x5A)               (byteArrayOf(...))  │
└────────────────────────────────────────┬────────────────────────────────────────┘
                                         │
                                         ▼
┌─────────────────────────────────────────────────────────────────────────────────┐
│ RUNTIME (KMP commonMain)                                                        │
│                                                                                 │
│ SecretConfig.getMovieApiKey() ──> XOR Decrypt ──> Return Plain String di Memori │
└─────────────────────────────────────────────────────────────────────────────────┘
```

### A. Algoritma Enkripsi & Dekripsi XOR (Sederhana & Ringan)
Enkripsi XOR bersifat simetris: `(A xor B) xor B = A`.

$$C_i = P_i \oplus K$$
$$P_i = C_i \oplus K$$

di mana:
- $P_i$ adalah byte karakter plaintext asli.
- $K$ adalah byte kunci rahasia (*mask key*).
- $C_i$ adalah byte hasil obfuscation.

---

## 4. Contoh Spesifikasi Kode Generated (`SecretConfig.kt`)

File ini diproduksi secara otomatis oleh Gradle dan berada di `sharedLogic/src/commonMain/kotlin/me/test/project/moviekmp/core/config/SecretConfig.kt`:

```kotlin
package me.test.project.moviekmp.core.config

internal object SecretConfig {
    // Single Byte atau Multi-byte XOR Mask Key
    private const val MASK_KEY: Byte = 0x5A.toByte()

    // Hasil XOR obfuscation dari "https://www.omdbapi.com/"
    private val OBFUSCATED_BASE_URL = byteArrayOf(
        0x32.toByte(), 0x2E.toByte(), 0x2E.toByte(), 0x2A.toByte(), 0x29.toByte(),
        0x60.toByte(), 0x60.toByte(), 0x2D.toByte(), 0x2D.toByte(), 0x2D.toByte(),
        0x74.toByte(), 0x35.toByte(), 0x37.toByte(), 0x3E.toByte(), 0x3B.toByte(),
        0x3B.toByte(), 0x33.toByte(), 0x74.toByte(), 0x39.toByte(), 0x35.toByte(),
        0x37.toByte(), 0x65.toByte()
    )

    // Hasil XOR obfuscation dari "48e9a557"
    private val OBFUSCATED_MOVIE_API_KEY = byteArrayOf(
        0x6E.toByte(), 0x62.toByte(), 0x3F.toByte(), 0x63.toByte(),
        0x3B.toByte(), 0x6F.toByte(), 0x6F.toByte(), 0x6D.toByte()
    )

    /**
     * Fungsi pembantu untuk dekripsi XOR di memori saat runtime
     */
    private fun deobfuscate(obfuscated: ByteArray, key: Byte): String {
        val decoded = ByteArray(obfuscated.size) { index ->
            (obfuscated[index].toInt() xor key.toInt()).toByte()
        }
        return decoded.decodeToString()
    }

    val baseUrl: String
        get() = deobfuscate(OBFUSCATED_BASE_URL, MASK_KEY)

    val movieApiKey: String
        get() = deobfuscate(OBFUSCATED_MOVIE_API_KEY, MASK_KEY)
}
```

---

## 5. Perencanaan Task Gradle Custom (`sharedLogic/build.gradle.kts`)

Berikut adalah draf task Gradle Kotlin DSL untuk membaca `local.properties` dan menulis file `SecretConfig.kt`:

```kotlin
import java.io.File
import java.util.Properties

val generateSecretConfigTask = tasks.register("generateSecretConfig") {
    val localPropertiesFile = rootProject.file("local.properties")
    val outputDir = file("src/commonMain/kotlin/me/test/project/moviekmp/core/config")

    inputs.file(localPropertiesFile)
    outputs.dir(outputDir)

    doLast {
        val properties = Properties().apply {
            if (localPropertiesFile.exists()) {
                load(localPropertiesFile.inputStream())
            }
        }

        val baseUrl = properties.getProperty("BASE_URL") ?: "https://www.omdbapi.com/"
        val apiKey = properties.getProperty("MOVIE_API_KEY") ?: "48e9a557"
        val maskKey: Byte = 0x5A.toByte()

        fun String.toObfuscatedByteArrayString(): String {
            val bytes = this.toByteArray(Charsets.UTF_8)
            val obfuscated = bytes.map { (it.toInt() xor maskKey.toInt()).toByte() }
            return obfuscated.joinToString(prefix = "byteArrayOf(", postfix = ")") {
                "0x${it.toUByte().toString(16).padStart(2, '0').uppercase()}.toByte()"
            }
        }

        outputDir.mkdirs()
        val generatedFile = File(outputDir, "SecretConfig.kt")
        generatedFile.writeText(
            """
            package me.test.project.moviekmp.core.config

            internal object SecretConfig {
                private const val MASK_KEY: Byte = 0x5A.toByte()

                private val OBFUSCATED_BASE_URL = ${baseUrl.toObfuscatedByteArrayString()}
                private val OBFUSCATED_MOVIE_API_KEY = ${apiKey.toObfuscatedByteArrayString()}

                private fun deobfuscate(obfuscated: ByteArray, key: Byte): String {
                    val decoded = ByteArray(obfuscated.size) { index ->
                        (obfuscated[index].toInt() xor key.toInt()).toByte()
                    }
                    return decoded.decodeToString()
                }

                val baseUrl: String
                    get() = deobfuscate(OBFUSCATED_BASE_URL, MASK_KEY)

                val movieApiKey: String
                    get() = deobfuscate(OBFUSCATED_MOVIE_API_KEY, MASK_KEY)
            }
            """.trimIndent()
        )
    }
}

// Otomatiskan jalannya task sebelum kompilasi Kotlin
tasks.withType<org.jetbrains.kotlin.gradle.tasks.KotlinCompilationTask<*>>().configureEach {
    dependsOn(generateSecretConfigTask)
}
```

---

## 6. Konsumsi Kredensial Terenkripsi di Shared Layer

Setelah `SecretConfig.kt` dihasilkan, ubah konsumsi di layer `core` & `feature/movie`:

### A. `HttpClient.kt`
```kotlin
// Menggunakan SecretConfig.baseUrl daripada string polos
internal val BASE_URL = SecretConfig.baseUrl
```

### B. `MovieRemoteService.kt`
```kotlin
// Menggunakan SecretConfig.movieApiKey sebagai default value
internal val DEFAULT_MOVIE_API_KEY = SecretConfig.movieApiKey
```

---

## 7. Analisis Keamanan (Obfuscation vs. Encryption)

> [!IMPORTANT]
> - **Obfuscation ≠ Hashing/Asymmetric Encryption**: XOR obfuscation bertujuan menyembunyikan string dari utilitas scanning statis (`strings` CLI, scanner otomatis, atau decompiler dasar).
> - **Kelebihan**:
>   - Ringan, tanpa overhead dependensi eksternal.
>   - Bekerja 100% di semua target KMP (Android, iOS, Desktop JVM, Web JS).
>   - Kredensial `local.properties` tidak pernah masuk ke git atau plain string literal di binary final.
> - **Keterbatasan**:
>   - Seorang *reverse engineer* berpengalaman yang melakukan analisis mendalam terhadap kode bytecode/native disassembly masih bisa melacak algoritma dekripsi XOR.
> - **Rekomendasi Best Practice**:
>   - Kombinasikan teknik ini dengan **R8/ProGuard** (di Android & Desktop JVM) dan **SKIE/Swift Optimizations** (di iOS) agar nama fungsi dekripsi dan byte array ter-obfuscate lebih lanjut secara simbolik.
