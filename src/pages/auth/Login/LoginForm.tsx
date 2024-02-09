import { Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import pageRoutes from '@/pages/@pageRoutes';
import auth from '@/services/auth';
import { useErrorPopup } from '@/hooks';
import { parseInputValue } from './validator';
import { LoginInput, LoginOutput } from '@/types';

const LoginForm = () => {
  const [errorNode, setError] = useErrorPopup();

  const handleLoginResponse = (response: LoginOutput) => {
    console.log(response); // TODO: handle the response data
  };

  const handleDataToSend = async (data: LoginInput) => {
    try {
      const body: LoginInput = Object.assign(
        { password: data.password },
        parseInputValue(data.email),
      );

      const result: LoginOutput = await auth.login(body);
      handleLoginResponse(result);
    } catch (e) {
      setError(e as Error);
    }
  };

  const form = useForm<LoginInput>();
  return (
    <form
      onSubmit={form.handleSubmit(handleDataToSend)}
      className="w-full flex flex-col gap-5 px-5"
    >
      <TextField
        error={!!form.formState.errors['email']?.message}
        {...form.register('email', { required: 'Required value' })}
        label={form.formState.errors['email']?.message || 'Email'}
      />

      <TextField
        type="password"
        error={!!form.formState.errors['email']?.message}
        label={form.formState.errors['email']?.message || 'password'}
        {...form.register('password', { required: 'Required value' })}
      />

      <div className="flex items-center justify-between">
        <Button variant="contained" type="submit">
          Submit
        </Button>

        <span className="flex-all-center gap-1">
          <span className="font-Montserrat max-lg:hidden">
            don't have an account ?&nbsp;
          </span>
          <Link
            to={pageRoutes.signup}
            className="font-Quicksand text-md font-bold hover:underline hover:text-blue-700"
          >
            Create an account
          </Link>
        </span>
      </div>

      <Link
        to={pageRoutes.forgotPassword}
        className="font-Quicksand text-md font-bold hover:underline hover:text-blue-700 w-fit"
      >
        forgot password
      </Link>
      {errorNode}
    </form>
  );
};

export default LoginForm;
