interface LoginInput {
  email: string;
  password: string;
}
interface LoginOutput {}

interface SignupInput {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  image?: FileList;
}
interface SignupOutput {}

interface ForgotPasswordInput {
  email: string;
  code: string;
  newPassword: string;
}
interface ForgotPasswordOutput {}

export {
  type LoginInput,
  type LoginOutput,
  type SignupInput,
  type SignupOutput,
  type ForgotPasswordInput,
  type ForgotPasswordOutput,
};
