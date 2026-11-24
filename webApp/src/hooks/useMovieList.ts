import { useCallback, useEffect, useState, useRef } from 'react';
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

  // Use refs to avoid stale closure state in callbacks
  const stateRef = useRef({ page, isLoading, isPaging, canPaginate, query });
  stateRef.current = { page, isLoading, isPaging, canPaginate, query };

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
      if (!moviesArray || moviesArray.length === 0) {
        setCanPaginate(false);
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
      setCanPaginate(false);
    } finally {
      setLoading(false);
    }
  }, [shared, query]);

  const loadNextPage = useCallback(async () => {
    const { page: currPage, isLoading: loading, isPaging: paging, canPaginate: canPag, query: currQuery } = stateRef.current;
    const q = currQuery.trim();
    const effectiveQuery = q || 'movie';

    if (loading || paging || !canPag) return;

    setPaging(true);
    const nextPage = currPage + 1;
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
  }, [shared]);

  useEffect(() => {
    search('');
  }, [search]);

  return { query, setQuery, movies, isLoading, isPaging, canPaginate, error, search, loadNextPage };
}
