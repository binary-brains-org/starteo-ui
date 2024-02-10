import { Suspense } from 'react';
import { PageLoading } from '@/layout';
import HomeGuest from './HomeGuest';
import HomeUser from './HomeUser';
import { useAppContext } from '@/hooks';

const Home = () => {
  const { authenticated } = useAppContext();

  return (
    <Suspense fallback={<PageLoading />}>
      {authenticated ? <HomeUser /> : <HomeGuest />}
    </Suspense>
  );
};

export default Home;
