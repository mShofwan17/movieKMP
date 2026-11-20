package me.test.project.moviekmp.core.network

import io.ktor.client.engine.HttpClientEngine
import io.ktor.client.engine.js.Js

internal actual fun providePlatformHttpClientEngine(): HttpClientEngine = Js.create()
