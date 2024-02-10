import {
  ForgotPasswordInput,
  ForgotPasswordOutput,
  LoginInput,
  LoginOutput,
  SignupInput,
  SignupOutput,
} from '@/types';
import fetcher from './fetcher';

class AuthMethod {
  public async login(data: LoginInput): Promise<LoginOutput> {
    return (await fetcher.post('/login', data)).data;
  }
  public async signup(data: SignupInput): Promise<SignupOutput> {
    return (
      await fetcher.post('/signup', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
    ).data;
  }
  public async forgotPassword(
    data: ForgotPasswordInput,
  ): Promise<ForgotPasswordOutput> {
    return (await fetcher.post('/password/forgot', data)).data;
  }
}

export const Auth = new AuthMethod();
