import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useErrorPopup } from '@/hooks';
import { Steps } from '@/components';
import auth from '@/services/auth';
import { ForgotPasswordInput } from '@/types';
import SendContact from './SendContact';
import PasteCode from './PasteCode';
import ChangePassword from './ChangePassword';

const ForgotForm = () => {
  const form = useForm<ForgotPasswordInput>();
  const [step, setStep] = useState<0 | 1 | 2>(0);

  const [errorNode, setError] = useErrorPopup();

  const resetPasswordFactory = (data: ForgotPasswordInput) => {
    auth
      .forgotPassword(data)
      .then((v) => {
        console.log(v); // TODO: handle this function
      })
      .catch(setError);
  };

  const [verificationCode, setVerificationCode] = useState('');
  const sendCode = async () => {
    const contact: string = form.getValues('email') as string;
    const code: string = await auth.sendForgotPasswordCode(contact);
    setVerificationCode(code);
  };

  const handleData = (data: ForgotPasswordInput) => {
    switch (step) {
      case 0:
        sendCode()
          .then(() => setStep(1))
          .catch(setError);
        break;

      case 1:
        setStep(2);
        break;

      case 2:
        resetPasswordFactory(data);
        break;

      default:
        setStep(0);
        break;
    }
  };

  const GetStepForm = () => {
    switch (step) {
      case 0:
        return <SendContact form={form} />;

      case 1:
        return (
          <PasteCode code={verificationCode} onResend={sendCode} form={form} />
        );

      case 2:
        return <ChangePassword form={form} />;

      default:
        return null;
    }
  };

  return (
    <form
      {...form.handleSubmit(handleData)}
      className="w-full h-full flex flex-col pt-8 gap-5 px-10"
    >
      <Steps index={step} steps={['Your contact', 'verification', 'finish']} />

      <div className="h-full flex-all-center">
        <GetStepForm />
      </div>
      {errorNode}
    </form>
  );
};

export default ForgotForm;
