import { configureStore } from "@reduxjs/toolkit"
import { authSlice } from "features/auth/models/auth.slice"
import { userSlice } from "features/users/model/users.slice"

export const store = configureStore({
  reducer: {
    auth: authSlice,
    users: userSlice,
  },
})
export type AppRootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
