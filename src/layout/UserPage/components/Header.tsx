import { Avatar } from '@mui/material';
import { MessageRounded, Notifications } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import pageRoutes from '@/pageRoutes';
import { CircleButton } from './Buttons';
import { Stylesheet } from '@/utils';
import { AppLogo } from '@/components';

const Header = () => {
  return (
    <header className="py-2 px-8 fixed top z-[1000] w-full bg-white rounded-b-lg shadow-md">
      <div className="flex items-center justify-between">
        <div className="px-2">
          <AppLogo />
        </div>

        <div className="flex items-center gap-3">
          <CircleButton variant="contained">
            <Notifications />
          </CircleButton>
          <CircleButton variant="contained">
            <MessageRounded />
          </CircleButton>

          <Link
            to={pageRoutes.profile.gotTo({ uuid: 'none' })}
            className="flex items-center gap-1"
          >
            <div className="flex flex-col text-end">
              <span className="leading-[.95] text-lg font-bold text-gunmetal font-Montserrat">
                Username
              </span>
              <span className="leading-[.95] font-Quicksand text-gunmetal-600 font-semibold">
                email@gmail.com
              </span>
            </div>
            <Avatar sx={styles.avatar}>U</Avatar>
          </Link>
        </div>
      </div>
    </header>
  );
};

const styles = Stylesheet({
  avatar: {
    width: '3rem',
    height: '3rem',
  },
});

export { Header };
