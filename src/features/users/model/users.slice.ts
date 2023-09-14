import { createSlice } from "@reduxjs/toolkit"
import { createAppAsyncThunk } from "common/utils/create-app-async-thunk"
import { Params, usersAPI } from "features/users/api/usersAPI"
import { User, UtilResponse } from "common/types/apiTypes"
import { followAPI } from "features/users/api/followAPI"
import { ResultCode } from "common/enums/enums"

const setUsers = createAppAsyncThunk<UtilResponse<User[]>, Params>(
  "users/setUsers",
  async (arg, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    const res = await usersAPI.users(arg)

    return res.data
  },
)
const followUser = createAppAsyncThunk<{ userId: number }, number>(
  "users/followUser",
  async (userId, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    const res = await followAPI.follow(userId)
    if (res.data.resultCode === ResultCode.Success) {
      return { userId: userId }
    } else {
      return rejectWithValue({ data: res.data })
    }
  },
)
const unFollowUser = createAppAsyncThunk<{ userId: number }, number>(
  "users/unFollowUser",
  async (userId, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    const res = await followAPI.unFollow(userId)
    if (res.data.resultCode === ResultCode.Success) {
      return { userId: userId }
    } else {
      return rejectWithValue({ data: res.data })
    }
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
    builder
      .addCase(setUsers.fulfilled, (state, action) => {
        state.users = action.payload.items
        state.totalCount = action.payload.totalCount
      })
      .addCase(followUser.fulfilled, (state, action) => {
        let user = state.users.find((el) => el.id === action.payload.userId)
        if (user) {
          user.followed = true
        }
      })
      .addCase(unFollowUser.fulfilled, (state, action) => {
        let user = state.users.find((el) => el.id === action.payload.userId)
        if (user) {
          user.followed = false
        }
      })
  },
})
export const authSlice = slice.reducer
export const userThunk = { setUsers, followUser, unFollowUser }
