import { Button } from '@mui/material';
import { LogoutRounded } from '@mui/icons-material';

export const ButtonLogout = () => {
  return (
    <Button sx={styles} startIcon={<LogoutRounded />} color="secondary">
      <span>Logout</span>
    </Button>
  );
};

const styles = {
  padding: '.6rem',
};
