package me.test.project.moviekmp.feature.movie

import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.test.runTest
import me.test.project.moviekmp.core.sharedModule
import me.test.project.moviekmp.feature.movie.application.model.MovieItem
import me.test.project.moviekmp.feature.movie.application.usecase.GetListMoviesUseCase
import me.test.project.moviekmp.feature.movie.application.usecase.GetListMoviesUseCaseImpl
import me.test.project.moviekmp.feature.movie.application.usecase.invoke
import me.test.project.moviekmp.feature.movie.data.MovieRepositoryImpl
import me.test.project.moviekmp.feature.movie.data.dto.OmdbMovieDetailDto
import me.test.project.moviekmp.feature.movie.data.dto.OmdbSearchItemDto
import me.test.project.moviekmp.feature.movie.data.dto.OmdbSearchResponseDto
import me.test.project.moviekmp.feature.movie.data.service.MovieRemoteService
import org.koin.core.context.startKoin
import org.koin.core.context.stopKoin
import kotlin.test.AfterTest
import kotlin.test.BeforeTest
import kotlin.test.Test
import kotlin.test.assertEquals

class FakeMovieRemoteService : MovieRemoteService {
    override suspend fun searchMovies(
        query: String,
        type: String?,
        page: Int,
        apiKey: String
    ): OmdbSearchResponseDto {
        return OmdbSearchResponseDto(
            response = "True",
            totalResults = "1",
            search = listOf(
                OmdbSearchItemDto(
                    title = "Batman Begins",
                    year = "2005",
                    imdbId = "tt0372784",
                    type = "movie",
                    poster = "https://example.com/poster.jpg"
                )
            )
        )
    }

    override suspend fun getMovieDetail(
        imdbId: String,
        plot: String,
        apiKey: String
    ): OmdbMovieDetailDto {
        return OmdbMovieDetailDto(
            response = "True",
            title = "Batman Begins",
            year = "2005",
            imdbId = imdbId,
            type = "movie",
            poster = "https://example.com/poster.jpg",
            plot = "Driven by tragedy..."
        )
    }
}

class MovieUseCaseTest {

    @BeforeTest
    fun setUp() {
        startKoin {
            modules(sharedModule)
        }
    }

    @AfterTest
    fun tearDown() {
        stopKoin()
    }

    @Test
    fun testGetListMoviesUseCase() = runTest {
        val fakeService = FakeMovieRemoteService()
        val repository = MovieRepositoryImpl(fakeService)
        val useCase: GetListMoviesUseCase = GetListMoviesUseCaseImpl(repository, Dispatchers.Default)

        val result = useCase()
        assertEquals(1, result.size)
        assertEquals("Batman Begins", result.first().title)
        assertEquals("tt0372784", result.first().imdbId)
    }
}
