package me.test.project.moviekmp.core.network

import io.ktor.client.engine.HttpClientEngine
import io.ktor.client.engine.java.Java

internal actual fun providePlatformHttpClientEngine(): HttpClientEngine = Java.create()
