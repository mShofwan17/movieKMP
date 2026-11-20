package me.test.project.moviekmp.feature.movie.application.usecase

import kotlinx.coroutines.CoroutineDispatcher
import kotlinx.coroutines.withContext
import me.test.project.moviekmp.core.config.SecretConfig
import me.test.project.moviekmp.feature.movie.application.MovieRepository
import me.test.project.moviekmp.feature.movie.application.model.MovieItem
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport

@OptIn(ExperimentalJsExport::class)
@JsExport
fun interface GetListMoviesSearchUseCase {
    @Throws(Throwable::class)
    suspend operator fun invoke(query: String, type: String?, page: Int, apiKey: String): List<MovieItem>
}

@Throws(Throwable::class)
suspend operator fun GetListMoviesSearchUseCase.invoke(
    query: String,
    type: String? = null,
    page: Int = 1
): List<MovieItem> = invoke(query = query, type = type, page = page, apiKey = SecretConfig.movieApiKey)

internal class GetListMoviesSearchUseCaseImpl(
    private val repository: MovieRepository,
    private val dispatcher: CoroutineDispatcher
) : GetListMoviesSearchUseCase {
    @Throws(Throwable::class)
    override suspend fun invoke(
        query: String,
        type: String?,
        page: Int,
        apiKey: String
    ): List<MovieItem> = withContext(dispatcher) {
        repository.getListMoviesSearch(query = query, type = type, page = page, apiKey = apiKey)
    }
}
