import { instance } from "common/api";
import { BaseResponce } from "common/types/apiTypes";

export const authAPI = {
  login(data: LoginParams) {
    return instance.post<BaseResponce<{ userId: string }>>("/auth/login", data);
  },
  logout() {
    return instance.delete<BaseResponce>("/auth/login");
  },
  me() {
    return instance.get<BaseResponce<{ id: number; email: string; login: string }>>("/auth/me");
  },
  captcha() {
    return instance.get<BaseResponce<{ url: string }>>("/security/get-captcha-url");
  },
};

export type LoginParams = {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha?: string;
};
