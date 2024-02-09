import { UseFormReturn } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import hideCenterString from '@/utils/hideCenterString';
import { ForgotPasswordInput } from '@/types';

interface Props {
  form: UseFormReturn<ForgotPasswordInput>;
  code: string;
  onResend(): void;
}


const PasteCode = ({ form, onResend, code }: Props) => {
  const contact: string = hideCenterString(form.getValues('email'));

  return (
    <div className="w-full flex flex-col gap-8">
      <div className="flex-all-center flex-col gap-1">
        <div className="flex-all-center gap-3">
          <div className="font-Lato">We sent the code with your contact:</div>
          <span className="font-bold font-Quicksand">{contact}</span>
        </div>
        <p className="font-Lato">
          If the code is not sent,&nbsp;
          <Link
            to="#resent"
            onClick={onResend}
            className="font-Quicksand font-semibold"
          >
            Click here
          </Link>
        </p>
      </div>

      <TextField
        fullWidth
        error={!!form.formState.errors['code']?.message}
        label={form.formState.errors['code']?.message || 'Paste the code here'}
        {...form.register('code', {
          required: 'This field is required',
          validate(v){
            if (v === code) {
              return true;
            }
            return 'Invalid code';
          }
        })}
      />

      <div>
        <Button type="submit" variant="contained">
          Verify
        </Button>
      </div>
    </div>
  );
};

export default PasteCode;
