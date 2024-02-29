import { ThemeProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppContext, appContext } from './core';
import { MuiTheme } from './core';
import { Home, Funding, Project, Payment } from '@/pages';
import pageRoutes from '@/pageRoutes';

const App = () => {
  const contextValue: AppContext = {} as AppContext;
  return (
    <ThemeProvider theme={MuiTheme('light')}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <appContext.Provider value={contextValue}>
          <Router>
            <Routes>
              <Route path={pageRoutes.home} Component={Home} />
              <Route path={pageRoutes.project} Component={Project} />
              <Route path={pageRoutes.funding} Component={Funding} />
              <Route path={pageRoutes.payments} Component={Payment} />

              <Route path={pageRoutes.profile.path} Component={null} />
            </Routes>
          </Router>
        </appContext.Provider>
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default App;
