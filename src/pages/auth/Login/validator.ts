import FieldValidator from '@/utils/FieldValidator';
import { LoginInput } from '@/types';

const parseInputValue = (value: string): Omit<LoginInput, 'password'> => {
  const obj: Omit<LoginInput, 'password'> = { email: '' };
  if (FieldValidator.isEmail(value)) {
    obj.email = value;
    return obj;
  }
  throw new Error('Value: ' + value + ' is not an email');
};

export { parseInputValue };
