import { IdeaType, IdeasProvider } from '@/api/Ideas';
import MenuAppBar from '@/components/UserNavBar/AppBar';
import TemporaryDrawer from '@/components/UserNavBar/Drawer';
import React, { useEffect, useState } from 'react';
import Grid from './Grid';
import { AppUses } from '@/components';
import { User } from '@/types';
import auth from '@/services/auth';

const HomeUser = (): React.ReactElement => {
  const [Ideas, setIdeas] = useState<[IdeaType] | null>(null);
  const [first, setFirst] = useState(false);
  const [authenticated, setAuthenticated] = useState<User | null>(null);

  useEffect(() => {
    auth.getCurrentUser().then((user) => {
      setAuthenticated(user);
      IdeasProvider.getIdeas(0, 10).then((ideas: [IdeaType]) => {
        setIdeas(ideas)
        setFirst(true);
        console.log(ideas)
      }).catch((e) => {
        console.log(e)
      });
    }).catch((e) => {
      throw e;
    })

  }, [first])

  useEffect(() => {
    setFirst(false);
  }, [])
  return (
    <div>
      <MenuAppBar Drawer={TemporaryDrawer} />
      <div className="w-full h-[20rem] bg-orange-500"></div>
      {
        Ideas && authenticated ? <Grid Ideas={Ideas} user_id={authenticated.id} /> : <>no data fetched</>
      }
      <div className="py-8">
        <AppUses />
      </div>
    </div>
  );
};

export default HomeUser;
