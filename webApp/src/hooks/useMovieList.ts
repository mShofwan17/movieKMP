import { useCallback, useEffect, useState } from 'react';
import type { MovieItem } from 'sharedLogic';
import { useShared } from '../di/SharedContext.ts';

export function useMovieList() {
  const shared = useShared();
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState<MovieItem[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [isPaging, setPaging] = useState(false);
  const [page, setPage] = useState(1);
  const [canPaginate, setCanPaginate] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const search = useCallback(async (searchQuery?: string) => {
    const q = (searchQuery ?? query).trim();
    const effectiveQuery = q || 'movie';
    setLoading(true);
    setError(null);
    setPage(1);
    setCanPaginate(true);
    try {
      const useCase = shared.getListMoviesSearchUseCase ? shared.getListMoviesSearchUseCase() : shared.getGetListMoviesSearchUseCase();
      const res = await useCase.invoke(effectiveQuery, null, 1, '');
      const moviesArray = Array.isArray(res)
        ? res
        : (res && typeof res.asJsReadonlyArrayView === 'function' ? res.asJsReadonlyArrayView() : Array.from(res || []));
      setMovies(moviesArray as MovieItem[]);
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    } finally {
      setLoading(false);
    }
  }, [shared, query]);

  const loadNextPage = useCallback(async () => {
    const q = query.trim();
    const effectiveQuery = q || 'movie';
    if (isLoading || isPaging || !canPaginate) return;
    setPaging(true);
    const nextPage = page + 1;
    try {
      const useCase = shared.getListMoviesSearchUseCase ? shared.getListMoviesSearchUseCase() : shared.getGetListMoviesSearchUseCase();
      const res = await useCase.invoke(effectiveQuery, null, nextPage, '');
      const newMoviesArray = Array.isArray(res)
        ? res
        : (res && typeof res.asJsReadonlyArrayView === 'function' ? res.asJsReadonlyArrayView() : Array.from(res || []));
      if (!newMoviesArray || newMoviesArray.length === 0) {
        setCanPaginate(false);
      } else {
        setPage(nextPage);
        setMovies((prev) => [...prev, ...newMoviesArray]);
      }
    } catch {
      setCanPaginate(false);
    } finally {
      setPaging(false);
    }
  }, [shared, query, page, isLoading, isPaging, canPaginate]);

  useEffect(() => {
    search('');
  }, [search]);

  return { query, setQuery, movies, isLoading, isPaging, error, search, loadNextPage };
}
