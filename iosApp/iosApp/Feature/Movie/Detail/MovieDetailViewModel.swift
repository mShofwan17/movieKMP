import Observation
import SharedLogic

@Observable @MainActor
final class MovieDetailViewModel {
    var movie: MovieDetail?
    var isLoading = true
    var errorMessage: String?

    private let imdbId: String
    private let getMovieDetailUseCase: any GetDetailMoviesUseCase

    init(imdbId: String, getMovieDetailUseCase: any GetDetailMoviesUseCase) {
        self.imdbId = imdbId
        self.getMovieDetailUseCase = getMovieDetailUseCase
    }

    func loadDetail() async {
        isLoading = true
        errorMessage = nil
        defer { isLoading = false }

        do {
            // SKIE: suspend fun -> async throws
            movie = try await getMovieDetailUseCase.invoke(imdbId: imdbId, apiKey: "")
        } catch {
            errorMessage = error.localizedDescription
        }
    }
}
