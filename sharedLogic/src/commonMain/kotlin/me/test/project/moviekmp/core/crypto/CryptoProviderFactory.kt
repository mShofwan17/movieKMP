package me.test.project.moviekmp.core.crypto

import dev.whyoleg.cryptography.CryptographyProvider

internal object CryptoProviderFactory {
    fun create(): CryptographyProvider = CryptographyProvider.Default
}
