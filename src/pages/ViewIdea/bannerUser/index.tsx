import { Avatar, Skeleton, Typography } from '@mui/material';
import { AppLogo } from '@/components';
import { Circle } from '@mui/icons-material';
import Stylesheet from '@/utils/Stylesheet';
import { Link } from 'react-router-dom';
import pageRoutes from '@/pages/@pageRoutes';
import { useEffect, useState } from 'react';
import { User } from '@/types';
import auth from '@/services/auth';
import { useErrorPopup } from '@/hooks';

interface Props {
  userId?: string;
}

const BannerUser = ({}: Props) => {
  const [currentUser, setUser] = useState<User | null>(null);
  const [errorNode, setErrorNode] = useErrorPopup();

  useEffect(() => {
    if (!currentUser) {
      auth.getCurrentUser().then(setUser).catch(setErrorNode);
    }
  }, []);

  return (
    <header className="flex items-center px-5 p-2 justify-between sticky top-0 z-[5000] bg-white">
      <div className="center-flex gap-2 p-2">
        <Link to={pageRoutes.home}>
          <AppLogo />
        </Link>
        <Circle sx={styles.circle} />
        <Typography variant="h5" fontWeight="bold">
          Post name
        </Typography>
      </div>

      <div className="flex gap-2 items-center">
        <div className="flex flex-col text-end">
          <span className="leading-tight font-bold text-2xl">
            {currentUser?.lastname || <Skeleton />}
          </span>
          <span className="leading-tight text-zinc-500 dark:text-zinc-400">
            {currentUser?.email || <Skeleton />}
          </span>
        </div>
        <Avatar src={currentUser?.picture}>U</Avatar>
      </div>
      {errorNode}
    </header>
  );
};

const styles = Stylesheet({
  circle: {
    width: '.9rem',
    height: '.9rem',
  },
});

export default BannerUser;
