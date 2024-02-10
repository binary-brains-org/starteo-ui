import { useEffect, useState } from 'react';
import { PageLoading } from '@/layout';
import HomeGuest from './HomeGuest';
import HomeUser from './HomeUser';
import auth from '@/services/auth';
import { useErrorPopup } from '@/hooks';
import { User } from '@/types';

const Home = () => {
  const [isLoading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState<User | null>(null);
  const [errorNode, setErrorNode] = useErrorPopup();
  const [first, setFirst] = useState(false);

  useEffect(() => {
    if (isLoading && !first) {
      auth
        .getCurrentUser()
        .then(setAuthenticated)
        .then(() => {
          setLoading(false);
          setFirst(true)
        })
        .catch((e) => {
          setErrorNode(e);
          setFirst(true)
          setLoading(true);
        });
    }
  }, [first, true]);

  return (
    <>
      {isLoading ? (
        <PageLoading />
      ) : authenticated !== null ? (
        <HomeUser user={authenticated} />
      ) : (
        <HomeGuest />
      )}
      {errorNode}
    </>
  );
};

export default Home;
