import { useState } from 'react';
import { useForm } from 'react-hook-form';
import FirstForm from './FirstForm';
import SecondForm from './SecondForm';
import EndForm from './EndForm';
import auth from '@/services/auth';
import { useErrorPopup } from '@/hooks';
import { Steps } from '@/components';
import { SignupInput, SignupOutput } from '@/types';
import Token from '@/core/token';
import pageRoutes from '@/pages/@pageRoutes';
import { useNavigate } from 'react-router-dom';
import User from '@/api/User';

const SignupForm = () => {
  const nav = useNavigate();
  const [nodeError, setErrorPopup] = useErrorPopup();
  const form = useForm<SignupInput>();
  const [step, setStep] = useState<0 | 1 | 2>(0);

  const handleResponseSignup = (data: SignupInput, response: SignupOutput) => {
    auth
      .login({ email: response.email, password: data.password })
      .then(async (v) => {
        if (data.image !== undefined && data.image?.length > 0) {
          const d = await User.setProfile(response.id, {
            file: data?.image?.item(0),
          });
          console.log(d);
        }
        Token.set(v.token);
      })
      .then(() => {
        nav(pageRoutes.home);
      })
      .catch(setErrorPopup);
  };

  const handleDone = async (data: SignupInput) => {
    try {
      const res = await auth.signup(data);
      handleResponseSignup(data, res);
    } catch (e) {
      setErrorPopup(e as Error);
    }
  };

  const handleSubmitData = async (data: SignupInput) => {
    switch (step) {
      case 0:
        setStep(1);
        break;

      case 1:
        setStep(2);
        break;

      case 2:
        await handleDone(data);
        break;

      default:
        setStep(0);
        break;
    }
  };

  const handlePrevious = () => {
    setStep((p) => (p - 1) as 0 | 1 | 2);
  };

  const GetStepForm = () => {
    switch (step) {
      case 0:
        return <FirstForm form={form} />;

      case 1:
        return <SecondForm onPrevious={handlePrevious} form={form} />;

      case 2:
        return <EndForm form={form} onPrevious={handlePrevious} />;

      default:
        return null;
    }
  };

  return (
    <form
      onSubmit={form.handleSubmit(handleSubmitData)}
      className="full-view py-5 flex flex-col gap-5 px-5"
    >
      <Steps index={step} steps={['Your identity', 'Your infos', 'Finish']} />
      <div className="full-view flex flex-col gap-8 justify-center">
        <GetStepForm />
      </div>
      {nodeError}
    </form>
  );
};

export default SignupForm;
