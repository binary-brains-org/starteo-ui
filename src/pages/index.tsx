import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import pageRoutes from './@pageRoutes';
import { PageNotFound, Ping } from '@/layout';
import Profile from './Profile';
import ViewIdea from '@/pages/ViewIdea';
import HomeGuest from "@/pages/Home/HomeGuest";
import HomeUser from "@/pages/Home/HomeUser";
import { Login, Signup, ForgotPassword } from './auth';

const Pages = () => {
  return (
    <Router>
      <Routes>
        <Route path={pageRoutes.home} Component={HomeGuest} />
        <Route path={pageRoutes.homeUser} Component={HomeUser} />

        <Route path={pageRoutes.profile} Component={Profile} />
        <Route path={pageRoutes.viewIdea} Component={ViewIdea} />

        <Route path={pageRoutes.login} Component={Login} />
        <Route path={pageRoutes.signup} Component={Signup} />
        <Route path={pageRoutes.forgotPassword} Component={ForgotPassword} />
        <Route path="/ping" Component={Ping} />
        <Route path="*" Component={PageNotFound} />
      </Routes>
    </Router>
  );
};

export default Pages;
