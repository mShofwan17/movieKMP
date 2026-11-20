package me.test.project.moviekmp.core.httpClient

import io.ktor.client.call.body
import io.ktor.client.statement.HttpResponse
import io.ktor.client.statement.bodyAsText
import io.ktor.http.isSuccess
import me.test.project.moviekmp.core.httpClient.models.ApiException
import me.test.project.moviekmp.core.httpClient.models.ErrorResponse

suspend inline fun <reified T> HttpResponse.bodyOrError(): T {
    if (status.isSuccess()) return body()
    val message = try {
        jsonParser.decodeFromString<ErrorResponse>(bodyAsText()).detail
    } catch (_: Exception) {
        null
    }
    throw ApiException(message ?: "Terjadi kesalahan")
}
