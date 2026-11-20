package me.test.project.moviekmp.core.crypto

import dev.whyoleg.cryptography.CryptographyProvider
import org.koin.dsl.module

val cryptoModule = module {
    single<CryptographyProvider> { CryptoProviderFactory.create() }
}
