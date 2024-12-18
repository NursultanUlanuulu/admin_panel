// import { toastError } from "@/shared/libs";
import { createAsyncThunk } from "@reduxjs/toolkit"
import { NavigateFunction } from "react-router"
import apiRoot from "../../../app/api"
import { toastError, toastSuccess } from "../../../shared/libs"
import { api } from "../api"
import { LoginReq } from "../type"

export const getProfileInfo = createAsyncThunk(
  "auth/profileInfo",
  async (_, { rejectWithValue }) => {
    try {
      const token =
        window.localStorage.getItem("accessToken") ||
        window.localStorage.getItem("refreshToken")
      const { data } = await api.getProfileReq(token ?? "")
      return data
    } catch (e: any) {
      toastError(e.data.message)
      return rejectWithValue(e.data.message)
    }
  },
)

export const login = createAsyncThunk(
  "auth/login",
  async (
    { userData, navigate }: { userData: LoginReq; navigate: NavigateFunction },
    { rejectWithValue, dispatch },
  ) => {
    try {
      const { data } = await api.login(userData)
      localStorage.setItem("accessToken", data.access)
      // localStorage.setItem('refreshToken', data.refresh)
      dispatch(getProfileInfo())
      navigate("/")
      toastSuccess("Вы успешно вошли в систему")
      return data.access
    } catch (e: any) {
      toastError("Ошибка входа. Попробуйте еще раз.")
      return rejectWithValue(e.response.data.detail)
    }
  },
)
// Refresh access token function
export const refreshAccessToken = async () => {
  try {
    const refreshToken = localStorage.getItem("refreshToken")
    if (!refreshToken) {
      throw new Error("Refresh token not found")
    }
    const response = await apiRoot.post("/token/refresh/", {
      refresh: refreshToken,
    })
    const { access: accessToken } = response.data
    localStorage.setItem("accessToken", accessToken)
    return accessToken
  } catch (error) {
    console.error("Failed to refresh access token:", error)
    throw error
  }
}

// Verify access token function
export const verifyAccessToken = async () => {
  try {
    const accessToken = localStorage.getItem("accessToken")
    if (!accessToken) {
      throw new Error("Access token not found")
    }
    await apiRoot.post("/token/verify/", { token: accessToken })
    return true
  } catch (error) {
    console.error("Failed to verify access token:", error)
    return false
  }
}
