package me.test.project.moviekmp.nav

import androidx.compose.runtime.Composable
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import androidx.navigation.toRoute
import kotlinx.serialization.Serializable
import me.test.project.moviekmp.feature.movie.presentation.detail.MovieDetailScreen
import me.test.project.moviekmp.feature.movie.presentation.list.MovieListScreen

@Serializable
data object MovieListRoute

@Serializable
data class MovieDetailRoute(val imdbId: String)

@Composable
fun AppNavigation() {
    val navController = rememberNavController()

    NavHost(navController = navController, startDestination = MovieListRoute) {
        composable<MovieListRoute> {
            MovieListScreen(
                onMovieClick = { imdbId ->
                    navController.navigate(MovieDetailRoute(imdbId))
                }
            )
        }
        composable<MovieDetailRoute> { entry ->
            val route = entry.toRoute<MovieDetailRoute>()
            MovieDetailScreen(
                imdbId = route.imdbId,
                onBackClick = { navController.popBackStack() }
            )
        }
    }
}
