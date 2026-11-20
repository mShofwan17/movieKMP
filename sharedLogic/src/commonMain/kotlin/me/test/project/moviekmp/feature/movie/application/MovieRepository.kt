package me.test.project.moviekmp.feature.movie.application

import me.test.project.moviekmp.feature.movie.application.model.MovieDetail
import me.test.project.moviekmp.feature.movie.application.model.MovieItem
import me.test.project.moviekmp.feature.movie.data.service.DEFAULT_MOVIE_API_KEY

interface MovieRepository {
    suspend fun getListMovies(apiKey: String = DEFAULT_MOVIE_API_KEY): List<MovieItem>
    suspend fun getListMoviesSearch(query: String, type: String? = null, page: Int = 1, apiKey: String = DEFAULT_MOVIE_API_KEY): List<MovieItem>
    suspend fun getDetailMovies(imdbId: String, apiKey: String = DEFAULT_MOVIE_API_KEY): MovieDetail
}
