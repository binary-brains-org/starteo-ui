import { createTheme, Theme } from '@mui/material';
import fontFamily from '@/assets/fontFamily';

const MuiTheme: Theme = createTheme({
  typography: {
    fontFamily: fontFamily.join(', '),
  },
  palette: {
    secondary: {
      main: '#0092ff',
    },
  },
});

export default MuiTheme;
