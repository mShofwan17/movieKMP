import { useEffect, useState } from 'react';
import type { MovieDetail } from 'sharedLogic';
import { useShared } from '../di/SharedContext.ts';

export function useMovieDetail(imdbId: string) {
  const shared = useShared();
  const [movie, setMovie] = useState<MovieDetail | null>(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError(null);

    const useCase = shared.getDetailMoviesUseCase ? shared.getDetailMoviesUseCase() : shared.getGetDetailMoviesUseCase();
    useCase.invoke(imdbId, '')
      .then((detail: MovieDetail) => {
        if (active) setMovie(detail);
      })
      .catch((e: any) => {
        if (active) setError(e instanceof Error ? e.message : String(e));
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [shared, imdbId]);

  return { movie, isLoading, error };
}
