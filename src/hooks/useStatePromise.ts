import { useLayoutEffect, useState } from 'react';

type Callback<T> = (prev: T) => Promise<T> | T;
type SetState<T> = (callback: T | Promise<T> | Callback<T>) => void;

const useStatePromise = <T>(
  initialState: Promise<T> | T,
  fallbackValue: T,
): [T, SetState<T>, Error | null] => {
  const [firstRender, setFirstRender] = useState(true);
  const [state, setState] = useState<T>(fallbackValue);
  const [error, setError] = useState<Error | null>(null);

  useLayoutEffect(() => {
    if (firstRender) {
      setFirstRender(false);
      if (initialState instanceof Promise) {
        initialState.then((v) => setState(v)).catch(setError);
      } else {
        setState(initialState);
      }
    }
  }, [firstRender, initialState]);

  const setAsyncState: SetState<T> = (callback): void => {
    (async function () {
      try {
        if (typeof callback === 'function') {
          const data: T = await (<Callback<T>>callback)(state);
          setState(data);
        } else {
          setState(await callback);
        }
      } catch (e) {
        setError(e as Error);
      }
    })();
  };

  return [state, setAsyncState, error];
};

export { type SetState };
export default useStatePromise;
