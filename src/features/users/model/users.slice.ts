import { createSlice } from "@reduxjs/toolkit"
import { createAppAsyncThunk } from "common/utils/create-app-async-thunk"
import { Params, usersAPI } from "features/users/api/usersAPI"
import { User, UtilResponse } from "common/types/apiTypes"

const setUsers = createAppAsyncThunk<UtilResponse<User[]>, Params>(
  "users/setUsers",
  async (arg, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    const res = await usersAPI.users(arg)

    return res.data
  },
)

const slice = createSlice({
  name: "users",
  initialState: {
    totalCount: 0,
    users: [] as User[],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setUsers.fulfilled, (state, action) => {
      state.users = action.payload.items
      state.totalCount = action.payload.totalCount
    })
  },
})
export const authSlice = slice.reducer
export const userThunk = {}
