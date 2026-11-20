import SwiftUI
import SharedLogic

struct MovieDetailView: View {
    @State var vm: MovieDetailViewModel

    var body: some View {
        ScrollView {
            if vm.isLoading {
                ProgressView("Memuat detail film...")
                    .padding(.top, 40)
            } else if let error = vm.errorMessage {
                VStack(spacing: 12) {
                    Text(error).foregroundStyle(.red)
                    Button("Coba Lagi") { Task { await vm.loadDetail() } }
                }
                .padding(.top, 40)
            } else if let movie = vm.movie {
                VStack(alignment: .leading, spacing: 16) {
                    if let url = URL(string: movie.poster), !movie.poster.isEmpty {
                        AsyncImage(url: url) { image in
                            image.resizable().scaledToFit()
                        } placeholder: {
                            Rectangle().fill(Color.gray.opacity(0.3))
                        }
                        .frame(maxHeight: 350)
                        .clipShape(RoundedRectangle(cornerRadius: 16))
                    }

                    Text(movie.title)
                        .font(.title.bold())

                    HStack {
                        Label(movie.imdbRating, systemImage: "star.fill")
                            .foregroundStyle(.yellow)
                        Text("•")
                        Text(movie.runtime)
                        Text("•")
                        Text(movie.rated)
                    }
                    .font(.subheadline)
                    .foregroundStyle(.secondary)

                    VStack(alignment: .leading, spacing: 8) {
                        Text("Sinopsis").font(.headline)
                        Text(movie.plot).font(.body)
                    }

                    VStack(alignment: .leading, spacing: 6) {
                        Text("Sutradara: \(movie.director)").font(.caption)
                        Text("Penulis: \(movie.writer)").font(.caption)
                        Text("Pemeran: \(movie.actors)").font(.caption)
                    }
                    .foregroundStyle(.secondary)
                }
                .padding()
            }
        }
        .navigationTitle("Detail Film")
        .navigationBarTitleDisplayMode(.inline)
        .task { await vm.loadDetail() }
    }
}
