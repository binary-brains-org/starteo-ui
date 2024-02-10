import { useEffect, useState } from 'react';
import { ThemeProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import MuiTheme from './core/MuiTheme';
import auth from './services/auth';
import { AppContext, appContext } from './utils/appContext';
import { useErrorPopup } from './hooks';
import Pages from './pages';

const App = () => {
  const [firstRender, setFirstRender] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [errorNode, setErrorNode] = useErrorPopup();

  useEffect(() => {
    if (firstRender) {
      setFirstRender(false);

      if (!authenticated) {
        auth.AuthenticationMethod().then(setAuthenticated).catch(setErrorNode);
      }
    }
  }, [firstRender, authenticated, setErrorNode]);

  const contextValue: AppContext = { authenticated } as AppContext;
  return (
    <ThemeProvider theme={MuiTheme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <appContext.Provider value={contextValue}>
          <Pages />
          {errorNode}
        </appContext.Provider>
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default App;
