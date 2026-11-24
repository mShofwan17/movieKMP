package me.test.project.moviekmp.core.httpClient

import me.test.project.moviekmp.core.config.SecretConfig

internal actual val BASE_URL: String = SecretConfig.baseUrl.let { if (it.endsWith("/")) it else "$it/" }
