# 🎬 Dokumentasi OMDb API (Open Movie Database)

Dokumen ini menyediakan spesifikasi lengkap penggunaan **OMDb API (Open Movie Database)** sebagai referensi integrasi data film, serial TV, dan episode pada proyek **MovieKMP**.

---

## 1. Gambaran Umum & Autentikasi

OMDb API adalah RESTful web service yang menyediakan informasi metadata film dan acara TV.

- **Base URL (HTTPS):** `https://www.omdbapi.com/`
- **Base URL (HTTP):** `http://www.omdbapi.com/`
- **Poster API (Patrons):** `https://img.omdbapi.com/`

### Autentikasi API Key
Semua endpoint memerlukan query parameter `apikey`:
```
https://www.omdbapi.com/?apikey=[YOUR_API_KEY]&...
```

---

## 2. Format Respon

Secara default, API mengembalikan data berformat **JSON**.
- **JSON:** Default, atau dapat ditentukan dengan `r=json`.
- **XML:** Dapat ditentukan dengan `r=xml`.
- **JSONP:** Mendukung parameter `callback=[FUNCTION_NAME]`.

---

## 3. Endpoint & Parameter

OMDb API memiliki dua mode utama pencarian:
1. **Search API (`s`)**: Mengembalikan daftar ringkas film/serial (dengan paging).
2. **Detail Lookup (`i` / `t`)**: Mengembalikan informasi detail untuk 1 judul atau IMDb ID.

---

### A. Pencarian Daftar Film / Serial (`s`)

Gunakan parameter `s` untuk melakukan pencarian berdasarkan kata kunci judul.

#### Parameter Request

| Parameter | Wajib | Pilihan Nilai | Default | Deskripsi |
| :--- | :---: | :--- | :---: | :--- |
| `s` | **Ya** | Teks bebas | - | Kata kunci judul film/serial yang dicari. |
| `type` | Tidak | `movie`, `series`, `episode` | - | Filter tipe hasil pencarian. |
| `y` | Tidak | Tahun (mis. `2023`) | - | Filter tahun rilis. |
| `r` | Tidak | `json`, `xml` | `json` | Format respons. |
| `page` | Tidak | `1` - `100` | `1` | Nomor halaman (setiap halaman mengembalikan 10 item). |

#### Contoh Request
```http
GET https://www.omdbapi.com/?apikey=YOUR_KEY&s=Batman&page=1&type=movie
```

#### Contoh Respon JSON (Sukses)
```json
{
  "Search": [
    {
      "Title": "Batman Begins",
      "Year": "2005",
      "imdbID": "tt0372784",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjA2N2Ut...jpg"
    },
    {
      "Title": "The Dark Knight",
      "Year": "2008",
      "imdbID": "tt0468569",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg"
    }
  ],
  "totalResults": "150",
  "Response": "True"
}
```

---

### B. Detail Film / Serial / Episode (`i` atau `t`)

Mengambil detail lengkap berdasarkan **IMDb ID (`i`)** atau **Judul Tepat (`t`)**.

> ⚠️ Salah satu dari `i` atau `t` wajib diisi.

#### Parameter Request

| Parameter | Wajib | Pilihan Nilai | Default | Deskripsi |
| :--- | :---: | :--- | :---: | :--- |
| `i` | Opsional* | IMDb ID (mis. `tt0468569`) | - | Identifikasi unik IMDb (mendukung 7-8 digit). |
| `t` | Opsional* | Teks judul | - | Judul film/serial yang ingin dicari detailnya. |
| `type` | Tidak | `movie`, `series`, `episode` | - | Filter tipe. |
| `y` | Tidak | Tahun (mis. `2008`) | - | Tahun rilis. |
| `plot` | Tidak | `short`, `full` | `short` | Panjang sinopsis (`short` ringkas, `full` lengkap). |
| `r` | Tidak | `json`, `xml` | `json` | Format respons. |

#### Contoh Request
```http
GET https://www.omdbapi.com/?apikey=YOUR_KEY&i=tt0468569&plot=full
```

#### Contoh Respon JSON Detail
```json
{
  "Title": "The Dark Knight",
  "Year": "2008",
  "Rated": "PG-13",
  "Released": "18 Jul 2008",
  "Runtime": "152 min",
  "Genre": "Action, Crime, Drama",
  "Director": "Christopher Nolan",
  "Writer": "Jonathan Nolan, Christopher Nolan, Bob Kane",
  "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart",
  "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
  "Language": "English, Mandarin",
  "Country": "United States, United Kingdom",
  "Awards": "Won 2 Oscars. 163 wins & 164 nominations total",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
  "Ratings": [
    { "Source": "Internet Movie Database", "Value": "9.0/10" },
    { "Source": "Rotten Tomatoes", "Value": "94%" },
    { "Source": "Metacritic", "Value": "84/100" }
  ],
  "Metascore": "84",
  "imdbRating": "9.0",
  "imdbVotes": "2,900,000",
  "imdbID": "tt0468569",
  "Type": "movie",
  "DVD": "09 Dec 2008",
  "BoxOffice": "$534,987,076",
  "Production": "N/A",
  "Website": "N/A",
  "Response": "True"
}
```

---

### C. Detail Season & Episode Serial TV

Untuk serial TV, OMDb API memungkinkan pencarian per Musim (Season) atau Episode spesifik.

#### Parameter Request

| Parameter | Wajib | Pilihan Nilai | Deskripsi |
| :--- | :---: | :--- | :--- |
| `i` / `t` | **Ya** | IMDb ID atau Judul Serial | Identifikasi serial TV. |
| `Season` | **Ya** | Angka (mis. `1`) | Nomor musim yang ingin dilihat daftarnya. |
| `Episode` | Tidak | Angka (mis. `1`) | Nomor episode spesifik (wajib menyertakan `Season`). |

#### Contoh Request (Daftar Episode per Season)
```http
GET https://www.omdbapi.com/?apikey=YOUR_KEY&t=Game of Thrones&Season=1
```

#### Contoh Respon JSON Season
```json
{
  "Title": "Game of Thrones",
  "Season": "1",
  "totalSeasons": "8",
  "Episodes": [
    {
      "Title": "Winter Is Coming",
      "Released": "2011-04-17",
      "Episode": "1",
      "imdbRating": "8.9",
      "imdbID": "tt1480055"
    },
    {
      "Title": "The Kingsroad",
      "Released": "2011-04-24",
      "Episode": "2",
      "imdbRating": "8.7",
      "imdbID": "tt1668700"
    }
  ],
  "Response": "True"
}
```

---

## 4. Poster API

Untuk mengakses gambar poster resolusi tinggi (hingga 2000x3000):
```http
GET https://img.omdbapi.com/?apikey=[YOUR_KEY]&i=tt0468569
```

> ℹ️ Akses Poster API memerlukan keanggotaan Patron OMDb API. Untuk pengujian umum, URL pada atribut `"Poster"` pada respon JSON utama sudah dapat digunakan langsung.

---

## 5. Penanganan Error (Error Responses)

Jika terjadi kesalahan (misalnya API key salah atau film tidak ditemukan), OMDb API mengembalikan JSON dengan `"Response": "False"` dan pesan `"Error"`.

#### Contoh Respon Error: Film Tidak Ditemukan
```json
{
  "Response": "False",
  "Error": "Movie not found!"
}
```

#### Contoh Respon Error: API Key Tidak Valid / Belum Aktif
```json
{
  "Response": "False",
  "Error": "Invalid API key!"
}
```

---

## 6. Contoh Pemetaan DTO Kotlin Multiplatform (`sharedLogic`)

Berikut contoh DTO Kotlin dengan `kotlinx.serialization` yang disesuaikan dengan struktur respon OMDb API:

```kotlin
package me.test.project.moviekmp.feature.movie.data.dto

import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

@Serializable
data class OmdbSearchItemDto(
    @SerialName("Title") val title: String? = null,
    @SerialName("Year") val year: String? = null,
    @SerialName("imdbID") val imdbId: String? = null,
    @SerialName("Type") val type: String? = null,
    @SerialName("Poster") val poster: String? = null,
)

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
)

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
)
```
