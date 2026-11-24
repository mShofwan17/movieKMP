import org.jetbrains.kotlin.gradle.dsl.JvmTarget
import co.touchlab.skie.configuration.FlowInterop
import co.touchlab.skie.configuration.SuspendInterop
import java.util.Properties

plugins {
    alias(libs.plugins.kotlinMultiplatform)
    alias(libs.plugins.androidMultiplatformLibrary)
    alias(libs.plugins.kotlinSerialization)
    alias(libs.plugins.skie)
}

kotlin {
    listOf(
        iosArm64(),
        iosSimulatorArm64()
    ).forEach { iosTarget ->
        iosTarget.binaries.framework {
            baseName = "SharedLogic"
            isStatic = true
        }
    }
    jvm()
    js {
        outputModuleName = "sharedLogic"
        browser()
        binaries.library()
        generateTypeScriptDefinitions()
        compilerOptions {
            target = "es2015"
            optIn.add("kotlin.js.ExperimentalJsExport")
        }
    }
    android {
       namespace = "me.test.project.moviekmp.sharedLogic"
       compileSdk = libs.versions.android.compileSdk.get().toInt()
       minSdk = libs.versions.android.minSdk.get().toInt()
       compilerOptions {
           jvmTarget = JvmTarget.JVM_11
       }
       androidResources {
           enable = true
       }
       withHostTest {
           isIncludeAndroidResources = true
       }
    }
    sourceSets {
        commonMain.dependencies {
            implementation(libs.ktor.client.core)
            implementation(libs.ktor.client.content.negotiation)
            implementation(libs.ktor.serialization.kotlinx.json)
            implementation(libs.ktor.client.logging)
            implementation(libs.kotlinx.serialization.json)
            implementation(libs.koin.core)
            implementation(libs.multiplatform.settings)
            implementation(libs.multiplatform.settings.no.arg)
            implementation(libs.multiplatform.settings.coroutines)
            implementation(project.dependencies.platform(libs.cryptography.bom))
            implementation(libs.cryptography.core)
        }
        commonTest.dependencies {
            implementation(libs.kotlin.test)
            implementation(libs.kotlinx.coroutines.test)
            implementation(libs.multiplatform.settings.test)
        }
        androidMain.dependencies {
            implementation(libs.ktor.client.okhttp)
            implementation(libs.cryptography.provider.jdk)
        }
        iosMain.dependencies {
            implementation(libs.ktor.client.darwin)
            implementation(libs.cryptography.provider.cryptokit)
            implementation(libs.cryptography.provider.apple)
        }
        jvmMain.dependencies {
            implementation(libs.ktor.client.java)
            implementation(libs.cryptography.provider.jdk)
        }
        jsMain.dependencies {
            implementation(libs.wrappers.browser)
            implementation(libs.ktor.client.js)
            implementation(libs.cryptography.provider.webcrypto)
        }
    }
}

skie {
    features {
        group {
            SuspendInterop.Enabled(true)
            FlowInterop.Enabled(true)
        }
    }
    analytics {
        disableUpload.set(true)
    }
}

val generateSecretConfigTask = tasks.register("generateSecretConfig") {
    val localPropertiesFile = rootProject.file("local.properties")
    val outputDir = file("src/commonMain/kotlin/me/test/project/moviekmp/core/config")

    inputs.file(localPropertiesFile).optional()
    outputs.dir(outputDir)

    doLast {
        val properties = Properties().apply {
            if (localPropertiesFile.exists()) {
                localPropertiesFile.inputStream().use { load(it) }
            }
        }

        val baseUrl = (properties.getProperty("BASE_URL") ?: System.getenv("BASE_URL")).orEmpty().ifBlank {
            error("Properti 'BASE_URL' tidak ditemukan di local.properties maupun Environment Variables!")
        }
        val apiKey = (properties.getProperty("MOVIE_API_KEY") ?: System.getenv("MOVIE_API_KEY")).orEmpty().ifBlank {
            error("Properti 'MOVIE_API_KEY' tidak ditemukan di local.properties maupun Environment Variables!")
        }
        val maskKey: Byte = 0x5A.toByte()

        fun String.toObfuscatedByteArrayString(): String {
            val bytes = this.toByteArray(Charsets.UTF_8)
            val obfuscated = bytes.map { (it.toInt() xor maskKey.toInt()).toByte() }
            return obfuscated.joinToString(prefix = "byteArrayOf(", postfix = ")") {
                "0x${it.toUByte().toString(16).padStart(2, '0').uppercase()}.toByte()"
            }
        }

        outputDir.mkdirs()
        val generatedFile = File(outputDir, "SecretConfig.kt")
        generatedFile.writeText(
            """
            package me.test.project.moviekmp.core.config

            internal object SecretConfig {
                private const val MASK_KEY: Byte = 0x5A.toByte()

                private val OBFUSCATED_BASE_URL = ${baseUrl.toObfuscatedByteArrayString()}
                private val OBFUSCATED_MOVIE_API_KEY = ${apiKey.toObfuscatedByteArrayString()}

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
            """.trimIndent()
        )
    }
}

tasks.withType<org.jetbrains.kotlin.gradle.tasks.KotlinCompilationTask<*>>().configureEach {
    dependsOn(generateSecretConfigTask)
}