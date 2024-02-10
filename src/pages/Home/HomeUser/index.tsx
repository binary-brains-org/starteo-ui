import MenuAppBar from '@/components/UserNavBar/AppBar';
import TemporaryDrawer from '@/components/UserNavBar/Drawer';
import React from 'react';

const HomeUser = (): React.ReactElement => {
  return (
    <>
      <MenuAppBar Drawer={TemporaryDrawer} />
    </>
  );
};

export default HomeUser;
