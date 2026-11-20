package me.test.project.moviekmp.core

import me.test.project.moviekmp.feature.movie.application.usecase.GetDetailMoviesUseCase
import me.test.project.moviekmp.feature.movie.application.usecase.GetListMoviesSearchUseCase
import me.test.project.moviekmp.feature.movie.application.usecase.GetListMoviesUseCase
import org.koin.core.component.KoinComponent
import org.koin.core.component.inject
import org.koin.core.context.startKoin

fun doInitKoinIos() {
    startKoin { modules(sharedModule) }
}

class KoinDependencies : KoinComponent {
    val getListMoviesUseCase: GetListMoviesUseCase by inject()
    val getListMoviesSearchUseCase: GetListMoviesSearchUseCase by inject()
    val getDetailMoviesUseCase: GetDetailMoviesUseCase by inject()
}
