package me.test.project.moviekmp.feature.movie.application.model

import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport

@OptIn(ExperimentalJsExport::class)
@JsExport
data class MovieItem(
    val imdbId: String,
    val title: String,
    val year: String,
    val type: String,
    val poster: String,
)
