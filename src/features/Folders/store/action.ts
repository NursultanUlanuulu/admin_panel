import { createAsyncThunk } from "@reduxjs/toolkit"
import api from "../api"
import { toastError } from "@/shared/libs"
import { getToken } from "@/shared/enums"

export const getLoanApplicationsList = createAsyncThunk(
  "loanApplication/getLoanApplicationsList",
  async (_, { rejectWithValue }) => {
    try {
      const token = getToken()
      const { data } = await api.getLoanApplicationsReq(token)
      console.log(data)

      // return data.results
      return { results: data.results, next: data.next, previous: data.previous }
    } catch (error) {
      toastError("Ошибка при загрузке данных")
      return rejectWithValue({ message: "Ошибка при загрузке данных" })
    }
  },
)
