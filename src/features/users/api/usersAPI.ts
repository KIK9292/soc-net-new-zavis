import { instance } from "common/api";
import { BaseResponce, UserResponse } from "common/types/apiTypes";

export type Params = {
  count?: number;
  page?: number;
  term?: string;
};

export const usersAPI = {
  users(params?: Params) {
    return instance.get<BaseResponce<UserResponse>>(`/users`, { params });
  },
};
