package me.test.project.moviekmp.core.network

import io.ktor.client.engine.HttpClientEngine
import io.ktor.client.engine.darwin.Darwin

internal actual fun providePlatformHttpClientEngine(): HttpClientEngine = Darwin.create()
