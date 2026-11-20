package me.test.project.moviekmp.feature.movie.application.model

import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport

@OptIn(ExperimentalJsExport::class)
@JsExport
data class MovieRating(
    val source: String,
    val value: String,
)

@OptIn(ExperimentalJsExport::class)
@JsExport
data class MovieDetail(
    val imdbId: String,
    val title: String,
    val year: String,
    val rated: String,
    val released: String,
    val runtime: String,
    val genre: String,
    val director: String,
    val writer: String,
    val actors: String,
    val plot: String,
    val language: String,
    val country: String,
    val awards: String,
    val poster: String,
    val ratings: List<MovieRating>,
    val metascore: String,
    val imdbRating: String,
    val imdbVotes: String,
    val type: String,
    val boxOffice: String,
)
