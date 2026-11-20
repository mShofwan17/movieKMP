package me.test.project.moviekmp.core

import io.ktor.client.HttpClient
import me.test.project.moviekmp.core.httpClient.provideHttpClient
import org.koin.core.KoinApplication
import org.koin.core.context.startKoin
import org.koin.core.context.stopKoin
import kotlin.test.AfterTest
import kotlin.test.BeforeTest
import kotlin.test.Test
import kotlin.test.assertNotNull

class HttpClientTest {

    private lateinit var koinApp: KoinApplication

    @BeforeTest
    fun setUp() {
        koinApp = startKoin {
            modules(sharedModule)
        }
    }

    @AfterTest
    fun tearDown() {
        stopKoin()
    }

    @Test
    fun testProvideHttpClient() {
        val client = provideHttpClient(enableLogging = false)
        assertNotNull(client)
    }

    @Test
    fun testKoinModuleInjection() {
        val httpClient: HttpClient = koinApp.koin.get()
        assertNotNull(httpClient)
    }
}
