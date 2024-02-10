import { IdeaType, IdeasProvider } from '@/api/Ideas';
import MenuAppBar from '@/components/UserNavBar/AppBar';
import TemporaryDrawer from '@/components/UserNavBar/Drawer';
import React, { useEffect, useState } from 'react';

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
    <>
      <MenuAppBar Drawer={TemporaryDrawer} />
    </>
  );
};

export default HomeUser;
