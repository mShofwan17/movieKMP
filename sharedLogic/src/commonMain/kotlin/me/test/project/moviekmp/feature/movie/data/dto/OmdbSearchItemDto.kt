package me.test.project.moviekmp.feature.movie.data.dto

import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable
import me.test.project.moviekmp.feature.movie.application.model.MovieItem

@Serializable
data class OmdbSearchItemDto(
    @SerialName("Title") val title: String? = null,
    @SerialName("Year") val year: String? = null,
    @SerialName("imdbID") val imdbId: String? = null,
    @SerialName("Type") val type: String? = null,
    @SerialName("Poster") val poster: String? = null,
) {
    fun toModel(): MovieItem = MovieItem(
        imdbId = imdbId.orEmpty(),
        title = title ?: "Tanpa Judul",
        year = year ?: "-",
        type = type ?: "movie",
        poster = if (!poster.isNullOrEmpty() && poster != "N/A") poster else "",
    )
}
