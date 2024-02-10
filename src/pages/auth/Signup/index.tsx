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
            <h2 className="mt-8 font-Montserrat text-3xl border border-gray-300 rounded-lg p-6 relative inline-flex items-center justify-center mb-2 me-2 overflow-hidden text-xl font-bold text-white rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300">
              Welcome back !
            </h2>
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

