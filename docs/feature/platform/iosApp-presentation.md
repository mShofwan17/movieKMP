#  iosApp — Presentation Layer (SwiftUI + `@Observable` + SKIE)

Rencana implementasi **UI + ViewModel + DI** untuk aplikasi Chat di **iOS**. Modul `shared` (model, `ChatRepositoryImpl` in-memory, 4 UseCase, `sharedModule`) **sudah tersedia** dan diekspor sebagai framework **`Shared`** dengan **SKIE** terpasang — lihat [`docs/feature/shared/shared-kmp.md`](../shared/shared-kmp.md).

| Layer | Teknologi |
|---|---|
| UI | SwiftUI |
| State holder | `@Observable` class + `@MainActor` |
| DI | `KoinDependencies` (Kotlin) + `AppContainer` (Swift) via `@Environment` |
| Navigasi | `NavigationStack` + `enum Route` |
| Interop coroutines | SKIE (`suspend` → `async throws`, `Flow` → `AsyncSequence`) |

---

## Desain UI (Redesign)

![Desain iOS — Login, Chat, Profil](docs/feature/platform/ios_design.png)

> Desain ini adalah **acuan redesign** dan **sudah diterapkan** di `iosApp`. Contoh kode UI di Bagian 6 masih versi sebelum redesign; implementasi di repo adalah acuannya. ViewModel, `AppContainer`, dan navigasi **tidak berubah**.
>
> Catatan implementasi:
> - `UI/Theme.swift` — token warna (`Color.nowAccent` ±#0066D6, bubble, field, bar); `AccentColor` di asset juga diset ke biru yang sama, dan root diberi `.tint(.nowAccent)`.
> - **Header Chat & Profil digambar sendiri** dan navigation bar sistem disembunyikan (`.toolbar(.hidden, for: .navigationBar)`). Alasannya: di iOS 26 bar sistem memakai gaya Liquid Glass (item toolbar dibungkus lingkaran kaca, tombol back tanpa label), sehingga tidak sama dengan desain. Gestur swipe-back diaktifkan lagi lewat `UI/NavigationSwipeBack.swift`.
> - Tombol kirim tetap **solid** walau input kosong (teks kosong diabaikan `vm.send()`), hanya nonaktif saat mengirim.
> - Ikon logo memakai SF Symbol `message` (gelembung bulat).

### Token desain

| Token | Nilai | Pemakaian |
|---|---|---|
| Accent | system blue (`Color.accentColor` / `.blue`) | logo, tombol Login, avatar, bubble saya, tombol kirim, tombol back |
| Bubble saya | **solid accent + teks putih** | pesan `isMine = true`, rata kanan |
| Bubble lawan | `Color(.systemGray5)` + teks hitam | pesan lawan, rata kiri |
| Background Profil | `Color(.systemGroupedBackground)` | layar Profil (gaya inset grouped) |
| Nama app | **NOW Chat** | judul login |

### 1 · Login
- Logo: kotak rounded (±72pt, radius ±16pt) accent dengan ikon gelembung chat putih (`bubble.left` / SF Symbol).
- Judul **"NOW Chat"** (`.largeTitle.bold()`) + subjudul "Masuk untuk mulai mengobrol" (`.secondary`).
- Label kecil kapital **"NAMA"** di atas field (`.caption`, `.secondary`).
- `TextField` dengan **background abu terisi** (`Color(.systemGray6)`, radius ±10pt), bukan `.roundedBorder`.
- Tombol **Login** lebar penuh, persegi rounded (`.borderedProminent`, `controlSize(.large)`).

### 2 · Chat
- Navigation bar: avatar inisial + nama **bold** di kiri (`.topBarLeading`), tap → Profil.
- **Nama pengirim di atas bubble** (bukan di dalam), `.caption2`, `.secondary`.
- Bubble radius ±18pt, lebar maks ±75%.
- Input: `TextField` bentuk **kapsul** (border tipis) placeholder **"Tulis pesan..."** + tombol **bulat accent** dengan ikon `arrow.up` putih.

### 3 · Profil
- Navigation bar: tombol back bawaan berlabel **"Chat"**, judul **"Profil"** (inline, tengah).
- Avatar inisial besar (±96pt), nama (`.title.bold()`).
- Bio di dalam **kartu putih rounded** dengan label kecil **"BIO"** (gaya `Section` inset grouped), di atas background `systemGroupedBackground`.

### Perubahan dari implementasi saat ini
- [x] Login: tambah logo, judul besar, subjudul, label "NAMA"; field berlatar abu; tombol besar lebar penuh.
- [x] Chat: bubble saya **solid biru + teks putih** (sekarang biru transparan 20%); nama pengirim pindah ke atas bubble.
- [x] Chat: tombol kirim `paperplane.fill` → **lingkaran biru dengan `arrow.up`**; field jadi kapsul.
- [x] Profil: bio dalam kartu "BIO"; background grouped; judul nav "Profil" inline dan tombol back berlabel "Chat" (beri `.navigationTitle("Chat")` pada `ChatView` agar label back sesuai).
- [x] **Avatar selalu inisial** sesuai desain. Catatan: `shared` mengisi `avatarUrl` (pravatar), sehingga `AvatarView` sekarang menampilkan foto. Jika tetap ingin foto, inisial jadi placeholder.
- [ ] Data contoh di desain (Rina, "Build UAT…") hanya ilustrasi; data nyata berasal dari `ChatRepositoryImpl` di `shared`.

---

## 1. Prasyarat

- **iOS 17+** untuk `@Observable`. Deployment target project saat ini **18.2**, jadi sudah memenuhi.
- **SKIE `0.10.16`** sudah terpasang di `shared` (lihat [`docs/libs/shared/shared-skie-integration.md`](../../libs/shared/shared-skie-integration.md)).
- **Bridge Koin** sudah ada di `shared/src/iosMain/kotlin/me/poc/kmpchat/core/KoinIos.kt`:

```kotlin
fun doInitKoinIos() { startKoin { modules(sharedModule) } }

class KoinDependencies : KoinComponent {
    val loginUseCase: LoginUseCase by inject()
    val getProfileUseCase: GetProfileUseCase by inject()
    val observeChatUseCase: ObserveChatMessagesUseCase by inject()
    val sendMessageUseCase: SendMessageUseCase by inject()
}
```

- **Project Xcode memakai file system synchronized group**, jadi file Swift baru di `iosApp/iosApp/` (termasuk subfolder) otomatis ikut ter-compile.

### Exception Kotlin di Swift (`@Throws`)

`invoke` pada use case `suspend` (`LoginUseCase`, `GetProfileUseCase`, `SendMessageUseCase`) diberi `@Throws(Throwable::class)` di `shared`. Header framework untuk method tersebut menjadi:

> *"This method converts all Kotlin exceptions to errors."*

Artinya **semua** exception Kotlin (mis. `IllegalArgumentException("Username tidak boleh kosong")` dari `LoginUseCase`) menjadi `Error` Swift yang bisa di-`catch`, bukan crash.

- Validasi di ViewModel Swift (mis. nama kosong) **opsional**, hanya untuk umpan balik instan tanpa memanggil Kotlin.
- **Use case `suspend` baru wajib diberi `@Throws(Throwable::class)`** (di interface dan Impl). Tanpanya, hanya `CancellationException` yang menjadi `Error`; exception lain meng-crash app iOS.
- `ChatRepository` tidak diberi `@Throws` karena tidak dipanggil langsung dari Swift.

---

## 2. Prinsip

1. **Satu ViewModel per layar:** `LoginViewModel`, `ChatViewModel`, `ProfileViewModel`.
2. **Semua pemanggilan Kotlin hanya di file `*ViewModel.swift`.** View tidak pernah menyentuh UseCase, sehingga peralihan SKIE ↔ KMP-NativeCoroutines cukup mengubah file ViewModel (lihat Bagian 8).
3. **`@MainActor`** pada ViewModel agar update properti selalu di main thread.
4. **Stream chat dimulai dari `.task { }`**, sehingga otomatis dibatalkan saat View hilang. SKIE meneruskan pembatalan ini ke coroutine Kotlin.
5. **Navigasi diputuskan oleh View** berdasarkan hasil fungsi ViewModel.
6. **`userId` dari hasil login** disimpan di `RootView` dan diteruskan ke Chat/Profile, karena `GetProfileUseCase` mewajibkan `userId`.

---

## 3. DI Swift: `AppContainer`

```swift
// iosApp/iosApp/DI/AppContainer.swift
import Shared

@MainActor
final class AppContainer {
    private let deps = KoinDependencies()

    func makeLoginViewModel() -> LoginViewModel {
        LoginViewModel(loginUseCase: deps.loginUseCase)
    }

    func makeChatViewModel(userId: String) -> ChatViewModel {
        ChatViewModel(
            userId: userId,
            getProfile: deps.getProfileUseCase,
            observeChat: deps.observeChatUseCase,
            sendMessage: deps.sendMessageUseCase
        )
    }

    func makeProfileViewModel(userId: String) -> ProfileViewModel {
        ProfileViewModel(userId: userId, getProfile: deps.getProfileUseCase)
    }
}
```

```swift
// iosApp/iosApp/DI/ContainerEnvironment.swift
import SwiftUI

private struct ContainerKey: EnvironmentKey {
    @MainActor static let defaultValue = AppContainer()
}

extension EnvironmentValues {
    var container: AppContainer {
        get { self[ContainerKey.self] }
        set { self[ContainerKey.self] = newValue }
    }
}
```

`iOSApp.swift` sudah memanggil `KoinIosKt.doInitKoinIos()`. Ganti root view-nya:

```swift
// iosApp/iosApp/iOSApp.swift
import SwiftUI
import Shared

@main
struct iOSApp: App {
    private let container: AppContainer

    init() {
        KoinIosKt.doInitKoinIos()   // start Koin SEKALI sebelum container dibuat
        container = AppContainer()
    }

    var body: some Scene {
        WindowGroup {
            RootView()
                .environment(\.container, container)
        }
    }
}
```

---

## 4. ViewModel (`@Observable`)

### 4.1 `LoginViewModel`

```swift
// iosApp/iosApp/Login/LoginViewModel.swift
import Observation
import Shared

@Observable @MainActor
final class LoginViewModel {
    var name = ""
    var isLoading = false
    var error: String?

    private let loginUseCase: any LoginUseCase

    init(loginUseCase: any LoginUseCase) {
        self.loginUseCase = loginUseCase
    }

    /// Mengembalikan `UserProfile.id` jika sukses; navigasi diputuskan oleh View.
    func login() async -> String? {
        let trimmed = name.trimmingCharacters(in: .whitespaces)
        // Umpan balik instan; LoginUseCase di shared juga memvalidasi (error-nya bisa di-catch berkat @Throws)
        guard !trimmed.isEmpty else {
            error = "Username tidak boleh kosong"
            return nil
        }
        isLoading = true
        defer { isLoading = false }
        do {
            let profile = try await loginUseCase.invoke(username: trimmed)   // SKIE: suspend → async throws
            return profile.id
        } catch {
            self.error = error.localizedDescription
            return nil
        }
    }
}
```

### 4.2 `ChatViewModel`

```swift
// iosApp/iosApp/Chat/ChatViewModel.swift
import Observation
import Shared

@Observable @MainActor
final class ChatViewModel {
    var user: UserProfile?
    var messages: [ChatMessage] = []
    var input = ""
    var isSending = false
    var error: String?

    private let userId: String
    private let getProfile: any GetProfileUseCase
    private let observeChat: any ObserveChatMessagesUseCase
    private let sendMessage: any SendMessageUseCase

    init(userId: String,
         getProfile: any GetProfileUseCase,
         observeChat: any ObserveChatMessagesUseCase,
         sendMessage: any SendMessageUseCase) {
        self.userId = userId
        self.getProfile = getProfile
        self.observeChat = observeChat
        self.sendMessage = sendMessage
    }

    /// Dipanggil dari .task { } — dibatalkan otomatis saat View hilang.
    func start() async {
        user = try? await getProfile.invoke(userId: userId)
        for await items in observeChat.invoke() {   // SKIE: Flow → AsyncSequence
            messages = items
        }
    }

    func send() async {
        let text = input.trimmingCharacters(in: .whitespaces)
        guard !text.isEmpty, !isSending else { return }   // shared juga mengabaikan teks kosong
        isSending = true
        defer { isSending = false }
        do {
            try await sendMessage.invoke(text: text)
            input = ""
        } catch {
            self.error = error.localizedDescription
        }
    }
}
```

### 4.3 `ProfileViewModel`

```swift
// iosApp/iosApp/Profile/ProfileViewModel.swift
import Observation
import Shared

@Observable @MainActor
final class ProfileViewModel {
    var user: UserProfile?
    var isLoading = true

    private let userId: String
    private let getProfile: any GetProfileUseCase

    init(userId: String, getProfile: any GetProfileUseCase) {
        self.userId = userId
        self.getProfile = getProfile
    }

    func load() async {
        user = try? await getProfile.invoke(userId: userId)
        isLoading = false
    }
}
```

> Label parameter Swift mengikuti nama parameter Kotlin: `invoke(username:)`, `invoke(userId:)`, `invoke(text:)`.

---

## 5. Navigasi

```swift
// iosApp/iosApp/RootView.swift
import SwiftUI

enum Route: Hashable {
    case profile
}

struct RootView: View {
    @Environment(\.container) private var container

    @State private var userId: String?
    @State private var path: [Route] = []

    // ViewModel dibuat SEKALI dan disimpan di @State agar tidak dibuat ulang setiap render
    @State private var loginVM: LoginViewModel?
    @State private var chatVM: ChatViewModel?

    var body: some View {
        Group {
            if let userId {
                NavigationStack(path: $path) {
                    if let chatVM {
                        ChatView(vm: chatVM) { path.append(.profile) }
                            .navigationDestination(for: Route.self) { route in
                                switch route {
                                case .profile:
                                    ProfileView(vm: container.makeProfileViewModel(userId: userId))
                                }
                            }
                    }
                }
            } else if let loginVM {
                LoginView(vm: loginVM) { id in userId = id }
            }
        }
        .onAppear {
            if loginVM == nil { loginVM = container.makeLoginViewModel() }
        }
        .onChange(of: userId) { _, id in
            if let id, chatVM == nil { chatVM = container.makeChatViewModel(userId: id) }
        }
    }
}
```

> `ProfileViewModel` sengaja dibuat baru setiap kali layar Profile dibuka, sehingga data profil selalu segar. `ChatViewModel` disimpan di `RootView` agar daftar pesan tidak hilang saat kembali dari Profile.

---

## 6. UI

### 6.1 `LoginView`

```swift
// iosApp/iosApp/Login/LoginView.swift
import SwiftUI

struct LoginView: View {
    @Bindable var vm: LoginViewModel
    let onLoggedIn: (String) -> Void

    var body: some View {
        VStack(spacing: 16) {
            TextField("Nama", text: $vm.name)
                .textFieldStyle(.roundedBorder)
                .textInputAutocapitalization(.words)
                .submitLabel(.go)
                .onSubmit { Task { await submit() } }

            if let error = vm.error {
                Text(error).foregroundStyle(.red).font(.footnote)
            }

            Button {
                Task { await submit() }
            } label: {
                if vm.isLoading { ProgressView() } else { Text("Login").frame(maxWidth: .infinity) }
            }
            .buttonStyle(.borderedProminent)
            .disabled(vm.isLoading)
        }
        .padding(24)
    }

    private func submit() async {
        if let id = await vm.login() { onLoggedIn(id) }
    }
}
```

### 6.2 `ChatView`

```swift
// iosApp/iosApp/Chat/ChatView.swift
import SwiftUI
import Shared

struct ChatView: View {
    @Bindable var vm: ChatViewModel
    let onAvatarTap: () -> Void

    var body: some View {
        ScrollViewReader { proxy in
            List(vm.messages, id: \.id) { message in
                MessageRow(message: message).id(message.id)
            }
            .listStyle(.plain)
            .onChange(of: vm.messages.count) {
                if let last = vm.messages.last { proxy.scrollTo(last.id, anchor: .bottom) }
            }
        }
        .safeAreaInset(edge: .bottom) {
            HStack {
                TextField("Tulis pesan…", text: $vm.input)
                    .textFieldStyle(.roundedBorder)
                    .onSubmit { Task { await vm.send() } }
                Button {
                    Task { await vm.send() }
                } label: {
                    Image(systemName: "paperplane.fill")
                }
                .disabled(vm.input.trimmingCharacters(in: .whitespaces).isEmpty || vm.isSending)
            }
            .padding()
            .background(.bar)
        }
        .navigationBarTitleDisplayMode(.inline)
        .toolbar {
            ToolbarItem(placement: .topBarLeading) {
                Button(action: onAvatarTap) {
                    HStack(spacing: 8) {
                        AvatarView(user: vm.user, size: 32)
                        Text(vm.user?.name ?? "").font(.headline)
                    }
                }
                .buttonStyle(.plain)
            }
        }
        .task { await vm.start() }   // lifecycle + pembatalan stream
    }
}

struct MessageRow: View {
    let message: ChatMessage

    var body: some View {
        HStack {
            if message.isMine { Spacer() }
            VStack(alignment: .leading, spacing: 2) {
                if !message.isMine {
                    Text(message.senderName).font(.caption2).foregroundStyle(.secondary)
                }
                Text(message.message)
            }
            .padding(10)
            .background(message.isMine ? Color.accentColor.opacity(0.2) : Color(.secondarySystemBackground))
            .clipShape(RoundedRectangle(cornerRadius: 12))
            if !message.isMine { Spacer() }
        }
        .listRowSeparator(.hidden)
    }
}
```

### 6.3 `ProfileView`

```swift
// iosApp/iosApp/Profile/ProfileView.swift
import SwiftUI

struct ProfileView: View {
    @State var vm: ProfileViewModel

    var body: some View {
        VStack(spacing: 16) {
            if vm.isLoading {
                ProgressView()
            } else if let user = vm.user {
                AvatarView(user: user, size: 96)
                Text(user.name).font(.title2.bold())
                Text(user.bio).font(.body).foregroundStyle(.secondary).multilineTextAlignment(.center)
            } else {
                Text("Profil tidak ditemukan")
            }
            Spacer()
        }
        .padding(24)
        .navigationTitle("Profil")
        .task { await vm.load() }
    }
}
```

### 6.4 `AvatarView`

`avatarUrl` bertipe `String` non-null, jadi cek string kosong:

```swift
// iosApp/iosApp/UI/AvatarView.swift
import SwiftUI
import Shared

struct AvatarView: View {
    let user: UserProfile?
    let size: CGFloat

    var body: some View {
        Group {
            if let urlString = user?.avatarUrl, !urlString.isEmpty, let url = URL(string: urlString) {
                AsyncImage(url: url) { image in
                    image.resizable().scaledToFill()
                } placeholder: {
                    initials
                }
            } else {
                initials
            }
        }
        .frame(width: size, height: size)
        .clipShape(Circle())
    }

    private var initials: some View {
        ZStack {
            Circle().fill(Color.accentColor)
            Text(String(user?.name.prefix(1) ?? "?").uppercased())
                .foregroundStyle(.white)
                .font(.system(size: size * 0.4, weight: .semibold))
        }
    }
}
```

---

## 7. Testing

- **ViewModel:** XCTest / Swift Testing dengan test `async`. Use case adalah protocol Swift (hasil `fun interface` Kotlin), jadi bisa dibuat fake class di Swift yang meng-conform ke `LoginUseCase`, dst. Alternatifnya, pakai implementasi asli lewat `KoinDependencies` setelah `doInitKoinIos()`.
- **Yang diuji:** nama kosong ditolak di Swift (tanpa memanggil Kotlin), `login()` mengembalikan `id`, `send()` mengosongkan `input`, dan `start()` mengisi `messages` setelah `send()`.
- **Cancellation:** pastikan iterasi `for await` berhenti saat `Task` dibatalkan, agar tidak ada coroutine Kotlin yang bocor.

---

## 8. Jika Beralih ke KMP-NativeCoroutines

Hanya file `*ViewModel.swift` yang berubah (View, `AppContainer`, dan navigasi tetap sama):

| SKIE | KMP-NativeCoroutines |
|---|---|
| `try await loginUseCase.invoke(username:)` | `try await asyncFunction(for: loginUseCase.invoke(username:))` |
| `try? await getProfile.invoke(userId:)` | `try? await asyncFunction(for: getProfile.invoke(userId:))` |
| `for await items in observeChat.invoke()` | `for try await items in asyncSequence(for: observeChat.invoke())` |

Ditambah anotasi `@NativeCoroutines` di use case `shared` dan `import KMPNativeCoroutinesAsync` di ViewModel. SKIE harus dilepas dari `shared` agar tidak bentrok.

---

## 9. Struktur File

```
iosApp/iosApp/
├── iOSApp.swift                    # doInitKoinIos() + AppContainer → environment + RootView
├── RootView.swift                  # login gate (userId) + NavigationStack + Route
├── DI/
│   ├── AppContainer.swift          # factory ViewModel dari KoinDependencies
│   └── ContainerEnvironment.swift  # EnvironmentKey
├── UI/
│   └── AvatarView.swift
├── Login/
│   ├── LoginViewModel.swift
│   └── LoginView.swift
├── Chat/
│   ├── ChatViewModel.swift
│   └── ChatView.swift              # + MessageRow
└── Profile/
    ├── ProfileViewModel.swift
    └── ProfileView.swift
```

> File lama dari integrasi SKIE (`iosApp/iosApp/ChatView.swift`, `ChatViewModel.swift` versi `ObservableObject`) dan template `ContentView.swift` sudah dihapus dan digantikan struktur di atas.
