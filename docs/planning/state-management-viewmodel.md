# 📋 Perencanaan State Management `UiState` dengan Artificial Delay 2 Detik (`ChatViewModel` & `ProfileViewModel`)

Dokumen ini berisi perencanaan integrasi generic `sealed class UiState` (`Loading`, `Success`, `Error`) serta penambahan artificial delay sebesar **2 detik** agar indikator *loading* dapat terlihat jelas pada fitur **Chat** dan **Profil** pada aplikasi Android (`androidApp`).

---

## 📐 1. Definisi Generic `UiState`
File: `androidApp/src/main/kotlin/me/poc/kmpchat/chat/model/UiState.kt`

```kotlin
package me.poc.kmpchat.chat.model

sealed interface UiState<out T> {
    data object Loading : UiState<Nothing>
    data class Success<T>(val data: T) : UiState<T>
    data class Error(val message: String?) : UiState<Nothing>
}
```

---

## 💬 2. Implementasi pada Fitur Chat

### 2.1 `ChatViewModel.kt`
File: `androidApp/src/main/kotlin/me/poc/kmpchat/chat/ChatViewModel.kt`

```kotlin
data class ChatUiState(
    val userState: UiState<UserProfile> = UiState.Loading,
    val messagesState: UiState<List<ChatMessage>> = UiState.Loading,
    val user: UserProfile? = null,
    val messages: List<ChatMessage> = emptyList(),
    val input: String = "",
    val isSending: Boolean = false,
    val error: String? = null,
)
```

- **Get Profile Flow**:
```kotlin
flow {
    delay(2000) // Delay 2 detik agar loading profil pada TopBar terlihat
    emit(getProfileUseCase(userId))
}
.onStart {
    _state.update { it.copy(userState = UiState.Loading) }
}
.onEach { user ->
    _state.update { it.copy(userState = UiState.Success(user), user = user) }
}
.catch { e ->
    _state.update { it.copy(userState = UiState.Error(e.message), error = e.message) }
}
.launchIn(viewModelScope)
```

- **Observe Chat Messages Flow**:
```kotlin
observeChatMessagesUseCase()
    .onStart {
        _state.update { it.copy(messagesState = UiState.Loading) }
        delay(2000) // Delay 2 detik agar loading daftar pesan terlihat
    }
    .onEach { msgs ->
        _state.update { it.copy(messagesState = UiState.Success(msgs), messages = msgs) }
    }
    .catch { e ->
        _state.update { it.copy(messagesState = UiState.Error(e.message), error = e.message) }
    }
    .launchIn(viewModelScope)
```

### 2.2 Refleksi UI `ChatScreen.kt`
File: `androidApp/src/main/kotlin/me/poc/kmpchat/chat/ChatScreen.kt`

- **TopBar (`userState`)**: Menampilkan nama user jika `Success`, atau placeholder saat `Loading`.
- **Body (`messagesState`)**:
  - `UiState.Loading`: Menampilkan `CircularProgressIndicator()` di tengah layar.
  - `UiState.Success`: Menampilkan `LazyColumn` pesan chat.
  - `UiState.Error`: Menampilkan pesan kesalahan di tengah layar.

---

## 👤 3. Implementasi pada Fitur Profil

### 3.1 `ProfileViewModel.kt`
File: `androidApp/src/main/kotlin/me/poc/kmpchat/profile/ProfileViewModel.kt`

```kotlin
data class ProfileUiState(
    val userState: UiState<UserProfile> = UiState.Loading,
    val isLoading: Boolean = true,
    val user: UserProfile? = null,
    val error: String? = null,
)

class ProfileViewModel(
    userId: String,
    getProfileUseCase: GetProfileUseCase,
) : ViewModel() {

    private val _state = MutableStateFlow(ProfileUiState())
    val state: StateFlow<ProfileUiState> = _state.asStateFlow()

    init {
        viewModelScope.launch {
            _state.update { it.copy(userState = UiState.Loading, isLoading = true) }
            delay(2000) // Delay 2 detik agar loading profil terlihat
            runCatching { getProfileUseCase(userId) }
                .onSuccess { user ->
                    _state.update { it.copy(userState = UiState.Success(user), isLoading = false, user = user) }
                }
                .onFailure { e ->
                    _state.update { it.copy(userState = UiState.Error(e.message), isLoading = false, error = e.message) }
                }
        }
    }
}
```

### 3.2 Refleksi UI `ProfileScreen.kt`
File: `androidApp/src/main/kotlin/me/poc/kmpchat/profile/ProfileScreen.kt`

- `UiState.Loading` (`isLoading = true`): Menampilkan `CircularProgressIndicator()` di tengah layar selama 2 detik.
- `UiState.Success`: Menampilkan avatar 96dp, nama, dan bio.
- `UiState.Error`: Menampilkan teks error.

---

## 🧪 4. Rencana Verifikasi
1. Menjalankan `./gradlew :androidApp:assembleDebug` untuk memastikan kompilasi sukses.
2. Menguji alur visual `Loading` (berlangsung 2 detik) $\rightarrow$ `Success` pada layar **Chat** dan **Profil**.
