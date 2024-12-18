import { createAsyncThunk } from "@reduxjs/toolkit"
import { api } from "../api"
import { Region } from "../type"
import { getToken } from "@/shared/enums"
import { toastError, toastSuccess } from "@/shared/libs"

///get all
export const getRegions = createAsyncThunk(
  "regions/getRegions",
  async (_, { rejectWithValue }) => {
    try {
      const token = getToken()
      const { data } = await api.getRegionsReq(token)
      return data
    } catch (error) {
      toastError("Ошибка при загрузке данных")
      return rejectWithValue({ message: "Ошибка при загрузке данных" })
    }
  },
)

////post
export const createRegion = createAsyncThunk(
  "region/createRegion",
  async (region: Region, { rejectWithValue, dispatch }) => {
    try {
      const token = getToken()
      const { data } = await api.createRegionReq(token, region)
      toastSuccess("Вы успешно добавили новый регион")
      dispatch(getRegions())
      return data
    } catch (error) {
      toastError("Ошибка при добавлении региона")
      return rejectWithValue({ message: "Ошибка при добавлении регион" })
    }
  },
)

///getByID
export const getRegionById = createAsyncThunk(
  "region/getRegionById",
  async (id: number, { rejectWithValue }) => {
    try {
      const token = getToken()
      const { data } = await api.getRegionByIdReq(token, id)
      return data
    } catch (error) {
      toastError("Ошибка при загрузке данных")
      return rejectWithValue({ message: "Ошибка при загрузке данных" })
    }
  },
)

////put
export const updateRegion = createAsyncThunk(
  "region/updateRegion",
  async (region: Region, { rejectWithValue, dispatch }) => {
    try {
      const token = getToken()
      const { data } = await api.updateRegionReq(token, region)
      toastSuccess("Вы успешно изменили данные региона")
      dispatch(getRegions())
      return data
    } catch (error) {
      toastError("Ошибка при изменении  региона")
      return rejectWithValue({ message: "Ошибка при изменении региона" })
    }
  },
)

////patch
export const partiallyUpdateRegion = createAsyncThunk(
  "region/partiallyUpdateRegion",
  async (region: Region, { rejectWithValue, dispatch }) => {
    try {
      const token = getToken()
      const { data } = await api.partiallyUpdateRegionReq(token, region)
      toastSuccess("Вы успешно изменили данные региона")
      dispatch(getRegions())
      return data
    } catch (error) {
      toastError("Ошибка при изменении  региона")
      return rejectWithValue({ message: "Ошибка при изменении региона" })
    }
  },
)

///delete
export const deleteRegion = createAsyncThunk(
  "contact/delate",
  async (id: number, { rejectWithValue, dispatch }) => {
    try {
      const token = getToken()
      const { data } = await api.deleteRegionReq(token, id)
      toastSuccess("Вы успешно удалили регион")
      dispatch(getRegions())
      return data
    } catch (error) {
      toastError("Ошибка при удалении")
      return rejectWithValue({ message: "Ошибка при удалении" })
    }
  },
)
