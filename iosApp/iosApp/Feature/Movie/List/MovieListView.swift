import SwiftUI
import SharedLogic

struct MovieListView: View {
    @Bindable var vm: MovieListViewModel
    let onMovieSelected: (String) -> Void

    private let columns = [GridItem(.adaptive(minimum: 150), spacing: 16)]

    var body: some View {
        ScrollView {
            if vm.isLoading {
                ProgressView("Memuat film...")
                    .padding(.top, 40)
            } else if let error = vm.errorMessage {
                VStack(spacing: 12) {
                    Text(error).foregroundStyle(.red)
                    Button("Coba Lagi") { Task { await vm.search() } }
                }
                .padding(.top, 40)
            } else if vm.movies.isEmpty {
                Text("Film tidak ditemukan")
                    .foregroundStyle(.secondary)
                    .padding(.top, 40)
            } else {
                LazyVGrid(columns: columns, spacing: 16) {
                    ForEach(vm.movies, id: \.imdbId) { movie in
                        VStack(alignment: .leading, spacing: 6) {
                            if let url = URL(string: movie.poster), !movie.poster.isEmpty {
                                AsyncImage(url: url) { image in
                                    image.resizable().scaledToFill()
                                } placeholder: {
                                    Rectangle().fill(Color.gray.opacity(0.3))
                                }
                                .frame(height: 220)
                                .clipShape(RoundedRectangle(cornerRadius: 12))
                            } else {
                                Rectangle()
                                    .fill(Color.gray.opacity(0.3))
                                    .frame(height: 220)
                                    .clipShape(RoundedRectangle(cornerRadius: 12))
                            }

                            Text(movie.title)
                                .font(.headline)
                                .lineLimit(1)
                            Text("\(movie.year) • \(movie.type.uppercased())")
                                .font(.caption)
                                .foregroundStyle(.secondary)
                        }
                        .onTapGesture {
                            onMovieSelected(movie.imdbId)
                        }
                        .onAppear {
                            if movie.imdbId == vm.movies.last?.imdbId {
                                Task {
                                    await vm.loadNextPage()
                                }
                            }
                        }
                    }
                }
                .padding()

                if vm.isPaging {
                    ProgressView()
                        .padding()
                }
            }
        }
        .navigationTitle("MovieKMP")
        .searchable(text: $vm.query, prompt: "Cari film...")
        .onSubmit(of: .search) {
            Task { await vm.search() }
        }
        .task {
            if vm.movies.isEmpty {
                await vm.search()
            }
        }
    }
}
