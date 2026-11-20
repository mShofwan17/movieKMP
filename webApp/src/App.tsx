import { useState } from 'react';
import { MovieListScreen } from './screens/MovieListScreen.tsx';
import { MovieDetailScreen } from './screens/MovieDetailScreen.tsx';

type Route =
  | { name: 'list' }
  | { name: 'detail'; imdbId: string };

export function App() {
  const [route, setRoute] = useState<Route>({ name: 'list' });

  switch (route.name) {
    case 'list':
      return <MovieListScreen onMovieSelect={(imdbId) => setRoute({ name: 'detail', imdbId })} />;
    case 'detail':
      return <MovieDetailScreen imdbId={route.imdbId} onBack={() => setRoute({ name: 'list' })} />;
  }
}
