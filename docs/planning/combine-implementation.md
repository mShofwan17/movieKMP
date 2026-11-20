# 📋 Perencanaan Menggunakan Flow `zip` / `combine` pada `ProfileViewModel`

Dokumen ini berisi perencanaan penggabungan hasil pemanggilan asynchronous `getProfile(userId)` dan `getPoint()` di `ProfileViewModel.kt` menggunakan operator **`zip`** / **`combine`** dari Kotlin Coroutines Flow.

---

## 🎯 Tujuan Refactoring
1. Menggabungkan dua operasi asynchronous (`getProfileUseCase` dan `getPointUseCase`) ke dalam satu alur terpadu.
2. Menggunakan `zip` atau `combine` sehingga UI menerima kedua hasil sekaligus (`UserProfile` dan `pointUser`) setelah kedua data selesai dimuat.
3. Menangani status `Loading`, `Success(Pair(profile, point))`, dan `Error` secara terpusat dalam `ProfileUiState`.

---

## 📐 1. Perbandingan Operator Flow

| Operator | Perilaku | Rekomendasi |
|---|---|---|
| **`zip`** | Menunggu kedua flow memancarkan nilai, lalu menggabungkannya ke dalam `Pair(profile, point)`. | **Direkomendasikan** untuk pasangan satu kali panggil (one-shot result). |
| **`combine`** | Memancarkan nilai baru setiap kali salah satu flow memancarkan nilai baru (setelah kedua flow minimal pernah memancarkan 1 nilai). | Cocok jika salah satu/kedua data memiliki aliran data real-time berulang. |

---

## 🛠️ 2. Implementasi pada `ProfileViewModel.kt`

File: `androidApp/src/main/kotlin/me/poc/kmpchat/profile/ProfileViewModel.kt`

```kotlin
package me.poc.kmpchat.profile

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import kotlinx.coroutines.delay
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.catch
import kotlinx.coroutines.flow.flow
import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.onEach
import kotlinx.coroutines.flow.onStart
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.flow.zip
import kotlinx.coroutines.launch
import me.poc.kmpchat.chat.application.model.UserProfile
import me.poc.kmpchat.chat.application.usecase.GetProfileUseCase
import me.poc.kmpchat.model.UiState
import me.poc.kmpchat.profile.application.useCases.GetPointUseCase

data class ProfileData(
    val user: UserProfile,
    val point: Double
)

data class ProfileUiState(
    val userState: UiState<ProfileData> = UiState.Loading,
    val pointUser: Double = 0.0,
    val isLoading: Boolean = true,
    val user: UserProfile? = null,
    val error: String? = null,
)

class ProfileViewModel(
    userId: String,
    private val getProfileUseCase: GetProfileUseCase,
    private val getPointUseCase: GetPointUseCase
) : ViewModel() {

    private val _state = MutableStateFlow(ProfileUiState())
    val state: StateFlow<ProfileUiState> = _state.asStateFlow()

    init {
        loadProfileData(userId)
    }

    fun loadProfileData(userId: String) {
        val profileFlow = flow {
            delay(2000) // Delay 2 detik untuk profil
            emit(getProfileUseCase(userId))
        }

        val pointFlow = flow {
            delay(3000) // Delay 3 detik untuk poin
            emit(getPointUseCase())
        }

        profileFlow.zip(pointFlow) { profile, point ->
            ProfileData(user = profile, point = point)
        }
            .onStart {
                _state.update {
                    it.copy(
                        userState = UiState.Loading,
                        isLoading = true,
                        error = null
                    )
                }
            }
            .onEach { data ->
                _state.update {
                    it.copy(
                        userState = UiState.Success(data),
                        user = data.user,
                        pointUser = data.point,
                        isLoading = false
                    )
                }
            }
            .catch { e ->
                _state.update {
                    it.copy(
                        userState = UiState.Error(e.message),
                        isLoading = false,
                        error = e.message
                    )
                }
            }
            .launchIn(viewModelScope)
    }
}
```

---

## 🎨 3. Penyesuaian pada `ProfileScreen.kt`
File: `androidApp/src/main/kotlin/me/poc/kmpchat/profile/ProfileScreen.kt`

- Menampilkan `pointUser` di layar Profil saat data berhasil dimuat (`state.pointUser`).

```kotlin
Spacer(modifier = Modifier.height(8.dp))
Text(
    text = "Poin: ${state.pointUser}",
    style = MaterialTheme.typography.titleMedium,
    color = MaterialTheme.colorScheme.primary,
    fontWeight = FontWeight.Bold
)
```

---

## 🧪 4. Rencana Verifikasi
1. `./gradlew :androidApp:assembleDebug` untuk memverifikasi tidak ada kesalahan kompilasi.
2. Memastikan `ProfileScreen` menampilkan indikator `Loading`, dan setelah kedua flow selesai (max delay ~3s) menampilkan profil beserta nilai poin (`5.6`).
