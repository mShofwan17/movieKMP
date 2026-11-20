package me.test.project.moviekmp

import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.*
import androidx.compose.ui.unit.dp
import androidx.compose.ui.window.Window
import androidx.compose.ui.window.application
import androidx.compose.ui.window.rememberWindowState
import me.test.project.moviekmp.core.sharedModule
import me.test.project.moviekmp.di.desktopMovieViewModelModule
import me.test.project.moviekmp.feature.movie.presentation.detail.DesktopMovieDetailScreen
import me.test.project.moviekmp.feature.movie.presentation.list.DesktopMovieListScreen
import org.koin.core.context.startKoin

sealed interface DesktopMovieRoute {
    data object List : DesktopMovieRoute
    data class Detail(val imdbId: String) : DesktopMovieRoute
}

fun main() {
    startKoin {
        modules(sharedModule + desktopMovieViewModelModule)
    }

    application {
        Window(
            onCloseRequest = ::exitApplication,
            title = "MovieKMP Desktop",
            state = rememberWindowState(width = 900.dp, height = 700.dp)
        ) {
            var currentRoute by remember { mutableStateOf<DesktopMovieRoute>(DesktopMovieRoute.List) }

            MaterialTheme {
                when (val route = currentRoute) {
                    DesktopMovieRoute.List -> DesktopMovieListScreen(
                        onMovieClick = { imdbId -> currentRoute = DesktopMovieRoute.Detail(imdbId) }
                    )
                    is DesktopMovieRoute.Detail -> DesktopMovieDetailScreen(
                        imdbId = route.imdbId,
                        onBack = { currentRoute = DesktopMovieRoute.List }
                    )
                }
            }
        }
    }
}
