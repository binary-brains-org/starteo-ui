import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import pageRoutes from './@pageRoutes';
import { SecureRoute } from '@/layer';
import { PageNotFound, Ping } from '@/layout';
import Home from './Home';
import Profile from './Profile';
import { Login, Signup, ForgotPassword } from './auth';
import ViewIdea from '@/pages/ViewIdea';

const Pages = () => {
  return (
    <Router>
      <Routes>
        {/* Client pages */}
        <Route path={pageRoutes.home} Component={Home} />
        <Route path={pageRoutes.profile} Component={Profile} />
        <Route path={pageRoutes.viewIdea} Component={ViewIdea} />

        {/* Security example only using secureRoute */}
        <Route
          path="/admin"
          Component={SecureRoute(
            () => (
              <p>Hello admin</p>
            ),
            ['admin'],
          )}
        />

        {/* Auth pages */}
        <Route path={pageRoutes.login} Component={Login} />
        <Route path={pageRoutes.signup} Component={Signup} />
        <Route path={pageRoutes.forgotPassword} Component={ForgotPassword} />

        {/* Unexpected pages */}
        <Route path="/ping" Component={Ping} />
        <Route path="*" Component={PageNotFound} />
      </Routes>
    </Router>
  );
};

export default Pages;
