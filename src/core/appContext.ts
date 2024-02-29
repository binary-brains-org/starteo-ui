import { createContext } from 'react';

interface AppContext {}

const appContext = createContext<AppContext>({} as AppContext);

export { type AppContext, appContext };
