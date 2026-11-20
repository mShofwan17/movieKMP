package me.test.project.moviekmp.core

import com.russhwolf.settings.MapSettings
import com.russhwolf.settings.set
import me.test.project.moviekmp.core.storage.StorageKeys
import kotlin.test.Test
import kotlin.test.assertEquals

class StorageTest {

    @Test
    fun testStoragePersistence() {
        val settings = MapSettings()
        settings[StorageKeys.KEY_USER_NAME] = "Alex"
        val savedName = settings.getStringOrNull(StorageKeys.KEY_USER_NAME)
        assertEquals("Alex", savedName)
    }
}
