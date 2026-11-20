package me.test.project.moviekmp.core.network

import io.ktor.client.engine.HttpClientEngine

internal expect fun providePlatformHttpClientEngine(): HttpClientEngine
