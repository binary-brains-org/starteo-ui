import { useContext } from 'react';
import { AppContext, appContext } from '@/utils/appContext';

const useAppContext = (): AppContext => {
  return useContext(appContext);
};

export default useAppContext;
