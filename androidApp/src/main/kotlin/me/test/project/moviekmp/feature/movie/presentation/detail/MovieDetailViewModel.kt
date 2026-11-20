package me.test.project.moviekmp.feature.movie.presentation.detail

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch
import me.test.project.moviekmp.feature.movie.application.model.MovieDetail
import me.test.project.moviekmp.feature.movie.application.usecase.GetDetailMoviesUseCase
import me.test.project.moviekmp.feature.movie.application.usecase.invoke

data class MovieDetailUiState(
    val isLoading: Boolean = true,
    val movie: MovieDetail? = null,
    val error: String? = null,
)

class MovieDetailViewModel(
    private val imdbId: String,
    private val getDetailMoviesUseCase: GetDetailMoviesUseCase
) : ViewModel() {

    private val _state = MutableStateFlow(MovieDetailUiState())
    val state: StateFlow<MovieDetailUiState> = _state.asStateFlow()

    init {
        loadDetail(imdbId)
    }

    fun loadDetail(targetImdbId: String = imdbId) {
        viewModelScope.launch {
            _state.update { it.copy(isLoading = true, error = null) }
            runCatching { getDetailMoviesUseCase(imdbId = targetImdbId) }
                .onSuccess { detail ->
                    _state.update { it.copy(isLoading = false, movie = detail) }
                }
                .onFailure { e ->
                    _state.update { it.copy(isLoading = false, error = e.message ?: "Gagal memuat detail film") }
                }
        }
    }
}
