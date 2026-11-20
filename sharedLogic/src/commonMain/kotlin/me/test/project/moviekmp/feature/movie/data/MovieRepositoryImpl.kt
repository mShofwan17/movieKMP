package me.test.project.moviekmp.feature.movie.data

import me.test.project.moviekmp.core.httpClient.models.ApiException
import me.test.project.moviekmp.feature.movie.application.MovieRepository
import me.test.project.moviekmp.feature.movie.application.model.MovieDetail
import me.test.project.moviekmp.feature.movie.application.model.MovieItem
import me.test.project.moviekmp.feature.movie.data.service.MovieRemoteService

class MovieRepositoryImpl(
    private val remoteService: MovieRemoteService
) : MovieRepository {

    override suspend fun getListMovies(apiKey: String): List<MovieItem> {
        return getListMoviesSearch(query = "movie", type = null, page = 1, apiKey = apiKey)
    }

    override suspend fun getListMoviesSearch(
        query: String,
        type: String?,
        page: Int,
        apiKey: String
    ): List<MovieItem> {
        val response = remoteService.searchMovies(query = query, type = type, page = page, apiKey = apiKey)
        if (response.response == "False") {
            throw ApiException(response.error ?: "Film tidak ditemukan")
        }
        return response.search?.map { it.toModel() } ?: emptyList()
    }

    override suspend fun getDetailMovies(imdbId: String, apiKey: String): MovieDetail {
        val response = remoteService.getMovieDetail(imdbId = imdbId, apiKey = apiKey)
        if (response.response == "False") {
            throw ApiException(response.error ?: "Detail film tidak ditemukan")
        }
        return response.toModel()
    }
}
