import { useContext } from 'react';
import { AppContext, appContext } from '@/core/appContext';

const useAppContext = (): AppContext => {
  return useContext(appContext);
};

export { useAppContext };
