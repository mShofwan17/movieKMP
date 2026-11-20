package me.test.project.moviekmp.feature.movie

import me.test.project.moviekmp.core.ioDispatcher
import me.test.project.moviekmp.feature.movie.application.MovieRepository
import me.test.project.moviekmp.feature.movie.application.usecase.*
import me.test.project.moviekmp.feature.movie.data.MovieRepositoryImpl
import me.test.project.moviekmp.feature.movie.data.service.MovieRemoteService
import me.test.project.moviekmp.feature.movie.data.service.MovieRemoteServiceImpl
import org.koin.core.qualifier.named
import org.koin.dsl.module

val movieModule = module {
    single<MovieRemoteService> { MovieRemoteServiceImpl(httpClient = get()) }
    single<MovieRepository> { MovieRepositoryImpl(remoteService = get()) }

    factory<GetListMoviesUseCase> { GetListMoviesUseCaseImpl(get(), get(named(ioDispatcher))) }
    factory<GetListMoviesSearchUseCase> { GetListMoviesSearchUseCaseImpl(get(), get(named(ioDispatcher))) }
    factory<GetDetailMoviesUseCase> { GetDetailMoviesUseCaseImpl(get(), get(named(ioDispatcher))) }
}
