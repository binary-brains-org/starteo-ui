interface LoginInput {
  email: string;
  password: string;
}
interface LoginOutput {
  email: string;
  token: string;
}

interface SignupInput {
  firstname: string;
  lastname: string;
  email: string;
  username: string;
  password: string;
  image?: FileList;
  
}
interface SignupOutput {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
}

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
