# 🎬 Modul `sharedLogic` — Fitur Movie (Dokumentasi Perencanaan & Arsitektur)

Dokumen ini menjelaskan **perencanaan & spesifikasi implementasi** modul `sharedLogic` untuk fitur **Movie** (berbasis OMDb API): struktur file, DTO, remote service, repository, 3 Use Case, Koin DI, serta jembatan per platform (iOS Swift & Web JS).

- Blueprint arsitektur: [`docs/architecture/kmp-shared-architecture.md`](../../../architecture/kmp-shared-architecture.md)
- Dokumentasi acuan: [`docs/feature/shared/shared-kmp.md`](../shared-kmp.md)
- Spesifikasi OMDb API: [`docs/omdb-movie-api.md`](../../../omdb-movie-api.md)

> Package root: `me.test.project.moviekmp` · Fitur: `movie` · Framework iOS: `SharedLogic` · Package npm: `sharedLogic`

---

## 1. Ringkasan Layer

| Layer | Komponen & Teknologi |
|---|---|
| Target | `android`, `iosArm64`, `iosSimulatorArm64`, `jvm`, `js` (browser, `.d.ts`) |
| `application` (Domain) | Model Domain (`MovieItem`, `MovieDetail`), Interface Repository (`MovieRepository`), 3 Use Case |
| `data` (Data Source) | `MovieRemoteService` (Ktor Client), DTOs OMDb API (`@Serializable`), `MovieRepositoryImpl` |
| DI | Koin `4.0.0` — `movieModule` terdaftar di `sharedModule` (`core/AppModule.kt`) |
| Interop iOS | SKIE `0.10.16` (`suspend` → `async throws`, `@Throws(Throwable::class)`) |
| Interop Web | `@JsExport` Model & Use Case + `KmpFactory` (getter use case JS) |

---

## 2. Struktur File

```
sharedLogic/src/
├── commonMain/kotlin/me/test/project/moviekmp/
│   ├── core/
│   │   └── AppModule.kt                     # ioDispatcher, commonModule, cryptoModule, sharedModule
│   └── feature/movie/
│       ├── MovieSharedModule.kt              # val movieModule = module { ... }
│       ├── application/
│       │   ├── MovieRepository.kt            # interface domain
│       │   ├── model/
│       │   │   ├── MovieItem.kt             # @JsExport data class
│       │   │   └── MovieDetail.kt            # @JsExport data class
│       │   └── usecase/                     # 1 file = 1 fun interface + internal Impl
│       │       ├── GetListMoviesUseCase.kt
│       │       ├── GetListMoviesSearchUseCase.kt
│       │       └── GetDetailMoviesUseCase.kt
│       └── data/
│           ├── MovieRepositoryImpl.kt
│           ├── service/
│           │   └── MovieRemoteService.kt    # interface + Impl (Ktor Client)
│           └── dto/
│               ├── OmdbSearchItemDto.kt     # @Serializable + toModel()
│               ├── OmdbSearchResponseDto.kt # @Serializable
│               ├── OmdbRatingDto.kt         # @Serializable
│               └── OmdbMovieDetailDto.kt    # @Serializable + toModel()
├── commonTest/kotlin/me/test/project/moviekmp/feature/movie/
│   └── MovieUseCaseTest.kt                  # unit test use case & repository
├── iosMain/kotlin/me/test/project/moviekmp/core/
│   └── KoinIos.kt                           # + getListMoviesUseCase, getListMoviesSearchUseCase, getDetailMoviesUseCase
└── jsMain/kotlin/me/test/project/moviekmp/core/
    └── KmpFactory.kt                        # + getGetListMoviesUseCase(), ...
```

---

## 3. Model Domain (`feature/movie/application/model`)

Model domain murni tanpa anotasi serialisasi backend. `@JsExport` diberikan agar tipe data dapat digunakan langsung di TypeScript / Web.

```kotlin
package me.test.project.moviekmp.feature.movie.application.model

import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport

@OptIn(ExperimentalJsExport::class)
@JsExport
data class MovieItem(
    val imdbId: String,
    val title: String,
    val year: String,
    val type: String,
    val poster: String,
)

@OptIn(ExperimentalJsExport::class)
@JsExport
data class MovieRating(
    val source: String,
    val value: String,
)

@OptIn(ExperimentalJsExport::class)
@JsExport
data class MovieDetail(
    val imdbId: String,
    val title: String,
    val year: String,
    val rated: String,
    val released: String,
    val runtime: String,
    val genre: String,
    val director: String,
    val writer: String,
    val actors: String,
    val plot: String,
    val language: String,
    val country: String,
    val awards: String,
    val poster: String,
    val ratings: List<MovieRating>,
    val metascore: String,
    val imdbRating: String,
    val imdbVotes: String,
    val type: String,
    val boxOffice: String,
)
```

---

## 4. DTO & Remote Service (`feature/movie/data`)

### 4.1 DTO (Data Transfer Object)

DTO memetakan respon JSON dari OMDb API dan menyediakan fungsi ekstensi `toModel()` untuk konversi ke Model Domain.

```kotlin
package me.test.project.moviekmp.feature.movie.data.dto

import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable
import me.test.project.moviekmp.feature.movie.application.model.MovieDetail
import me.test.project.moviekmp.feature.movie.application.model.MovieItem
import me.test.project.moviekmp.feature.movie.application.model.MovieRating

@Serializable
data class OmdbSearchItemDto(
    @SerialName("Title") val title: String? = null,
    @SerialName("Year") val year: String? = null,
    @SerialName("imdbID") val imdbId: String? = null,
    @SerialName("Type") val type: String? = null,
    @SerialName("Poster") val poster: String? = null,
) {
    fun toModel(): MovieItem = MovieItem(
        imdbId = imdbId.orEmpty(),
        title = title ?: "Tanpa Judul",
        year = year ?: "-",
        type = type ?: "movie",
        poster = if (poster.orEmpty() != "N/A") poster.orEmpty() else "",
    )
}

@Serializable
data class OmdbSearchResponseDto(
    @SerialName("Search") val search: List<OmdbSearchItemDto>? = null,
    @SerialName("totalResults") val totalResults: String? = null,
    @SerialName("Response") val response: String? = null,
    @SerialName("Error") val error: String? = null,
)

@Serializable
data class OmdbRatingDto(
    @SerialName("Source") val source: String? = null,
    @SerialName("Value") val value: String? = null,
) {
    fun toModel(): MovieRating = MovieRating(
        source = source ?: "-",
        value = value ?: "-"
    )
}

@Serializable
data class OmdbMovieDetailDto(
    @SerialName("Title") val title: String? = null,
    @SerialName("Year") val year: String? = null,
    @SerialName("Rated") val rated: String? = null,
    @SerialName("Released") val released: String? = null,
    @SerialName("Runtime") val runtime: String? = null,
    @SerialName("Genre") val genre: String? = null,
    @SerialName("Director") val director: String? = null,
    @SerialName("Writer") val writer: String? = null,
    @SerialName("Actors") val actors: String? = null,
    @SerialName("Plot") val plot: String? = null,
    @SerialName("Language") val language: String? = null,
    @SerialName("Country") val country: String? = null,
    @SerialName("Awards") val awards: String? = null,
    @SerialName("Poster") val poster: String? = null,
    @SerialName("Ratings") val ratings: List<OmdbRatingDto>? = null,
    @SerialName("Metascore") val metascore: String? = null,
    @SerialName("imdbRating") val imdbRating: String? = null,
    @SerialName("imdbVotes") val imdbVotes: String? = null,
    @SerialName("imdbID") val imdbId: String? = null,
    @SerialName("Type") val type: String? = null,
    @SerialName("BoxOffice") val boxOffice: String? = null,
    @SerialName("Response") val response: String? = null,
    @SerialName("Error") val error: String? = null,
) {
    fun toModel(): MovieDetail = MovieDetail(
        imdbId = imdbId.orEmpty(),
        title = title ?: "Tanpa Judul",
        year = year ?: "-",
        rated = rated ?: "N/A",
        released = released ?: "-",
        runtime = runtime ?: "-",
        genre = genre ?: "-",
        director = director ?: "-",
        writer = writer ?: "-",
        actors = actors ?: "-",
        plot = plot ?: "-",
        language = language ?: "-",
        country = country ?: "-",
        awards = awards ?: "-",
        poster = if (poster.orEmpty() != "N/A") poster.orEmpty() else "",
        ratings = ratings?.map { it.toModel() } ?: emptyList(),
        metascore = metascore ?: "N/A",
        imdbRating = imdbRating ?: "N/A",
        imdbVotes = imdbVotes ?: "0",
        type = type ?: "movie",
        boxOffice = boxOffice ?: "N/A",
    )
}
```

### 4.2 Remote Service (`MovieRemoteService`)

Interface & implementasi layanan API Ktor Client:

```kotlin
package me.test.project.moviekmp.feature.movie.data.service

import io.ktor.client.HttpClient
import io.ktor.client.request.get
import io.ktor.client.request.parameter
import me.test.project.moviekmp.core.httpClient.bodyOrError
import me.test.project.moviekmp.feature.movie.data.dto.OmdbMovieDetailDto
import me.test.project.moviekmp.feature.movie.data.dto.OmdbSearchResponseDto

interface MovieRemoteService {
    suspend fun searchMovies(
        query: String,
        type: String? = null,
        page: Int = 1,
        apiKey: String
    ): OmdbSearchResponseDto

    suspend fun getMovieDetail(
        imdbId: String,
        plot: String = "full",
        apiKey: String
    ): OmdbMovieDetailDto
}

class MovieRemoteServiceImpl(
    private val httpClient: HttpClient
) : MovieRemoteService {

    override suspend fun searchMovies(
        query: String,
        type: String?,
        page: Int,
        apiKey: String
    ): OmdbSearchResponseDto = httpClient.get("") {
        parameter("apikey", apiKey)
        parameter("s", query)
        if (!type.isNull poeticOrBlank()) parameter("type", type)
        parameter("page", page)
    }.bodyOrError()

    override suspend fun getMovieDetail(
        imdbId: String,
        plot: String,
        apiKey: String
    ): OmdbMovieDetailDto = httpClient.get("") {
        parameter("apikey", apiKey)
        parameter("i", imdbId)
        parameter("plot", plot)
    }.bodyOrError()
}

private fun String?.isNullOrBlank(): Boolean = this == null || this.trim().isEmpty()
```

---

## 5. Repository (`feature/movie/application/MovieRepository.kt`)

### 5.1 Interface Domain
```kotlin
package me.test.project.moviekmp.feature.movie.application

import me.test.project.moviekmp.feature.movie.application.model.MovieDetail
import me.test.project.moviekmp.feature.movie.application.model.MovieItem

interface MovieRepository {
    suspend fun getListMovies(apiKey: String): List<MovieItem>
    suspend fun getListMoviesSearch(query: String, type: String? = null, page: Int = 1, apiKey: String): List<MovieItem>
    suspend fun getDetailMovies(imdbId: String, apiKey: String): MovieDetail
}
```

### 5.2 Implementasi Repository
```kotlin
package me.test.project.moviekmp.feature.movie.data

import me.test.project.moviekmp.core.httpClient.models.ApiException
import me.test.project.moviekmp.feature.movie.application.MovieRepository
import me.test.project.moviekmp.feature.movie.application.model.MovieDetail
import me.test.project.moviekmp.feature.movie.application.model.MovieItem
import me.test.project.moviekmp.feature.movie.data.service.MovieRemoteService

class MovieRepositoryImpl(
    private val remoteService: MovieRemoteService
) : MovieRepository {

    override suspend fun getListMovies(apiKey: String): List<MovieItem> {
        return getListMoviesSearch(query = "movie", type = null, page = 1, apiKey = apiKey)
    }

    override suspend fun getListMoviesSearch(
        query: String,
        type: String?,
        page: Int,
        apiKey: String
    ): List<MovieItem> {
        val response = remoteService.searchMovies(query = query, type = type, page = page, apiKey = apiKey)
        if (response.response == "False") {
            throw ApiException(response.error ?: "Film tidak ditemukan")
        }
        return response.search?.map { it.toModel() } ?: emptyList()
    }

    override suspend fun getDetailMovies(imdbId: String, apiKey: String): MovieDetail {
        val response = remoteService.getMovieDetail(imdbId = imdbId, apiKey = apiKey)
        if (response.response == "False") {
            throw ApiException(response.error ?: "Detail film tidak ditemukan")
        }
        return response.toModel()
    }
}
```

---

## 6. Use Cases (`feature/movie/application/usecase`)

Tiga Use Case utama didefinisikan sebagai `fun interface` publik dengan anotasi `@Throws(Throwable::class)` untuk kompatibilitas Swift/SKIE.

### 6.1 `GetListMoviesUseCase`
Mengambil daftar film default (query `"movie"`).

```kotlin
package me.test.project.moviekmp.feature.movie.application.usecase

import kotlinx.coroutines.CoroutineDispatcher
import kotlinx.coroutines.withContext
import me.test.project.moviekmp.feature.movie.application.MovieRepository
import me.test.project.moviekmp.feature.movie.application.model.MovieItem
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport

@OptIn(ExperimentalJsExport::class)
@JsExport
fun interface GetListMoviesUseCase {
    @Throws(Throwable::class)
    suspend operator fun invoke(apiKey: String): List<MovieItem>
}

internal class GetListMoviesUseCaseImpl(
    private val repository: MovieRepository,
    private val dispatcher: CoroutineDispatcher
) : GetListMoviesUseCase {
    @Throws(Throwable::class)
    override suspend fun invoke(apiKey: String): List<MovieItem> = withContext(dispatcher) {
        repository.getListMovies(apiKey)
    }
}
```

### 6.2 `GetListMoviesSearchUseCase`
Melakukan pencarian film berdasarkan kata kunci `query`, `type`, dan `page`.

```kotlin
package me.test.project.moviekmp.feature.movie.application.usecase

import kotlinx.coroutines.CoroutineDispatcher
import kotlinx.coroutines.withContext
import me.test.project.moviekmp.feature.movie.application.MovieRepository
import me.test.project.moviekmp.feature.movie.application.model.MovieItem
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport

@OptIn(ExperimentalJsExport::class)
@JsExport
fun interface GetListMoviesSearchUseCase {
    @Throws(Throwable::class)
    suspend operator fun invoke(query: String, type: String? = null, page: Int = 1, apiKey: String): List<MovieItem>
}

internal class GetListMoviesSearchUseCaseImpl(
    private val repository: MovieRepository,
    private val dispatcher: CoroutineDispatcher
) : GetListMoviesSearchUseCase {
    @Throws(Throwable::class)
    override suspend fun invoke(
        query: String,
        type: String?,
        page: Int,
        apiKey: String
    ): List<MovieItem> = withContext(dispatcher) {
        repository.getListMoviesSearch(query = query, type = type, page = page, apiKey = apiKey)
    }
}
```

### 6.3 `GetDetailMoviesUseCase`
Mengambil detail film berdasarkan `imdbId`.

```kotlin
package me.test.project.moviekmp.feature.movie.application.usecase

import kotlinx.coroutines.CoroutineDispatcher
import kotlinx.coroutines.withContext
import me.test.project.moviekmp.feature.movie.application.MovieRepository
import me.test.project.moviekmp.feature.movie.application.model.MovieDetail
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport

@OptIn(ExperimentalJsExport::class)
@JsExport
fun interface GetDetailMoviesUseCase {
    @Throws(Throwable::class)
    suspend operator fun invoke(imdbId: String, apiKey: String): MovieDetail
}

internal class GetDetailMoviesUseCaseImpl(
    private val repository: MovieRepository,
    private val dispatcher: CoroutineDispatcher
) : GetDetailMoviesUseCase {
    @Throws(Throwable::class)
    override suspend fun invoke(imdbId: String, apiKey: String): MovieDetail = withContext(dispatcher) {
        repository.getDetailMovies(imdbId = imdbId, apiKey = apiKey)
    }
}
```

---

## 7. Dependency Injection (Koin)

### 7.1 Module Fitur (`feature/movie/MovieSharedModule.kt`)

```kotlin
package me.test.project.moviekmp.feature.movie

import me.test.project.moviekmp.core.ioDispatcher
import me.test.project.moviekmp.feature.movie.application.MovieRepository
import me.test.project.moviekmp.feature.movie.application.usecase.*
import me.test.project.moviekmp.feature.movie.data.MovieRepositoryImpl
import me.test.project.moviekmp.feature.movie.data.service.MovieRemoteService
import me.test.project.moviekmp.feature.movie.data.service.MovieRemoteServiceImpl
import org.koin.core.qualifier.named
import org.koin.dsl.module

val movieModule = module {
    single<MovieRemoteService> { MovieRemoteServiceImpl(httpClient = get()) }
    single<MovieRepository> { MovieRepositoryImpl(remoteService = get()) }

    factory<GetListMoviesUseCase> { GetListMoviesUseCaseImpl(get(), get(named(ioDispatcher))) }
    factory<GetListMoviesSearchUseCase> { GetListMoviesSearchUseCaseImpl(get(), get(named(ioDispatcher))) }
    factory<GetDetailMoviesUseCase> { GetDetailMoviesUseCaseImpl(get(), get(named(ioDispatcher))) }
}
```

### 7.2 Registrasi Root Module (`core/AppModule.kt`)

```kotlin
val sharedModule: List<Module> = listOf(
    commonModule,
    cryptoModule,
    movieModule
)
```

---

## 8. Jembatan Platform Native (iOS & Web)

### 8.1 iOS Bridge (`iosMain/.../core/KoinIos.kt`)

```kotlin
class KoinDependencies : KoinComponent {
    val getListMoviesUseCase: GetListMoviesUseCase by inject()
    val getListMoviesSearchUseCase: GetListMoviesSearchUseCase by inject()
    val getDetailMoviesUseCase: GetDetailMoviesUseCase by inject()
}
```

### 8.2 Web / JS Adapter (`jsMain/.../core/KmpFactory.kt`)

```kotlin
@OptIn(ExperimentalJsExport::class)
@JsExport
object KmpFactory {
    private val koinApp by lazy { startKoin { modules(sharedModule) }.koin }

    fun getGetListMoviesUseCase(): GetListMoviesUseCase = koinApp.get()
    fun getGetListMoviesSearchUseCase(): GetListMoviesSearchUseCase = koinApp.get()
    fun getGetDetailMoviesUseCase(): GetDetailMoviesUseCase = koinApp.get()
}
```

---

## 9. Testing & Verifikasi

Unit test di `commonTest` menguji repository dan usecase dengan mock `MovieRemoteService`:

```kotlin
class MovieUseCaseTest {
    // Pengujian GetListMoviesUseCase, GetListMoviesSearchUseCase, dan GetDetailMoviesUseCase
}
```
