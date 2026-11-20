package me.test.project.moviekmp.feature.movie.presentation.list

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch
import me.test.project.moviekmp.feature.movie.application.model.MovieItem
import me.test.project.moviekmp.feature.movie.application.usecase.GetListMoviesSearchUseCase
import me.test.project.moviekmp.feature.movie.application.usecase.GetListMoviesUseCase
import me.test.project.moviekmp.feature.movie.application.usecase.invoke

data class MovieListUiState(
    val query: String = "",
    val selectedType: String = "",
    val isLoading: Boolean = false,
    val isPaging: Boolean = false,
    val currentPage: Int = 1,
    val canPaginate: Boolean = true,
    val movies: List<MovieItem> = emptyList(),
    val error: String? = null,
)

class MovieListViewModel(
    private val getListMoviesUseCase: GetListMoviesUseCase,
    private val getListMoviesSearchUseCase: GetListMoviesSearchUseCase
) : ViewModel() {

    private val _state = MutableStateFlow(MovieListUiState())
    val state: StateFlow<MovieListUiState> = _state.asStateFlow()

    init {
        searchMovies(_state.value.query, _state.value.selectedType)
    }

    fun onQueryChange(newQuery: String) {
        _state.update { it.copy(query = newQuery, error = null) }
        searchMovies(newQuery, _state.value.selectedType)
    }

    fun onTypeSelected(type: String) {
        _state.update { it.copy(selectedType = type) }
        searchMovies(_state.value.query, type)
    }

    fun search() {
        searchMovies(_state.value.query, _state.value.selectedType)
    }

    fun loadNextPage() {
        val currentState = _state.value
        if (currentState.isLoading || currentState.isPaging || !currentState.canPaginate) return

        viewModelScope.launch {
            _state.update { it.copy(isPaging = true) }
            val nextPage = currentState.currentPage + 1
            val effectiveQuery = currentState.query.ifBlank { "movie" }
            runCatching {
                getListMoviesSearchUseCase(
                    query = effectiveQuery,
                    type = currentState.selectedType.ifBlank { null },
                    page = nextPage
                )
            }.onSuccess { newMovies ->
                _state.update {
                    it.copy(
                        isPaging = false,
                        currentPage = nextPage,
                        canPaginate = newMovies.isNotEmpty(),
                        movies = it.movies + newMovies
                    )
                }
            }.onFailure {
                _state.update { it.copy(isPaging = false, canPaginate = false) }
            }
        }
    }

    private fun searchMovies(query: String, type: String) {
        viewModelScope.launch {
            _state.update {
                it.copy(
                    isLoading = true,
                    error = null,
                    currentPage = 1,
                    canPaginate = true
                )
            }
            val effectiveQuery = query.ifBlank { "movie" }
            runCatching {
                getListMoviesSearchUseCase(
                    query = effectiveQuery,
                    type = type.ifBlank { null },
                    page = 1
                )
            }.onSuccess { list ->
                _state.update { it.copy(isLoading = false, movies = list) }
            }.onFailure { e ->
                _state.update { it.copy(isLoading = false, error = e.message ?: "Terjadi kesalahan") }
            }
        }
    }
}
