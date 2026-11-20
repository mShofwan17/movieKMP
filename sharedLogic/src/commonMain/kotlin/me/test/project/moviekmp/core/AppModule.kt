package me.test.project.moviekmp.core

import com.russhwolf.settings.Settings
import io.ktor.client.HttpClient
import kotlinx.coroutines.CoroutineDispatcher
import kotlinx.coroutines.Dispatchers
import me.test.project.moviekmp.core.crypto.cryptoModule
import me.test.project.moviekmp.core.httpClient.provideHttpClient
import me.test.project.moviekmp.feature.movie.movieModule
import org.koin.core.module.Module
import org.koin.core.qualifier.named
import org.koin.dsl.module

const val ioDispatcher = "ioDispatcher"

val commonModule = module {
    single<CoroutineDispatcher>(named(ioDispatcher)) { Dispatchers.Default }
    single<HttpClient> { provideHttpClient() }
    single<Settings> { Settings() }
}

val sharedModule: List<Module> = listOf(
    commonModule,
    cryptoModule,
    movieModule
)
