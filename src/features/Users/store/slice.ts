import { createSlice } from "@reduxjs/toolkit"
import { StatusResponse } from "../../../shared/enums"
import { Users } from "../type"
import { getUsersList } from "./action"

interface InitialState {
  getUsersList: {
    status: StatusResponse
    message?: string
    next: null
    previous: null
  }
  users: Users
}

const initialState: InitialState = {
  getUsersList: {
    status: StatusResponse.INITIAL,
    message: "",
    next: null,
    previous: null,
  },
  users: [],
}

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getUsersList.fulfilled, (state, { payload }) => {
        state.getUsersList.status = StatusResponse.SUCCESS
        state.users = payload
      })
      .addCase(getUsersList.pending, (state) => {
        state.getUsersList.status = StatusResponse.LOADING
      })
      .addCase(getUsersList.rejected, (state, { payload }) => {
        state.getUsersList.status = StatusResponse.ERROR
        state.getUsersList.message = payload as string
      })
  },
})

export default userSlice.reducer
