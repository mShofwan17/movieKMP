package me.test.project.moviekmp.feature.movie.application.usecase

import kotlinx.coroutines.CoroutineDispatcher
import kotlinx.coroutines.withContext
import me.test.project.moviekmp.core.config.SecretConfig
import me.test.project.moviekmp.feature.movie.application.MovieRepository
import me.test.project.moviekmp.feature.movie.application.model.MovieDetail
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport

@OptIn(ExperimentalJsExport::class)
@JsExport
fun interface GetDetailMoviesUseCase {
    @Throws(Throwable::class)
    suspend operator fun invoke(imdbId: String, apiKey: String): MovieDetail
}

@Throws(Throwable::class)
suspend operator fun GetDetailMoviesUseCase.invoke(imdbId: String): MovieDetail = invoke(imdbId = imdbId, apiKey = SecretConfig.movieApiKey)

internal class GetDetailMoviesUseCaseImpl(
    private val repository: MovieRepository,
    private val dispatcher: CoroutineDispatcher
) : GetDetailMoviesUseCase {
    @Throws(Throwable::class)
    override suspend fun invoke(imdbId: String, apiKey: String): MovieDetail = withContext(dispatcher) {
        repository.getDetailMovies(imdbId = imdbId, apiKey = apiKey)
    }
}
