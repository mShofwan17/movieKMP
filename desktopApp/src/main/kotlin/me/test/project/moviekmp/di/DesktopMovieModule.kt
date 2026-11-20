package me.test.project.moviekmp.di

import me.test.project.moviekmp.feature.movie.presentation.detail.DesktopMovieDetailViewModel
import me.test.project.moviekmp.feature.movie.presentation.list.DesktopMovieListViewModel
import org.koin.dsl.module

val desktopMovieViewModelModule = module {
    factory { DesktopMovieListViewModel(get(), get()) }
    factory { (imdbId: String) -> DesktopMovieDetailViewModel(imdbId, get()) }
}
