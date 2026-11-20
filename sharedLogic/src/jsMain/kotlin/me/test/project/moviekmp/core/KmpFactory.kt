package me.test.project.moviekmp.core

import me.test.project.moviekmp.feature.movie.application.usecase.GetDetailMoviesUseCase
import me.test.project.moviekmp.feature.movie.application.usecase.GetListMoviesSearchUseCase
import me.test.project.moviekmp.feature.movie.application.usecase.GetListMoviesUseCase
import org.koin.core.context.startKoin
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport

@OptIn(ExperimentalJsExport::class)
@JsExport
object KmpFactory {
    private val koinApp by lazy {
        startKoin { modules(sharedModule) }.koin
    }

    fun getKoin() = koinApp

    fun getListMoviesUseCase(): GetListMoviesUseCase = koinApp.get()
    fun getListMoviesSearchUseCase(): GetListMoviesSearchUseCase = koinApp.get()
    fun getDetailMoviesUseCase(): GetDetailMoviesUseCase = koinApp.get()
}
