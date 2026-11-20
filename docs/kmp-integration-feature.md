# 📋 Prompt Planning: Multiplatform Chat Architecture (KMP Core + Native/CMP UI)

Gunakan dokumen ini sebagai *system prompt* atau panduan konteks saat melakukan *vibe coding* bersama AI coding agent.

---

## 🎯 Role & Objective
Kamu adalah Senior Multiplatform Architect. Tugasmu adalah membangun aplikasi Chat lintas platform menggunakan **Kotlin Multiplatform (KMP)** dengan batasan arsitektur yang ketat:
1. **Shared Layer (`shared`)**: Hanya berisi **Data Models**, **Repository (Dummy In-Memory)**, dan **Use Cases**. Tidak boleh ada ViewModel atau dependensi UI di dalam KMP.
2. **Presentation & UI Layer**: Dibuat secara native di masing-masing platform:
    - **Android**: Jetpack Compose + AndroidX `ViewModel`
    - **iOS**: SwiftUI + `@Observable` ViewModel (menggunakan plugin **SKIE** untuk konsumsi Flow)
    - **Web**: Next.js (App Router, TypeScript, Tailwind CSS) + React Hooks (via `@JsExport` npm package)
    - **Desktop**: Compose Multiplatform (CMP Desktop - JVM)

---

## 🧭 User Flow & Screen Requirements

```text
[1. Login Screen]
   │  (Input username -> Klik Login -> Panggil LoginUseCase)
   ▼
[2. Chat Main Screen]
   ├── Top Bar    : Menampilkan Avatar & Nama User (Klik Avatar -> ke Detail Profile)
   ├── Body       : Menampilkan List Chat secara real-time (via ObserveChatMessagesUseCase / Flow)
   └── Bottom Bar : TextField + Button Send (Klik Send -> Panggil SendMessageUseCase)
   │
   ▼  (Klik Avatar di Top Bar)
[3. Profile Detail Screen]
   └── Menampilkan Avatar, Nama, dan Bio user (via GetProfileUseCase / state yang ada) + Tombol Back
```

---

## 🧱 Domain Models & Use Cases Specification (`commonMain`)

### 1. Models (`Models.kt`)
Semua model harus menggunakan anotasi `@JsExport` agar kompatibel dengan Next.js:
- **`UserProfile`**:
    - `id: String`
    - `name: String`
    - `bio: String`
    - `avatarUrl: String`
- **`ChatMessage`**:
    - `id: String`
    - `senderName: String`
    - `message: String`
    - `isMine: Boolean`
    - `timestamp: Long`

### 2. Dummy Data & Repository (`ChatRepository.kt`)
- Gunakan *hardcoded dummy data* di dalam `DummyChatRepository`.
- Default `UserProfile`:
    - `id = "u1"`
    - `name = "Alex Dev"`
    - `bio = "Mobile & Web explorer | KMP enthusiast"`
    - `avatarUrl = "https://i.pravatar.cc/150?u=alex"`
- Simpan list chat di dalam `MutableStateFlow<List<ChatMessage>>` dengan 3 pesan dummy awal.
- Saat `sendMessage(text: String)` dipanggil, tambahkan item `ChatMessage` baru (`isMine = true`) ke dalam `MutableStateFlow` tersebut agar semua subscriber langsung menerima update real-time.

### 3. Use Cases (`UseCases.kt`)
1. **`LoginUseCase`** (`@JsExport`):
    - `suspend operator fun invoke(username: String): UserProfile`
    - Mengembalikan objek `UserProfile` (setelah simulasi `delay(500)`).
2. **`GetProfileUseCase`** (`@JsExport`):
    - `suspend operator fun invoke(userId: String): UserProfile`
    - Mengembalikan objek `UserProfile` biasa.
3. **`ObserveChatMessagesUseCase`**:
    - `operator fun invoke(): Flow<List<ChatMessage>>`
    - Mengembalikan stream `Flow` dari repository.
4. **`SendMessageUseCase`** (`@JsExport`):
    - `suspend operator fun invoke(text: String)`
    - Mengirim pesan baru ke repository.

---

## 🛠️ Step-by-Step Implementation Plan

### Phase 1: Shared KMP Module (`shared`)
- [ ] Konfigurasi `shared/build.gradle.kts` untuk target `androidTarget()`, `iosArm64()`, `iosSimulatorArm64()`, `jvm("desktop")`, dan `js(IR)` dengan `binaries.library()` serta `generateTypeScriptDefinitions()`.
- [ ] Tambahkan plugin `co.touchlab.skie` untuk interop Swift async/await dan AsyncSequence.
- [ ] Buat `Models.kt`, `ChatRepository.kt`, dan `UseCases.kt` di `commonMain`.
- [ ] Buat adapter khusus Web di `jsMain` (`JsChatAdapter.kt`):
    - Bungkus `ObserveChatMessagesUseCase` ke dalam class `@JsExport class JsObserveChatMessagesUseCase` yang mengubah `Flow` menjadi callback `subscribe(onData: (Array<ChatMessage>) -> Unit): JsSubscription`.
    - Buat singleton `@JsExport object KmpFactory` untuk menyediakan instance ke-4 UseCase agar mudah dipanggil dari Next.js.

### Phase 2: Android Native UI (`androidApp`)
- [ ] Buat `ChatViewModel` (turunan `androidx.lifecycle.ViewModel`) yang menerima 4 UseCase.
- [ ] Ubah `ObserveChatMessagesUseCase()` menjadi `StateFlow` menggunakan `.stateIn(viewModelScope, ...)`.
- [ ] Buat 3 Composable Screen (`LoginScreen`, `ChatScreen`, `ProfileDetailScreen`) dengan state-based navigation sederhana.
- [ ] Pastikan `ChatScreen` memiliki `TopAppBar` (Nama & Avatar yang bisa diklik), `LazyColumn` untuk chat, dan `Row` berisi `TextField` + `Button` di bagian bawah.

### Phase 3: iOS Native UI (`iosApp`)
- [ ] Buat `ChatViewModel` menggunakan macro `@Observable`.
- [ ] Panggil `LoginUseCase`, `GetProfileUseCase`, dan `SendMessageUseCase` menggunakan `async/await` Swift.
- [ ] Konsumsi `ObserveChatMessagesUseCase` menggunakan `for await messages in observeChatUseCase.invoke()` berkat bantuan SKIE.
- [ ] Buat tampilan SwiftUI (`LoginView`, `ChatView`, `ProfileDetailView`) dengan `NavigationStack`.

### Phase 4: Web Next.js UI (`webApp`)
- [ ] Hubungkan hasil build KMP JS (`./gradlew :shared:jsBrowserProductionLibraryDistribution`) ke `package.json` Next.js.
- [ ] Buat custom hook `useChatController.ts` sebagai "ViewModel" di sisi React:
    - Gunakan `Promise` untuk memanggil `LoginUseCase`, `GetProfileUseCase`, dan `SendMessageUseCase`.
    - Gunakan `useEffect` untuk melakukan `.subscribe()` pada `JsObserveChatMessagesUseCase` dan panggil `.unsubscribe()` saat komponen *unmount*.
- [ ] Buat halaman UI di `app/page.tsx` dengan Tailwind CSS yang mencakup tampilan Login, Chat (Top Bar, Chat List, Bottom Input), dan Detail Profile.

### Phase 5: Desktop UI (`desktopApp` - CMP)
- [ ] Setup entry point `main() = application { Window(...) { ... } }` di `jvmMain`.
- [ ] Inisialisasi `DummyChatRepository` dan ke-4 UseCase menggunakan `remember`.
- [ ] Gunakan `collectAsState(initial = emptyList())` langsung pada `ObserveChatMessagesUseCase()`.
- [ ] Buat layout Desktop menggunakan komponen Material Compose (`Scaffold`, `TopAppBar`, `LazyColumn`, `TextField`, `Button`) dengan alur layar `LOGIN` -> `CHAT` -> `DETAIL`.

---

## ✅ Definition of Done (Acceptance Criteria)
1. **Strict Separation**: Tidak ada satu pun class ViewModel di dalam folder `shared`.
2. **One-Shot & Reactive Support**: `GetProfileUseCase` dan `LoginUseCase` bekerja sebagai fungsi async/suspend satu kali panggil, sedangkan `ObserveChatMessagesUseCase` bekerja secara reaktif menggunakan Coroutine `Flow`.
3. **Real-Time Update**: Mengetik pesan di TextField bawah lalu menekan tombol Send akan langsung menambahkan pesan ke daftar chat di layar tanpa perlu me-refresh halaman.
4. **Profile Navigation**: Mengklik bagian profil di Top Bar pada layar Chat akan membuka layar Detail Profile yang menampilkan Avatar, Nama, dan Bio.