import { AccountBox } from '@mui/icons-material';
import { Typography } from '@mui/material';

const AppLogo = () => {
  return (
    <Typography
      variant="body1"
      color="primary"
      className="flex-all-center gap-2"
    >
      <AccountBox fontSize="large" />
      <span className="font-bold font-Quicksand text-[2rem]">App logo</span>
    </Typography>
  );
};

export default AppLogo;
