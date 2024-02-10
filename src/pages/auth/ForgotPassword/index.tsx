import { FormPage } from '@/layout';
import { AppLogo, AppUses } from '@/components';
import ForgotForm from './ForgotForm';

const ForgotPassword = () => {
  return (
    <FormPage>
      <div className="w-full h-full p-4">
        <div className="w-full h-full flex flex-col">
          <div className="flex-all-center flex-col gap-1">
            <AppLogo />
            <h2 className="font-Sixtyfour text-3xl">Reset your infos</h2>
          </div>
          <div className="h-full flex-all-center">
            <ForgotForm />
          </div>
          <AppUses />
        </div>
      </div>
    </FormPage>
  );
};

export default ForgotPassword;
