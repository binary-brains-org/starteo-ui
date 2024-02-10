import { IdeaType, IdeasProvider } from '@/api/Ideas';
import MenuAppBar from '@/components/UserNavBar/AppBar';
import TemporaryDrawer from '@/components/UserNavBar/Drawer';
import React, { useEffect, useState } from 'react';
import Grid from './Grid';
import { AppUses } from '@/components';

const HomeUser = (): React.ReactElement => {
  const [Ideas, setIdeas] = useState<[IdeaType] | null>(null);
  useEffect(()=>{
    IdeasProvider.getIdeas(0,10).then((ideas:[IdeaType])=>{
      setIdeas(ideas)
      console.log(ideas)
    }).catch((e)=>{
      console.log(e)
    });
  },[])
  return (
    <div>
      <MenuAppBar Drawer={TemporaryDrawer} />
      <div className="w-full h-[20rem] bg-orange-500"></div>
      <Grid />
      <div className="py-8">
        <AppUses />
      </div>
    </div>
  );
};

export default HomeUser;
