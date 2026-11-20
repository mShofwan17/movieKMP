import { useMemo, type ReactNode } from 'react';
import { KmpFactory } from 'sharedLogic';
import { SharedContext } from './SharedContext.ts';

export function SharedProvider({ children }: { children: ReactNode }) {
  const factory = useMemo(() => {
    const obj = KmpFactory as any;
    return typeof obj.getInstance === 'function' ? obj.getInstance() : obj;
  }, []);

  return <SharedContext.Provider value={factory}>{children}</SharedContext.Provider>;
}
