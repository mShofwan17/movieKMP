package me.test.project.moviekmp.core.httpClient

import io.ktor.client.HttpClient
import io.ktor.client.engine.HttpClientEngine
import io.ktor.client.plugins.HttpTimeout
import io.ktor.client.plugins.contentnegotiation.ContentNegotiation
import io.ktor.client.plugins.defaultRequest
import io.ktor.client.plugins.logging.LogLevel
import io.ktor.client.plugins.logging.Logger
import io.ktor.client.plugins.logging.Logging
import io.ktor.client.plugins.logging.SIMPLE
import io.ktor.http.ContentType
import io.ktor.http.HttpHeaders
import io.ktor.http.contentType
import io.ktor.serialization.kotlinx.json.json
import kotlinx.serialization.json.Json
import me.test.project.moviekmp.core.network.providePlatformHttpClientEngine

@PublishedApi
internal val jsonParser = Json {
    ignoreUnknownKeys = true
    isLenient = true
    explicitNulls = false
}

fun provideHttpClient(
    engine: HttpClientEngine = providePlatformHttpClientEngine(),
    enableLogging: Boolean = true,
): HttpClient = HttpClient(engine) {
    install(ContentNegotiation) {
        json(jsonParser)
    }

    install(HttpTimeout) {
        requestTimeoutMillis = 30_000
        connectTimeoutMillis = 15_000
        socketTimeoutMillis = 30_000
    }

    if (enableLogging) {
        install(Logging) {
            logger = Logger.SIMPLE
            level = LogLevel.ALL
            sanitizeHeader { it == HttpHeaders.Authorization }
        }
    }

    defaultRequest {
        url(BASE_URL)
        contentType(ContentType.Application.Json)
    }
}
