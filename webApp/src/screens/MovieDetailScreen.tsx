import { useMovieDetail } from '../hooks/useMovieDetail.ts';

export function MovieDetailScreen({ imdbId, onBack }: { imdbId: string; onBack: () => void }) {
  const { movie, isLoading, error } = useMovieDetail(imdbId);

  return (
    <main className="main-content">
      <button type="button" onClick={onBack} className="btn-back">
        ← Kembali ke Daftar Film
      </button>

      {isLoading && <div style={{ fontSize: '18px', padding: '40px 0' }}>Memuat detail film...</div>}
      {error && <div style={{ color: '#ef4444', fontSize: '16px', padding: '20px 0' }}>{error}</div>}

      {movie && (
        <article className="detail-layout">
          {movie.poster && (
            <img src={movie.poster} alt={movie.title} className="detail-poster" />
          )}
          <div className="detail-info">
            <h1 className="detail-title">{movie.title} ({movie.year})</h1>
            <div className="detail-badges">
              <span className="badge badge-rating">★ {movie.imdbRating}</span>
              <span className="badge badge-info">{movie.runtime}</span>
              <span className="badge badge-info">{movie.rated}</span>
              <span className="badge badge-info">{movie.genre}</span>
            </div>

            <h2 className="detail-section-title">Sinopsis</h2>
            <p className="detail-plot">{movie.plot}</p>

            <div className="detail-credits">
              <p><strong>Sutradara:</strong> {movie.director}</p>
              <p><strong>Penulis:</strong> {movie.writer}</p>
              <p><strong>Pemeran:</strong> {movie.actors}</p>
            </div>
          </div>
        </article>
      )}
    </main>
  );
}
