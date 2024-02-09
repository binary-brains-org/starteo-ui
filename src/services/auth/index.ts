import {Auth as AuthApi} from "@/api";
import { ForgotPasswordInput, LoginInput, SignupInput, User } from '@/types';
import FieldValidator from '@/utils/FieldValidator';

class Auth {
  async getCurrentUser(): Promise<User> {
    return {};
  }

  logout() {}

  async AuthenticationMethod(): Promise<boolean> {
    return false;
  }

  async AuthorizationMethod(hasAnyRole: AvailableRoles[]): Promise<boolean> {
    console.log(hasAnyRole);
    return false;
  }

  async login(data: LoginInput) {
    return AuthApi.login(data);
  }

  async signup(data: SignupInput) {
    return await AuthApi.signup(data);
  }

  async sendForgotPasswordCode(contact: string): Promise<string> {
    if(FieldValidator.isEmail(contact)){
      // TODO: do something here
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
