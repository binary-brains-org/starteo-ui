import { useEffect, useState } from 'react';
import { PageLoading } from '@/layout';
import HomeGuest from './HomeGuest';
import HomeUser from './HomeUser';
import auth from '@/services/auth';
import { useErrorPopup } from '@/hooks';
import { User } from '@/types';

const Home = () => {

  return (
    <>
      <HomeGuest />
    </>
  );
};

export default Home;
