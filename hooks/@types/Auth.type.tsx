export type LoginUser = {
  email: string;
  password: string;
}

export type RegisterUser = {
  firstName: string;
  lastName: string;
  email: LoginUser['email'];
  password: LoginUser['password'];
}

export type TokenValidated = {
  valid: boolean;
}