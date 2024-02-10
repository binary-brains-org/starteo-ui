import { AccountBox } from '@mui/icons-material';
import { Typography } from '@mui/material';

const AppLogo = () => {
  return (
    <Typography
      variant="body1"
      className="text-white"
      style={{ textShadow: '0 4px 8px rgba(99, 102, 241, 0.5)' }}
    >
      <AccountBox fontSize="large" />
      <span
        className="font-primary font-Quicksand text-[2rem]"
        style={{ textShadow: '0 4px 8px rgba(99, 102, 241, 0.5)' }}
      >
        Start-eo
      </span>
    </Typography>
  );
};

export default AppLogo;

