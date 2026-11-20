# 🖥️ Panduan Instalasi & Inisialisasi ViewModel (Compose Multiplatform) — Khusus `desktopApp`

Dokumen ini menjelaskan cara memasang **Lifecycle ViewModel** untuk **Compose Multiplatform (CMP) Desktop / JVM** sampai tahap **instalasi, pembuatan ViewModel, dan inisialisasi via Koin**, lalu memakainya di `Window`.

> **Cakupan:** hanya modul **`desktopApp`**. Modul `shared` **tidak berubah** dan tetap berhenti di **Repository & UseCase** (lihat [`docs/feature/shared/shared-kmp.md`](../../feature/shared/shared-kmp.md)). Android memakai ViewModel-nya sendiri (`androidApp`), iOS memakai ViewModel Swift, dan Web memakai React hooks. Module `composeUI` **tidak dipakai** oleh `desktopApp`.

> **Apakah sudah termasuk di Kotlin / CMP?** Tidak otomatis. ViewModel untuk CMP disediakan JetBrains lewat artifact terpisah `org.jetbrains.androidx.lifecycle:lifecycle-viewmodel-compose` (port multiplatform dari AndroidX Lifecycle), dan harus ditambahkan secara eksplisit.

> Dokumen ini adalah **setup dasar** (satu `DesktopChatViewModel` + satu layar). Rencana UI lengkap (Login/Chat/Profile + navigasi) ada di [`docs/feature/platform/desktopApp-presentation.md`](../../feature/platform/desktopApp-presentation.md).

Package contoh: `me.poc.kmpchat`.

---

## 1. Alur Arsitektur

```
shared (commonMain)                     desktopApp (src/main/kotlin)
┌──────────────────────────┐            ┌──────────────────────────────────┐
│ ChatRepository           │            │ DesktopChatViewModel : ViewModel │
│ UseCase  ────────────────┼── inject ─▶│   viewModelScope + StateFlow     │
│ sharedModule (Koin)      │            │ desktopViewModelModule (Koin)    │
└──────────────────────────┘            │ Window { koinViewModel() }       │
                                        └──────────────────────────────────┘
```

Menggantikan pola di panduan Koin (bagian Desktop) yang mengambil UseCase langsung lewat `remember { koin.get<...>() }` di Composable.

---

## 2. Konfigurasi Version Catalog (`gradle/libs.versions.toml`)

Sebagian besar entri **sudah ada** di catalog project. Yang ditambahkan untuk desktop hanya `koin-compose` dan `koin-compose-viewmodel`.

```toml
[versions]
kotlin = "2.4.21"
composeMultiplatform = "1.12.2"
material3 = "1.12.0-alpha03"
androidx-lifecycle = "2.11.0"     # dipakai oleh artifact JetBrains Lifecycle (multiplatform)
kotlinx-coroutines = "1.11.0"
koin = "4.0.0"

[libraries]
# ViewModel + integrasi Compose (JetBrains, multiplatform) — sudah ada
androidx-lifecycle-viewmodelCompose = { module = "org.jetbrains.androidx.lifecycle:lifecycle-viewmodel-compose", version.ref = "androidx-lifecycle" }
androidx-lifecycle-runtimeCompose = { module = "org.jetbrains.androidx.lifecycle:lifecycle-runtime-compose", version.ref = "androidx-lifecycle" }

# Compose — sudah ada
compose-material3 = { module = "org.jetbrains.compose.material3:material3", version.ref = "material3" }
compose-uiToolingPreview = { module = "org.jetbrains.compose.ui:ui-tooling-preview", version.ref = "composeMultiplatform" }

# Koin
koin-core = { module = "io.insert-koin:koin-core", version.ref = "koin" }                          # sudah ada
koin-compose = { module = "io.insert-koin:koin-compose", version.ref = "koin" }                    # baru
koin-compose-viewmodel = { module = "io.insert-koin:koin-compose-viewmodel", version.ref = "koin" } # baru (koinViewModel())

# Dispatchers.Main untuk Desktop (dipakai viewModelScope) — sudah ada
kotlinx-coroutinesSwing = { module = "org.jetbrains.kotlinx:kotlinx-coroutines-swing", version.ref = "kotlinx-coroutines" }

# Test — sudah ada
kotlin-test = { module = "org.jetbrains.kotlin:kotlin-test", version.ref = "kotlin" }
kotlinx-coroutines-test = { module = "org.jetbrains.kotlinx:kotlinx-coroutines-test", version.ref = "kotlinx-coroutines" }

[plugins]
kotlinJvm = { id = "org.jetbrains.kotlin.jvm", version.ref = "kotlin" }
composeMultiplatform = { id = "org.jetbrains.compose", version.ref = "composeMultiplatform" }
composeCompiler = { id = "org.jetbrains.kotlin.plugin.compose", version.ref = "kotlin" }
```

> - Meskipun alias-nya `androidx-lifecycle-*`, module-nya **`org.jetbrains.androidx.lifecycle`** (JetBrains), **bukan** `androidx.lifecycle` (Google) yang khusus Android.
> - Versi plugin **Compose Compiler** harus sama dengan versi **Kotlin** (`2.4.21`).
> - Kombinasi Koin `4.0.0` + JetBrains Lifecycle `2.11.0` sudah terverifikasi lewat test di §8.

---

## 3. Konfigurasi Gradle (`desktopApp/build.gradle.kts`)

`desktopApp` adalah module **Kotlin/JVM** (`kotlinJvm`), bukan KMP. Source ada di `src/main/kotlin` dan bergantung **langsung** ke `:shared` (Gradle otomatis memilih artefak JVM-nya).

```kotlin
import org.jetbrains.compose.desktop.application.dsl.TargetFormat

plugins {
    alias(libs.plugins.kotlinJvm)
    alias(libs.plugins.composeMultiplatform)
    alias(libs.plugins.composeCompiler)
}

dependencies {
    // Shared module (Repository, UseCase, sharedModule) — langsung, tanpa :composeUI
    implementation(project(":shared"))

    // Compose Desktop
    implementation(compose.desktop.currentOs)
    implementation(libs.compose.material3)
    implementation(libs.compose.uiToolingPreview)

    // ViewModel CMP (JetBrains) — HANYA di desktopApp
    implementation(libs.androidx.lifecycle.viewmodelCompose)
    implementation(libs.androidx.lifecycle.runtimeCompose)

    // Koin + ViewModel di Compose
    implementation(libs.koin.core)               // wajib: di shared, Koin hanya `implementation`
    implementation(libs.koin.compose)
    implementation(libs.koin.compose.viewmodel)

    // Wajib: Dispatchers.Main (Swing) untuk viewModelScope
    implementation(libs.kotlinx.coroutinesSwing)

    testImplementation(libs.kotlin.test)
    testImplementation(libs.kotlinx.coroutines.test)
}

compose.desktop {
    application {
        mainClass = "me.poc.kmpchat.MainKt"

        nativeDistributions {
            targetFormats(TargetFormat.Dmg, TargetFormat.Msi, TargetFormat.Deb)
            packageName = "me.poc.kmpchat"
            packageVersion = "1.0.0"
        }
    }
}
```

> **Jangan** menambahkan dependency lifecycle-viewmodel ke `shared/build.gradle.kts`. Biarkan shared layer bebas dari konsep UI.

> `viewModelScope` memakai `Dispatchers.Main.immediate`. Di Desktop, `Dispatchers.Main` disediakan oleh **`kotlinx-coroutines-swing`**. Tanpanya, aplikasi crash saat ViewModel pertama kali meluncurkan coroutine.

---

## 4. Membuat ViewModel

```kotlin
// desktopApp/src/main/kotlin/me/poc/kmpchat/chat/DesktopChatViewModel.kt
package me.poc.kmpchat.chat

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch
import me.poc.kmpchat.chat.application.model.ChatMessage
import me.poc.kmpchat.chat.application.model.UserProfile
import me.poc.kmpchat.chat.application.usecase.LoginUseCase
import me.poc.kmpchat.chat.application.usecase.ObserveChatMessagesUseCase
import me.poc.kmpchat.chat.application.usecase.SendMessageUseCase

data class ChatUiState(
    val user: UserProfile? = null,
    val messages: List<ChatMessage> = emptyList(),
    val isLoading: Boolean = false,
    val error: String? = null,
)

class DesktopChatViewModel(
    private val loginUseCase: LoginUseCase,
    private val observeChatUseCase: ObserveChatMessagesUseCase,
    private val sendMessageUseCase: SendMessageUseCase,
) : ViewModel() {

    private val _uiState = MutableStateFlow(ChatUiState())
    val uiState: StateFlow<ChatUiState> = _uiState.asStateFlow()

    init {
        // Observasi chat selama ViewModel hidup; otomatis dibatalkan saat onCleared()
        viewModelScope.launch {
            observeChatUseCase().collect { items ->
                _uiState.update { it.copy(messages = items) }
            }
        }
    }

    fun login(name: String) {
        if (_uiState.value.isLoading) return
        viewModelScope.launch {
            _uiState.update { it.copy(isLoading = true, error = null) }
            // Validasi username kosong dilakukan LoginUseCase di shared
            runCatching { loginUseCase(name.trim()) }
                .onSuccess { profile -> _uiState.update { it.copy(user = profile, isLoading = false) } }
                .onFailure { e -> _uiState.update { it.copy(error = e.message, isLoading = false) } }
        }
    }

    fun send(text: String) {
        // Teks kosong diabaikan oleh SendMessageUseCase di shared
        viewModelScope.launch {
            runCatching { sendMessageUseCase(text.trim()) }
                .onFailure { e -> _uiState.update { it.copy(error = e.message) } }
        }
    }
}
```

> Signature use case mengikuti `shared`: `loginUseCase(username): UserProfile`, `observeChatUseCase(): Flow<List<ChatMessage>>`, `sendMessageUseCase(text)`. Use case adalah interface; implementasinya `internal` di `shared` dan hanya bisa didapat lewat Koin.

---

## 5. Daftarkan ViewModel ke Koin

```kotlin
// desktopApp/src/main/kotlin/me/poc/kmpchat/di/DesktopModule.kt
package me.poc.kmpchat.di

import me.poc.kmpchat.chat.DesktopChatViewModel
import org.koin.core.module.dsl.viewModelOf
import org.koin.dsl.module

val desktopViewModelModule = module {
    // UseCase di-resolve otomatis dari sharedModule (chatModule)
    viewModelOf(::DesktopChatViewModel)
}
```

> `viewModelOf` berasal dari `koin-core-viewmodel`, yang ikut terpasang lewat `koin-compose-viewmodel`.

---

## 6. Inisialisasi di Entry Point

```kotlin
// desktopApp/src/main/kotlin/me/poc/kmpchat/main.kt
package me.poc.kmpchat

import androidx.compose.material3.MaterialTheme
import androidx.compose.ui.window.Window
import androidx.compose.ui.window.application
import me.poc.kmpchat.chat.DesktopChatScreen
import me.poc.kmpchat.core.sharedModule
import me.poc.kmpchat.di.desktopViewModelModule
import org.koin.core.context.startKoin

fun main() {
    // Start Koin SEKALI sebelum membuka Window: shared modules + ViewModel desktop
    startKoin { modules(sharedModule + desktopViewModelModule) }

    application {
        Window(
            onCloseRequest = ::exitApplication,
            title = "KMPChat",
        ) {
            MaterialTheme {
                DesktopChatScreen()
            }
        }
    }
}
```

> Tidak ada `initKoin()` di `shared`. Setiap platform memanggil `startKoin` sendiri dengan `sharedModule` ditambah module ViewModel-nya.

> Compose Multiplatform Desktop menyediakan `ViewModelStoreOwner` default untuk tiap `Window`, sehingga `koinViewModel()` / `viewModel()` bisa langsung dipakai tanpa setup tambahan. ViewModel hidup selama `Window` tersebut terbuka.

---

## 7. Pemakaian di Composable

```kotlin
// desktopApp/src/main/kotlin/me/poc/kmpchat/chat/DesktopChatScreen.kt
package me.poc.kmpchat.chat

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import org.koin.compose.viewmodel.koinViewModel

@Composable
fun DesktopChatScreen(
    vm: DesktopChatViewModel = koinViewModel(),
) {
    val state by vm.uiState.collectAsStateWithLifecycle()
    var name by remember { mutableStateOf("") }
    var input by remember { mutableStateOf("") }

    Column(Modifier.fillMaxSize().padding(16.dp), verticalArrangement = Arrangement.spacedBy(8.dp)) {
        val user = state.user
        if (user == null) {
            Row(verticalAlignment = Alignment.CenterVertically) {
                OutlinedTextField(
                    value = name,
                    onValueChange = { name = it },
                    label = { Text("Nama") },
                    singleLine = true,
                    modifier = Modifier.weight(1f),
                )
                Spacer(Modifier.width(8.dp))
                Button(onClick = { vm.login(name) }, enabled = !state.isLoading) {
                    Text(if (state.isLoading) "Memproses…" else "Login")
                }
            }
        } else {
            Text("Login sebagai ${user.name}", style = MaterialTheme.typography.titleMedium)
        }

        state.error?.let { Text(it, color = MaterialTheme.colorScheme.error) }   // mis. "Username tidak boleh kosong"

        LazyColumn(Modifier.weight(1f).fillMaxWidth(), verticalArrangement = Arrangement.spacedBy(4.dp)) {
            items(state.messages, key = { it.id }) { msg ->
                Text(
                    text = "${msg.senderName}: ${msg.message}",
                    color = if (msg.isMine) MaterialTheme.colorScheme.primary else MaterialTheme.colorScheme.onSurface,
                )
            }
        }

        Row(verticalAlignment = Alignment.CenterVertically) {
            OutlinedTextField(
                value = input,
                onValueChange = { input = it },
                placeholder = { Text("Tulis pesan…") },
                modifier = Modifier.weight(1f),
            )
            Spacer(Modifier.width(8.dp))
            Button(
                onClick = { vm.send(input); input = "" },
                enabled = state.user != null && input.isNotBlank(),
            ) { Text("Kirim") }
        }
    }
}
```

> Isi pesan ada di field `message` (bukan `text`), dan pengirim di `senderName`.

---

## 8. Testing

ViewModel diuji di `desktopApp/src/test/kotlin` dengan Koin sungguhan (`sharedModule` + `desktopViewModelModule`), sehingga sekaligus memverifikasi wiring DI dan kompatibilitas versi library.

```kotlin
// desktopApp/src/test/kotlin/me/poc/kmpchat/chat/DesktopChatViewModelTest.kt
@OptIn(ExperimentalCoroutinesApi::class)
class DesktopChatViewModelTest {

    @BeforeTest
    fun setUp() {
        Dispatchers.setMain(UnconfinedTestDispatcher())
        startKoin { modules(sharedModule + desktopViewModelModule) }
    }

    @AfterTest
    fun tearDown() {
        stopKoin()
        Dispatchers.resetMain()
    }

    private fun vm(): DesktopChatViewModel = KoinPlatform.getKoin().get()

    @Test
    fun loginAndSendUpdatesState() = runBlocking {
        val vm = vm()

        vm.login("Alex Dev")
        val user = withTimeout(5_000) { vm.uiState.first { it.user != null }.user }
        assertEquals("Alex Dev", assertNotNull(user).name)

        vm.send("halo desktop")
        val last = withTimeout(5_000) {
            vm.uiState.first { s -> s.messages.any { it.message == "halo desktop" } }.messages.last()
        }
        assertEquals("Alex Dev", last.senderName)
    }

    @Test
    fun blankLoginShowsSharedValidationError() = runBlocking {
        val vm = vm()

        vm.login("   ")
        val error = withTimeout(5_000) { vm.uiState.first { it.error != null }.error }
        assertEquals("Username tidak boleh kosong", error)
    }
}
```

```bash
./gradlew :desktopApp:test
./gradlew :desktopApp:run
```

> **Pakai `runBlocking`, bukan `runTest`.** Use case di `shared` berpindah ke `Dispatchers.Default` (thread sungguhan, lewat `ioDispatcher`). Di dalam `runTest`, `withTimeout` memakai waktu virtual sehingga langsung timeout sebelum use case selesai. Alternatifnya: buat ViewModel dengan fake use case (`LoginUseCase { name -> UserProfile("u1", name, "", "") }`) agar semua berjalan di test dispatcher.

---

## 9. Catatan

- **Lifecycle di Desktop:** `collectAsStateWithLifecycle()` mengikuti lifecycle `Window`. Saat window di-minimize, lifecycle bisa turun ke `STARTED`/`CREATED` dan koleksi berhenti sementara.
- **Multi-window:** setiap `Window` punya `ViewModelStore` sendiri. Jika dua window butuh state yang sama, simpan state di Repository (`ChatRepositoryImpl` sudah singleton Koin), bukan di ViewModel.
- **Data in-memory:** `ChatRepositoryImpl` menyimpan state di memori, jadi menutup app = pesan kembali ke data awal.
- **Navigation (opsional):** jika desktop butuh multi-layar, lihat `desktopApp-presentation.md` (navigasi state-based) atau pakai `org.jetbrains.androidx.navigation:navigation-compose` agar ViewModel ter-scope per destinasi.

---

## 10. Ringkasan Struktur File

```
gradle/libs.versions.toml                # + koin-compose, koin-compose-viewmodel
desktopApp/
├── build.gradle.kts                     # kotlinJvm + compose + lifecycle (JetBrains) + koin-compose-viewmodel + coroutines-swing
└── src/
    ├── main/kotlin/me/poc/kmpchat/
    │   ├── main.kt                      # startKoin(sharedModule + desktopViewModelModule) + Window
    │   ├── di/
    │   │   └── DesktopModule.kt         # viewModelOf(::DesktopChatViewModel)
    │   └── chat/
    │       ├── DesktopChatViewModel.kt  # ViewModel + StateFlow<ChatUiState>
    │       └── DesktopChatScreen.kt     # koinViewModel() + collectAsStateWithLifecycle()
    └── test/kotlin/me/poc/kmpchat/chat/
        └── DesktopChatViewModelTest.kt  # Koin asli + runBlocking

shared/                                  # TIDAK BERUBAH (Repository & UseCase)
```
