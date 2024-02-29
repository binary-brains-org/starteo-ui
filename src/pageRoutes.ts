import { Parameterized } from '@/utils';

const pageRoutes = {
  home: '/',
  project: '/project',
  funding: '/funding',
  payments: '/payments',
  profile: new Parameterized('/profile/:uuid'),
  signup: '/signup',
  login: '/login',
  forgotPassword: '/forgot_password',
};

export default pageRoutes;
