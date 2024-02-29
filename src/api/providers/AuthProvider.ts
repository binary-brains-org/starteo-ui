import { fetcher, LoginInput, SignupInput } from '@/api';
import { Token } from '@/utils';

class AuthProvider {
  public static async signup(data: SignupInput) {
    return (await fetcher.post('/auth/signup', data)).data;
  }

  public static async signIn(data: LoginInput) {
    return (await fetcher.post('/auth/login', data)).data;
  }

  public static async whoAmI() {
    return (
      await fetcher.get('/auth/whoami', {
        headers: { Authorization: Token.get() },
      })
    ).data;
  }

  public static async getUserById(userId: string) {
    return (
      await fetcher.get(`/user/${encodeURIComponent(userId)}`, {
        headers: { Authorization: Token.get() },
      })
    ).data;
  }
}

export { AuthProvider };
