import SharedLogic

@MainActor
final class AppContainer {
    private let deps = KoinDependencies()

    func makeMovieListViewModel() -> MovieListViewModel {
        MovieListViewModel(
            getListMoviesUseCase: deps.getListMoviesUseCase,
            searchMoviesUseCase: deps.getListMoviesSearchUseCase
        )
    }

    func makeMovieDetailViewModel(imdbId: String) -> MovieDetailViewModel {
        MovieDetailViewModel(imdbId: imdbId, getMovieDetailUseCase: deps.getDetailMoviesUseCase)
    }
}
