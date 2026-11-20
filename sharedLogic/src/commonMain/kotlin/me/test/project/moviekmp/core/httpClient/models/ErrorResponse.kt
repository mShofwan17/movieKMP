package me.test.project.moviekmp.core.httpClient.models

import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

@Serializable
data class ErrorResponse(
    @SerialName("detail") val detail: String? = null
)
