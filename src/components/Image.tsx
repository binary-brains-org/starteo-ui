import { DetailedHTMLProps, ImgHTMLAttributes, useMemo, useState } from 'react';

type ImageProps = Omit<DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, 'alt' | 'onError'>;

const Image = ({ src, children, ...rest }: ImageProps): JSX.Element => {
  const [errorLoading, setErrorLoading] = useState(false);
  const handleError = () => {
    setErrorLoading(true);
  };

  return useMemo(() => {
    if (errorLoading || src === null || src === undefined || src === '')
      return children as JSX.Element;
    return (
      <img src={src} alt="[dynamic image]" onError={handleError} {...rest} />
    );
  }, [src, children, errorLoading]);
};

export { Image };