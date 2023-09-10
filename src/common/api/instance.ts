import axios from "axios";

export const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0",
  withCredentials: true,
  headers: {
    "API-KEY": "fdf6f163-b057-4eee-9b85-ec1216c43810",
  },
});
