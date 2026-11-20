package me.test.project.moviekmp.core

import dev.whyoleg.cryptography.algorithms.SHA256
import me.test.project.moviekmp.core.crypto.CryptoProviderFactory
import kotlinx.coroutines.test.runTest
import kotlin.test.Test
import kotlin.test.assertEquals

class CryptoProviderTest {

    @Test
    fun testCryptoProviderSha256() = runTest {
        val provider = CryptoProviderFactory.create()
        val hasher = provider.get(SHA256).hasher()
        val digest = hasher.hash("hello".encodeToByteArray())
        assertEquals(32, digest.size)
    }
}
