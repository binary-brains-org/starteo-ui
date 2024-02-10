import { Button, TextField } from '@mui/material';
import { UseFormReturn } from 'react-hook-form';
import { SignupInput } from '@/types';

interface Props {
  onPrevious(): void;
  form: UseFormReturn<SignupInput>;
}

const SecondForm = ({ form, onPrevious }: Props) => {
  return (
    <>
      <TextField
        fullWidth
        type="password"
        autoComplete="current-password"
        error={!!form.formState.errors['password']?.message}
        label={form.formState.errors['password']?.message || 'Password'}
        {...form.register('password', { required: 'required value' })}
      />

      <div className="flex items-center justify-between">
        <Button variant="contained" type="button" onClick={onPrevious}>
          Previous
        </Button>

        <Button variant="contained" type="submit">
          Next
        </Button>
      </div>
    </>
  );
};

export default SecondForm;
