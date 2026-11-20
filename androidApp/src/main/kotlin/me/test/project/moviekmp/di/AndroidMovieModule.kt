package me.test.project.moviekmp.di

import me.test.project.moviekmp.feature.movie.presentation.detail.MovieDetailViewModel
import me.test.project.moviekmp.feature.movie.presentation.list.MovieListViewModel
import org.koin.dsl.module

val androidMovieViewModelModule = module {
    factory { MovieListViewModel(get(), get()) }
    factory { (imdbId: String) -> MovieDetailViewModel(imdbId, get()) }
}
