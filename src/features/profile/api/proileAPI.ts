import { instance } from "common/api";
import { BaseResponce, UserProfile } from "common/types/apiTypes";
export const profileAPI = {
  getStatus(userId: number) {
    return instance.get<string>(`profile/status/${userId}`);
  },
  changeStatus(status: string) {
    return instance.put<BaseResponce>("profile/status", { status });
  },
  getProfile(userId: string) {
    return instance.get<UserProfile>(`profile/${userId}`);
  },
    updateProfile(modl:Om)
};
