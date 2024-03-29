import { AppLogo, AppUses } from '@/components';
import { FormPage } from '@/layout';
import LoginForm from './LoginForm';

const Login = () => {
  return (
    <FormPage>
      <div className="w-full h-full p-4">
        <div className="w-full h-full flex flex-col">
          <div className="flex-all-center flex-col gap-1">
            <AppLogo />
            <h2 className="font-Sixtyfour text-3xl">Welcome back !</h2>
          </div>
          <div className="h-full flex-all-center">
            <LoginForm />
          </div>
          <AppUses />
        </div>
      </div>
    </FormPage>
  );
};

export default Login;
