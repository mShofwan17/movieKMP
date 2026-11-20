import { useEffect } from 'react';
import { useMovieList } from '../hooks/useMovieList.ts';

export function MovieListScreen({ onMovieSelect }: { onMovieSelect: (imdbId: string) => void }) {
  const { query, setQuery, movies, isLoading, isPaging, error, search, loadNextPage } = useMovieList();

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 400) {
        loadNextPage();
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loadNextPage]);

  return (
    <div>
      <header className="web-app-header">
        <div className="web-app-header-title">
          <h1>MovieKMP Web</h1>
        </div>
        <form className="search-form" onSubmit={(e) => { e.preventDefault(); search(); }}>
          <input
            type="text"
            className="search-input"
            placeholder="Cari judul film... (Tekan Enter)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className="search-button">
            Cari
          </button>
        </form>
      </header>

      <main className="main-content">
        {isLoading && <div style={{ fontSize: '18px', padding: '40px 0' }}>Memuat film...</div>}
        {error && <div style={{ color: '#ef4444', fontSize: '16px', padding: '20px 0' }}>{error}</div>}

        {!isLoading && !error && movies.length === 0 && (
          <div style={{ fontSize: '18px', color: '#94a3b8', padding: '40px 0' }}>Film tidak ditemukan</div>
        )}

        <div className="movie-grid">
          {movies.map((movie) => (
            <div
              key={movie.imdbId}
              className="movie-card"
              onClick={() => onMovieSelect(movie.imdbId)}
            >
              {movie.poster ? (
                <img src={movie.poster} alt={movie.title} className="movie-poster" />
              ) : (
                <div className="movie-poster-placeholder">No Poster</div>
              )}
              <div className="movie-info">
                <div className="movie-title">{movie.title}</div>
                <div className="movie-meta">{movie.year} • {movie.type.toUpperCase()}</div>
              </div>
            </div>
          ))}
        </div>

        {isPaging && (
          <div style={{ textAlign: 'center', padding: '24px 0', fontSize: '16px', color: '#38bdf8' }}>
            Memuat halaman berikutnya...
          </div>
        )}
      </main>
    </div>
  );
}
