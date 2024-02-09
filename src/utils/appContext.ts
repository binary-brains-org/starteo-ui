import { createContext } from 'react';

interface AppContext {
  authenticated: boolean;
}

const appContext = createContext<AppContext>({} as AppContext);

export { type AppContext, appContext };
