import { Typography } from '@mui/material';

const AppLogo = () => {
  return (
    <Typography
      variant="body1"
      color="primary"
      className="flex-all-center gap-2"
    >
      <span
        className="font-bold text-[2.5rem]"
        style={{ fontFamily: 'Protest Guerrilla' }}
      >
        Start-eo
      </span>
    </Typography>
  );
};

export default AppLogo;
