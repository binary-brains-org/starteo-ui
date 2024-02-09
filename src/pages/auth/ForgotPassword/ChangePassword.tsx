import { Button, TextField } from '@mui/material';
import { UseFormReturn } from 'react-hook-form';
import { ForgotPasswordInput } from '@/types';

interface Props {
  form: UseFormReturn<ForgotPasswordInput>;
}

const ChangePassword = ({ form }: Props) => {
  return (
    <div className="w-full flex flex-col gap-8">
      <div>
        <h2 className="font-Montserrat text-2xl font-bold">
          Enter a new password
        </h2>
        <span className="font-Quicksand text-lg">
          Try to write a memorable password
        </span>
      </div>

      <TextField
        fullWidth
        error={!!form.formState.errors['newPassword']?.message}
        label={form.formState.errors['newPassword']?.message || 'new password'}
        {...form.register('newPassword', {
          required: 'New password is required',
        })}
      />

      <div>
        <Button type="submit" variant="contained">
          Done
        </Button>
      </div>
    </div>
  );
};

export default ChangePassword;
