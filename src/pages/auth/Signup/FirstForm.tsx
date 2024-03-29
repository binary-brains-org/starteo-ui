import { Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { UseFormReturn } from 'react-hook-form';
import { SignupInput } from '@/types';
import pageRoutes from '@/pages/@pageRoutes';

interface Props {
  form: UseFormReturn<SignupInput>;
}

const FirstForm = ({ form }: Props) => {
  return (
    <>
      <div className="w-full flex-all-center gap-2">
        <TextField
          fullWidth
          error={!!form.formState.errors['lastname']?.message}
          label={form.formState.errors['lastname']?.message || 'Lastname'}
          {...form.register('lastname', { required: 'required value' })}
        />
        <TextField
          fullWidth
          error={!!form.formState.errors['firstname']?.message}
          label={form.formState.errors['firstname']?.message || 'Firstname'}
          {...form.register('firstname', { required: 'required value' })}
        />
      </div>

      <TextField
        fullWidth
        error={!!form.formState.errors['email']?.message}
        label={form.formState.errors['email']?.message || 'Email'}
        {...form.register('email', { required: 'required value' })}
      />

      <div className="flex items-center justify-between">
        <Button variant="contained" type="submit">
          Next
        </Button>

        <span className="flex-all-center gap-1">
          <span className="font-Montserrat text-center">
            already have an account ?&nbsp;
          </span>
          <Link
            to={pageRoutes.login}
            className="font-Quicksand text-md font-bold hover:underline hover:text-blue-700"
          >
            Login
          </Link>
        </span>
      </div>
    </>
  );
};

export default FirstForm;
