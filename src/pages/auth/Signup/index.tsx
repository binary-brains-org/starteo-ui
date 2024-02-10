import { AppLogo, AppUses } from '@/components';
import { FormPage } from '@/layout';
import SignupForm from './SignupForm';

const Signup = () => {
  return (
    <FormPage>
      <div className="w-full h-full p-4 bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="w-full h-full flex flex-col ">
          <div className="flex-all-center flex-col gap-1">
            <AppLogo />
            <h2 className="font-Montserrat text-3xl">Welcome !</h2>
          </div>
          <div className="h-full flex-all-center">
            <SignupForm />
          </div>
          <AppUses />
        </div>
      </div>
    </FormPage>
  );
};

export default Signup;
