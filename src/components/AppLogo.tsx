import { AccountBox } from '@mui/icons-material';
import { Typography } from '@mui/material';
import auth from "@/services/auth";
import { useNavigate } from "react-router-dom";
import pageRoutes from "@/pages/@pageRoutes";

const AppLogo = () => {
  const nav = useNavigate();

  const handleClick = () => {
    auth.AuthenticationMethod()
      .then(v => {
        if(v){
          nav(pageRoutes.homeUser);
        }else {
          nav(pageRoutes.home);
        }
      })
  }

  return (
    <Typography
      variant="body1"
      onClick={handleClick}
      className="text-black dark:text-white"
      style={{ textShadow: '0 4px 8px rgba(99, 102, 241, 0.5)' }}
    >
      <AccountBox fontSize="large" />
      <span
        className="font-Quicksand text-[2rem]"
        style={{ textShadow: '0 4px 8px rgba(99, 102, 241, 0.5)' }}
      >
        Start-eo
      </span>
    </Typography>
  );
};

export default AppLogo;

