import { Link } from 'react-router-dom';
import { Circle } from '@mui/icons-material';
import { styled } from '@mui/material';
import appProperty from '@/configuration/appProperty';

const thisYear: number = new Date().getFullYear();
const AppName: string = appProperty.name;

const Div = styled(Circle)({ fontSize: '.6rem' });

const AppUses = () => {
  return (
    <div className="flex-all-center w-full flex-col px-8">
      <nav className="flex gap-2 w-full justify-around items-center text-center font-Lato text-sm font-semibold text-zinc-500 dark:text-zinc-300">
        <Link to="#">Privacy policy</Link>
        <Div />
        <Link to="#">Condition of uses</Link>
        <Div />
        <Link to="#">Help</Link>
        <Div />
        <Link to="#">Account</Link>
        <Div />
        <Link to="#">About us</Link>
      </nav>
      <p className="text-sm font-Quicksand font-semibold text-gray-600 dark:text-zinc-400">
        Copyright © {AppName} - {thisYear}
      </p>
      <span className="text-xs font-Quicksand font-bold text-gray-900 dark:text-zinc-500">
        All right reserved
      </span>
    </div>
  );
};

export default AppUses;
