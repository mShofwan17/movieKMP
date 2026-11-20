import { createContext, useContext } from 'react';

export const SharedContext = createContext<any>(null);

export function useShared(): any {
  const f = useContext(SharedContext);
  if (!f) throw new Error('useShared harus dipakai di dalam <SharedProvider>');
  return f;
}
