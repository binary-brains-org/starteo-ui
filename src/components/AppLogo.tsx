import { AccountBox } from '@mui/icons-material';
import { Typography } from '@mui/material';

const AppLogo = () => {
  return (
    <Typography variant="body1" color="black" className="flex-all-center gap-2">
      <AccountBox fontSize="large" />
      <span className="font-primary font-Quicksand text-[2rem]">Start-eo</span>
    </Typography>
  );
};

export default AppLogo;
