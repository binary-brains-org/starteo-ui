import { ReactNode, useState } from 'react';
import ErrorPopup from '../components/ErrorPopup';
import errorHandler from '../utils/errorHandler';

const useErrorPopup = (): [ReactNode, (error: Error) => void] => {
  const [node, setNode] = useState<ReactNode | null>(null);

  const handleClose = () => setNode(null);

  const setError = (error: Error): void => {
    setNode(
      <ErrorPopup
        error={{ message: errorHandler(error) }}
        onClose={handleClose}
      />,
    );
  };

  return [node, setError];
};

export default useErrorPopup;
