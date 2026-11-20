package me.test.project.moviekmp

interface Platform {
    val name: String
}

expect fun getPlatform(): Platform