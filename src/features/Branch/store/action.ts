import { createAsyncThunk } from "@reduxjs/toolkit"
import { api } from "../api"
import { Branch } from "../type"
import { getToken } from "@/shared/enums"
import { toastError, toastSuccess } from "@/shared/libs"

export const getBranchList = createAsyncThunk(
  "branch/getBranchList",
  async (_, { rejectWithValue }) => {
    try {
      const token = getToken()
      const { data } = await api.getBranchReq(token)
      return data
    } catch (error) {
      toastError("Ошибка при загрузке данных")
      return rejectWithValue({ message: "Ошибка при загрузке данных" })
    }
  },
)

export const createBranch = createAsyncThunk(
  "branch/createBranch",
  async (branch: Branch, { rejectWithValue, dispatch }) => {
    try {
      const token = getToken()
      const { data } = await api.createBranchReq(token, branch)
      toastSuccess("Вы успешно добавили новый филиал")
      dispatch(getBranchList())
      return data
    } catch (error) {
      toastError("Ошибка при добавлении филиала")
      return rejectWithValue({ message: "Ошибка при добавлении филиала" })
    }
  },
)

export const getBranchById = createAsyncThunk(
  "branch/getBranchById",
  async (id: number, { rejectWithValue }) => {
    try {
      const token = getToken()
      const { data } = await api.detail(token, id)
      return data
    } catch (error) {
      toastError("Ошибка при загрузке данных")
      return rejectWithValue({ message: "Ошибка при загрузке данных" })
    }
  },
)

export const updateBranch = createAsyncThunk(
  "branch/update",
  async (branch: Branch, { rejectWithValue, dispatch }) => {
    try {
      const token = getToken()
      const { data } = await api.updateBranch(token, branch)
      toastSuccess("Вы успешно изменили данные филиала")
      dispatch(getBranchById(branch.id))
      dispatch(getBranchList())
      return data
    } catch (error) {
      toastError("Ошибка при изменении")
      return rejectWithValue({ message: "Ошибка при изменении" })
    }
  },
)

export const partiallyUpdateBranch = createAsyncThunk(
  "branch/patch",
  async (branch: Branch, { rejectWithValue, dispatch }) => {
    try {
      const token = getToken()
      const { data } = await api.pachBranchReq(token, branch)
      toastSuccess("Вы успешно изменили данные филиала")
      dispatch(getBranchById(branch.id))
      dispatch(getBranchList())
      return data
    } catch (error) {
      toastError("Ошибка при изменении")
      return rejectWithValue({ message: "Ошибка при изменении" })
    }
  },
)

export const deleteBranch = createAsyncThunk(
  "branch/delate",
  async (branchId: number, { rejectWithValue, dispatch }) => {
    try {
      const token = getToken()
      const { data } = await api.delateContactReq(token, branchId)
      toastSuccess("Вы успешно удалили филиал")
      dispatch(getBranchList())
      return data
    } catch (error) {
      toastError("Ошибка при удалении")
      return rejectWithValue({ message: "Ошибка при удалении" })
    }
  },
)
