package me.test.project.moviekmp.feature.movie.data.dto

import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable
import me.test.project.moviekmp.feature.movie.application.model.MovieRating

@Serializable
data class OmdbRatingDto(
    @SerialName("Source") val source: String? = null,
    @SerialName("Value") val value: String? = null,
) {
    fun toModel(): MovieRating = MovieRating(
        source = source ?: "-",
        value = value ?: "-"
    )
}
