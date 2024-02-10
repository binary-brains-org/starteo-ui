import MenuAppBar from '@/components/UserNavBar/AppBar';
import TemporaryDrawer from '@/components/UserNavBar/Drawer';
import Grid from './Grid';
import { AppUses } from '@/components';

const HomeUser = (): React.ReactElement => {
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
