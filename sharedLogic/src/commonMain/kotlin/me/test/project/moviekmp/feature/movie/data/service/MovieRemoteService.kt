package me.test.project.moviekmp.feature.movie.data.service

import io.ktor.client.HttpClient
import io.ktor.client.request.get
import io.ktor.client.request.parameter
import me.test.project.moviekmp.core.config.SecretConfig
import me.test.project.moviekmp.core.httpClient.bodyOrError
import me.test.project.moviekmp.feature.movie.data.dto.OmdbMovieDetailDto
import me.test.project.moviekmp.feature.movie.data.dto.OmdbSearchResponseDto

internal val DEFAULT_MOVIE_API_KEY: String get() = SecretConfig.movieApiKey

interface MovieRemoteService {
    suspend fun searchMovies(
        query: String,
        type: String? = null,
        page: Int = 1,
        apiKey: String = DEFAULT_MOVIE_API_KEY
    ): OmdbSearchResponseDto

    suspend fun getMovieDetail(
        imdbId: String,
        plot: String = "full",
        apiKey: String = DEFAULT_MOVIE_API_KEY
    ): OmdbMovieDetailDto
}

class MovieRemoteServiceImpl(
    private val httpClient: HttpClient
) : MovieRemoteService {

    override suspend fun searchMovies(
        query: String,
        type: String?,
        page: Int,
        apiKey: String
    ): OmdbSearchResponseDto {
        val effectiveApiKey = apiKey.ifBlank { SecretConfig.movieApiKey }
        return httpClient.get(me.test.project.moviekmp.core.httpClient.BASE_URL) {
            parameter("apikey", effectiveApiKey)
            parameter("s", query)
            if (!type.isNullOrBlank()) parameter("type", type)
            parameter("page", page)
        }.bodyOrError()
    }

    override suspend fun getMovieDetail(
        imdbId: String,
        plot: String,
        apiKey: String
    ): OmdbMovieDetailDto {
        val effectiveApiKey = apiKey.ifBlank { SecretConfig.movieApiKey }
        return httpClient.get(me.test.project.moviekmp.core.httpClient.BASE_URL) {
            parameter("apikey", effectiveApiKey)
            parameter("i", imdbId)
            parameter("plot", plot)
        }.bodyOrError()
    }
}
