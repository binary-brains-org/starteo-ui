import { Auth as AuthApi } from '@/api';
import { ForgotPasswordInput, LoginInput, SignupInput, User } from '@/types';
import FieldValidator from '@/utils/FieldValidator';
import Token from '@/core/token';
import UserApi from '@/api/User';

class Auth {
  async getCurrentUser(): Promise<User> {
    return UserApi.whoami();
  }

  logout() {
    Token.clear();
  }

  async AuthenticationMethod(): Promise<boolean> {
    return Token.get().trim().length > 0;
  }

  async AuthorizationMethod(hasAnyRole: AvailableRoles[]): Promise<boolean> {
    return true;
  }

  async login(data: LoginInput) {
    return AuthApi.login(data);
  }

  async signup(data: SignupInput) {
    return await AuthApi.signup(data);
  }

  async sendForgotPasswordCode(contact: string): Promise<string> {
    if (FieldValidator.isEmail(contact)) {
    }
    throw new Error('Provided value is not an email');
  }

  async forgotPassword(data: ForgotPasswordInput) {
    return AuthApi.forgotPassword(data);
  }
}

const auth: Auth = new Auth();
export { Auth, auth };
export default auth;
