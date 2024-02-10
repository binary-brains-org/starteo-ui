import React, { forwardRef, ReactNode } from 'react';
import { TextField as Field } from '@mui/material';
import { TextFieldProps } from '@mui/material';
import { FieldValues, RegisterOptions, UseFormReturn } from 'react-hook-form';

interface Props<T extends FieldValues> {
  name: keyof T;
  label: string;
  form: UseFormReturn<T>;
  validator?: RegisterOptions;
}

const _TextField = (
  {
    name,
    label,
    validator,
    form,
    ...rest
  }: Props<FieldValues> & Omit<TextFieldProps, 'ref'>,
  ref: React.ForwardedRef<HTMLInputElement>,
) => {
  const {
    register,
    formState: { errors },
  } = form;
  return (
    <Field
      fullWidth
      error={!!errors[name]}
      label={(errors[name]?.message || label) as ReactNode}
      {...rest}
      {...register(name, validator)}
      {...ref}
    />
  );
};

const TextField = forwardRef(_TextField);
export default TextField;
