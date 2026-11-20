package me.test.project.moviekmp.feature.movie.data.dto

import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable
import me.test.project.moviekmp.feature.movie.application.model.MovieDetail

@Serializable
data class OmdbMovieDetailDto(
    @SerialName("Title") val title: String? = null,
    @SerialName("Year") val year: String? = null,
    @SerialName("Rated") val rated: String? = null,
    @SerialName("Released") val released: String? = null,
    @SerialName("Runtime") val runtime: String? = null,
    @SerialName("Genre") val genre: String? = null,
    @SerialName("Director") val director: String? = null,
    @SerialName("Writer") val writer: String? = null,
    @SerialName("Actors") val actors: String? = null,
    @SerialName("Plot") val plot: String? = null,
    @SerialName("Language") val language: String? = null,
    @SerialName("Country") val country: String? = null,
    @SerialName("Awards") val awards: String? = null,
    @SerialName("Poster") val poster: String? = null,
    @SerialName("Ratings") val ratings: List<OmdbRatingDto>? = null,
    @SerialName("Metascore") val metascore: String? = null,
    @SerialName("imdbRating") val imdbRating: String? = null,
    @SerialName("imdbVotes") val imdbVotes: String? = null,
    @SerialName("imdbID") val imdbId: String? = null,
    @SerialName("Type") val type: String? = null,
    @SerialName("BoxOffice") val boxOffice: String? = null,
    @SerialName("Response") val response: String? = null,
    @SerialName("Error") val error: String? = null,
) {
    fun toModel(): MovieDetail = MovieDetail(
        imdbId = imdbId.orEmpty(),
        title = title ?: "Tanpa Judul",
        year = year ?: "-",
        rated = rated ?: "N/A",
        released = released ?: "-",
        runtime = runtime ?: "-",
        genre = genre ?: "-",
        director = director ?: "-",
        writer = writer ?: "-",
        actors = actors ?: "-",
        plot = plot ?: "-",
        language = language ?: "-",
        country = country ?: "-",
        awards = awards ?: "-",
        poster = if (!poster.isNullOrEmpty() && poster != "N/A") poster else "",
        ratings = ratings?.map { it.toModel() } ?: emptyList(),
        metascore = metascore ?: "N/A",
        imdbRating = imdbRating ?: "N/A",
        imdbVotes = imdbVotes ?: "0",
        type = type ?: "movie",
        boxOffice = boxOffice ?: "N/A",
    )
}
