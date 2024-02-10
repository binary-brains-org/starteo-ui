import { IdeaType, IdeasProvider } from '@/api/Ideas';
import MenuAppBar from '@/components/UserNavBar/AppBar';
import TemporaryDrawer from '@/components/UserNavBar/Drawer';
import React, { useEffect, useState } from 'react';
import Grid from './Grid';
import { AppUses } from '@/components';
import { User } from '@/types';

const HomeUser = ({user}:{user:User}): React.ReactElement => {
  const [Ideas, setIdeas] = useState<[IdeaType] | null>(null);
  const [first, setFirst] = useState(false);

  useEffect(()=>{
    IdeasProvider.getIdeas(0,10).then((ideas:[IdeaType])=>{
      setIdeas(ideas)
      setFirst(true);
    }).catch((e)=>{
      console.log(e)
    });
  },[first])

  useEffect(() => {
    setFirst(false);
  }, [])
  return (
    <div>
      <MenuAppBar Drawer={TemporaryDrawer} />
      <div className="w-full h-[20rem] bg-orange-500"></div>
      {
        Ideas !== null ? <Grid Ideas={Ideas} user_id={user.id}/> : <>no data fetched</>
      }
      <div className="py-8">
        <AppUses />
      </div>
    </div>
  );
};

export default HomeUser;
