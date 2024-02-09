import { Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import pageRoutes from '@/pages/@pageRoutes';
import { UseFormReturn } from 'react-hook-form';
import { ForgotPasswordInput } from '@/types';

interface Props {
  form: UseFormReturn<ForgotPasswordInput>;
}

const SendContact = ({ form }: Props) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold font-Montserrat">
          By providing an email or your phone number
        </h2>
        <span className="font-Quicksand text-xl">
          we will send you a code and paste it in the next step
        </span>
      </div>

      <TextField
        fullWidth
        error={!!form.formState.errors['email']?.message}
        label={form.formState.errors['email']?.message || 'Email'}
        {...form.register('email', { required: 'required contact' })}
      />

      <div className="flex items-center justify-between">
        <Button variant="contained" type="submit">
          Send code
        </Button>
        <Link
          to={pageRoutes.home}
          className="font-Quicksand text-md font-bold hover:underline hover:text-blue-700"
        >
          Go home
        </Link>
      </div>
    </div>
  );
};

export default SendContact;
