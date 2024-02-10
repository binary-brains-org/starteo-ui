import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { HomeOutlined, LoginOutlined } from '@mui/icons-material';
import pageRoutes from '../pages/@pageRoutes';
import { Page404 } from '../components/Lotties';
import { AppLogo, AppUses } from '../components';

const PageNotFound = () => {
  return (
    <div className="full-screen md:flex-all-center overflow-x-hidden">
      <div className="flex gap-[2.5rem] max-md:flex-col max-md:items-center">
        <div className="flex flex-col">
          <div className="p-1 md:hidden max-md:pt-8">
            <AppLogo />
          </div>
          <div className="w-[18rem] h-[18rem]">
            <Page404 />
          </div>
          <span className="text-[2.5rem] font-Quicksand font-semibold">
            Page not found
          </span>
        </div>

        <div className="flex flex-col justify-between max-md:gap-[5rem] max-md:pb-10">
          <div className="p-1 max-md:hidden">
            <AppLogo />
          </div>

          <div className="flex-all-center flex-col gap-5 w-full">
            <div className="flex flex-col">
              <span className="text-xl text-center font-Montserrat font-bold">
                It looks like you are on the wrong page.
              </span>
              <span className="font-Quicksand text-md font-semibold">
                Please navigate to appropriate links to avoid hacking risks
              </span>
            </div>

            <div className="flex items-center justify-around w-full">
              <Button
                to={pageRoutes.home}
                component={Link}
                variant="outlined"
                startIcon={<HomeOutlined />}
              >
                back home
              </Button>

              <Button
                to={pageRoutes.login}
                component={Link}
                variant="outlined"
                startIcon={<LoginOutlined />}
              >
                Login
              </Button>
            </div>
          </div>

          <AppUses />
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
