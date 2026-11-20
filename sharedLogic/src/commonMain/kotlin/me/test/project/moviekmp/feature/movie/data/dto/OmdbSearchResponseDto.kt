package me.test.project.moviekmp.feature.movie.data.dto

import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

@Serializable
data class OmdbSearchResponseDto(
    @SerialName("Search") val search: List<OmdbSearchItemDto>? = null,
    @SerialName("totalResults") val totalResults: String? = null,
    @SerialName("Response") val response: String? = null,
    @SerialName("Error") val error: String? = null,
)
