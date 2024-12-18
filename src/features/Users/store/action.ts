import { createAsyncThunk } from "@reduxjs/toolkit"
import api from "../api"
import { getToken } from "@/shared/enums"
import { toastError } from "@/shared/libs"

export const getUsersList = createAsyncThunk(
  "users/getUsersList",
  async (_, { rejectWithValue }) => {
    try {
      const token = getToken()
      const { data } = await api.getUsersReq(token)
      console.log(data)

      return { results: data.results, next: data.next, previous: data.previous }
    } catch (error) {
      toastError("Ошибка при загрузке данных")
      return rejectWithValue({ message: "Ошибка при загрузке данных" })
    }
  },
)
