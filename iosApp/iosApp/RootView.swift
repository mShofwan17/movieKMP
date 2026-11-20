import SwiftUI

enum MovieRoute: Hashable {
    case detail(imdbId: String)
}

struct RootView: View {
    let container: AppContainer

    @State private var path: [MovieRoute] = []

    var body: some View {
        NavigationStack(path: $path) {
            MovieListView(
                vm: container.makeMovieListViewModel(),
                onMovieSelected: { imdbId in
                    path.append(.detail(imdbId: imdbId))
                }
            )
            .navigationDestination(for: MovieRoute.self) { route in
                switch route {
                case .detail(let imdbId):
                    MovieDetailView(vm: container.makeMovieDetailViewModel(imdbId: imdbId))
                }
            }
        }
    }
}
