package me.test.project.moviekmp.core.config

internal object SecretConfig {
    private const val MASK_KEY: Byte = 0x5A.toByte()

    private val OBFUSCATED_BASE_URL = byteArrayOf(0x32.toByte(), 0x2E.toByte(), 0x2E.toByte(), 0x2A.toByte(), 0x29.toByte(), 0x60.toByte(), 0x75.toByte(), 0x75.toByte(), 0x2D.toByte(), 0x2D.toByte(), 0x2D.toByte(), 0x74.toByte(), 0x35.toByte(), 0x37.toByte(), 0x3E.toByte(), 0x38.toByte(), 0x3B.toByte(), 0x2A.toByte(), 0x33.toByte(), 0x74.toByte(), 0x39.toByte(), 0x35.toByte(), 0x37.toByte(), 0x75.toByte())
    private val OBFUSCATED_MOVIE_API_KEY = byteArrayOf(0x6E.toByte(), 0x62.toByte(), 0x3F.toByte(), 0x63.toByte(), 0x3B.toByte(), 0x6F.toByte(), 0x6F.toByte(), 0x6D.toByte())

    private fun deobfuscate(obfuscated: ByteArray, key: Byte): String {
        val decoded = ByteArray(obfuscated.size) { index ->
            (obfuscated[index].toInt() xor key.toInt()).toByte()
        }
        return decoded.decodeToString()
    }

    val baseUrl: String
        get() = deobfuscate(OBFUSCATED_BASE_URL, MASK_KEY)

    val movieApiKey: String
        get() = deobfuscate(OBFUSCATED_MOVIE_API_KEY, MASK_KEY)
}