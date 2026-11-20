import Observation
import SharedLogic

@Observable @MainActor
final class MovieListViewModel {
    var query = ""
    var selectedType = ""
    var isLoading = false
    var isPaging = false
    var currentPage: Int32 = 1
    var canPaginate = true
    var movies: [MovieItem] = []
    var errorMessage: String?

    private let getListMoviesUseCase: any GetListMoviesUseCase
    private let searchMoviesUseCase: any GetListMoviesSearchUseCase

    init(
        getListMoviesUseCase: any GetListMoviesUseCase,
        searchMoviesUseCase: any GetListMoviesSearchUseCase
    ) {
        self.getListMoviesUseCase = getListMoviesUseCase
        self.searchMoviesUseCase = searchMoviesUseCase
    }

    func search() async {
        let trimmed = query.trimmingCharacters(in: .whitespaces)
        isLoading = true
        errorMessage = nil
        currentPage = 1
        canPaginate = true
        defer { isLoading = false }

        let effectiveQuery = trimmed.isEmpty ? "movie" : trimmed
        do {
            movies = try await searchMoviesUseCase.invoke(query: effectiveQuery, type: selectedType.isEmpty ? nil : selectedType, page: 1, apiKey: "")
        } catch {
            errorMessage = error.localizedDescription
        }
    }

    func loadNextPage() async {
        let trimmed = query.trimmingCharacters(in: .whitespaces)
        guard !isLoading, !isPaging, canPaginate else { return }
        isPaging = true
        defer { isPaging = false }

        let effectiveQuery = trimmed.isEmpty ? "movie" : trimmed
        let nextPage = currentPage + 1
        do {
            let newMovies = try await searchMoviesUseCase.invoke(
                query: effectiveQuery,
                type: selectedType.isEmpty ? nil : selectedType,
                page: nextPage,
                apiKey: ""
            )
            if newMovies.isEmpty {
                canPaginate = false
            } else {
                currentPage = nextPage
                movies.append(contentsOf: newMovies)
            }
        } catch {
            canPaginate = false
        }
    }
}
