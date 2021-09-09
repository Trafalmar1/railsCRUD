import { AuthAxios, Axios } from "./config/axios.config";
import { UserData } from "./userApi";

type SignUpData = {
  username: string;
  password: string;
  role: string;
};

export type LoginData = {
  email: string;
  password: string;
};

export type SignInData = {
  token?: string;
  user?: UserData;
  error?: Object;
};

export const signUp = (data: SignUpData) => {
  return Axios.post("/users", { user: { ...data } }).then((res) => {
    return res.data;
  });
};

export const signIn = (data: LoginData) => {
  return AuthAxios.post("/login", { ...data }).then((res) => {
    return res.data as SignInData;
  });
};
