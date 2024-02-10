import {
  LoginInput,
  LoginOutput,
  SignupInput,
  SignupOutput,
  User as UserData,
} from '@/types';
import fetcher from './fetcher';
import Token from '@/core/token';

class AuthMethod {
  public async login(data: LoginInput): Promise<LoginOutput> {
    return (await fetcher.post('/auth/login', data)).data;
  }
  public async signup(data: SignupInput): Promise<SignupOutput> {
    return (await fetcher.post('/auth/signup', data)).data;
  }

  public static async whoami(): Promise<UserData> {
    return (
      await fetcher.get('/auth/whoami', {
        headers: {
          Authorization: 'Bearer ' + Token.get(),
        },
      })
    ).data;
  }
}

export const Auth = new AuthMethod();
