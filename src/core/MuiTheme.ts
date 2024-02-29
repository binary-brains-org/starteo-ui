import { createTheme, Theme, ThemeOptions } from '@mui/material';
import { colors } from '@/assets';

const THEME_LIGHT: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: colors.maize,
    secondary: colors.gunmetal,
    error: colors.bittersweet,
    info: colors.african_violet
  }
};


const THEME_DARK: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: colors.maize,
    secondary: colors.gunmetal,
    error: colors.bittersweet,
    info: colors.african_violet
  }
};

const MuiTheme = (mode: 'light' | 'dark'): Theme => {
  return createTheme(mode === 'light' ? THEME_LIGHT : THEME_DARK);
};

export { MuiTheme };
