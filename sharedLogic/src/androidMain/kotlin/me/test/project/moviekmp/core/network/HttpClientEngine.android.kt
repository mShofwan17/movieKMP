package me.test.project.moviekmp.core.network

import io.ktor.client.engine.HttpClientEngine
import io.ktor.client.engine.okhttp.OkHttp

internal actual fun providePlatformHttpClientEngine(): HttpClientEngine = OkHttp.create()
