import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { LoginOutlined, VerifiedUserRounded } from '@mui/icons-material';
import pageRoutes from '@/pages/@pageRoutes';
import { AppLogo } from '@/components';

const Header = () => {
  return (
    <header className="w-full flex items-center justify-between p-2">
      <Link to={pageRoutes.home} className="scale-[.9]">
        <AppLogo />
      </Link>

      <div className="px-3 flex-all-center gap-5">
        <Button
          to={pageRoutes.login}
          variant="outlined"
          component={Link}
          startIcon={<LoginOutlined />}
        >
          Login
        </Button>

        <Button
          to={pageRoutes.signup}
          variant="contained"
          component={Link}
          startIcon={<VerifiedUserRounded />}
        >
          Signup
        </Button>
      </div>
    </header>
  );
};

export default Header;
