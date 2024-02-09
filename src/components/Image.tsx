import { PropsWithChildren, useMemo, useState } from 'react';

interface Props {
  src: string;
  className?: string;
}

const Image = ({ src, children, className }: PropsWithChildren<Props>) => {
  const [hasLoadingError, setLoadingError] = useState(false);

  const handleError = () => {
    setLoadingError(true);
  };

  return useMemo(() => {
    return hasLoadingError ? (
      children
    ) : (
      <img
        src={src}
        alt="image data"
        className={className}
        onError={handleError}
      />
    );
  }, [src, hasLoadingError]);
};

export default Image;
