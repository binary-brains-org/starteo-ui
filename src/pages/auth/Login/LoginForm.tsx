import { Button, TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import pageRoutes from '@/pages/@pageRoutes';
import auth from '@/services/auth';
import { useErrorPopup } from '@/hooks';
import { parseInputValue } from './validator';
import Token from '@/core/token';
import { LoginInput, LoginOutput } from '@/types';

const LoginForm = () => {
  const nav = useNavigate();
  const [errorNode, setError] = useErrorPopup();

  const handleLoginResponse = (response: LoginOutput) => {
    Token.set(response.token);
    nav(pageRoutes.homeUser);
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
      className="w-full flex flex-col gap-5 px-4 justify-center items-center"
    >
      <TextField
        error={!!form.formState.errors['email']?.message}
        {...form.register('email', { required: 'Required value' })}
        label={form.formState.errors['email']?.message || 'Email'}
        sx={{
          backgroundColor: 'white',
          borderRadius: '16px',
          width: '27rem',
          flex: 'wrap',
          border: 'none',
        }}
      />

      <TextField
        type="password"
        error={!!form.formState.errors['email']?.message}
        label={form.formState.errors['email']?.message || 'password'}
        {...form.register('password', { required: 'Required value' })}
        sx={{
          backgroundColor: 'white',
          borderRadius: '16px',
          width: '27rem',
          flex: 'wrap',
          border: 'none',
        }}
      />
      <Button
        variant="contained"
        type="submit"
        className="bg-gradient-to-br from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 focus:ring-4 focus:ring-blue-300 text-white font-bold"
      >
        Submit
      </Button>
      <div className="flex items-center justify-between">
        <span className="flex-all-center gap-1">
          <span className="font-Montserrat max-lg:hidden text-white">
            don't have an account ?&nbsp;
          </span>
          <Link
            to={pageRoutes.signup}
            className="font-Quicksand text-md font-bold hover:underline hover:text-blue-700 text-white"
          >
            Create an account
          </Link>
        </span>
      </div>

      <Link
        to={pageRoutes.forgotPassword}
        className="font-Quicksand text-md font-bold hover:underline hover:text-blue-700 w-fit text-white"
      >
        forgot password
      </Link>
      {errorNode}
    </form>
  );
};

export default LoginForm;

