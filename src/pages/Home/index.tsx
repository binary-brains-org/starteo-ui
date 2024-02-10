import { useEffect, useState } from 'react';
import { PageLoading } from '@/layout';
import HomeGuest from './HomeGuest';
import HomeUser from './HomeUser';
import auth from '@/services/auth';
import { useErrorPopup } from '@/hooks';

const Home = () => {
  const [isLoading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [errorNode, setErrorNode] = useErrorPopup();

  useEffect(() => {
    if (isLoading) {
      auth
        .AuthenticationMethod()
        .then(setAuthenticated)
        .then(() => {
          setLoading(false);
        })
        .catch(setErrorNode);
    }
  }, []);

  return (
    <>
      {isLoading ? (
        <PageLoading />
      ) : authenticated ? (
        <HomeUser />
      ) : (
        <HomeGuest />
      )}
      {errorNode}
    </>
  );
};

export default Home;
