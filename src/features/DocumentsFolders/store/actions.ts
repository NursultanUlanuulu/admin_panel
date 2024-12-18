import { createAsyncThunk } from "@reduxjs/toolkit"
import { api } from "../api"
import { DocumentFolder } from "../type"
import { getToken } from "@/shared/enums"
import { toastError, toastSuccess } from "@/shared/libs"

////Get
export const getDocumentFolderList = createAsyncThunk(
  "documentFolder/getDocumentFolderList",
  async (_, { rejectWithValue }) => {
    try {
      const token = getToken()
      const { data } = await api.getDocumentFolderReq(token)
      return data
    } catch (error) {
      toastError("Ошибка при загрузке данных")
      return rejectWithValue({ message: "Ошибка при загрузке данных" })
    }
  },
)

///POST
export const createDocumentFolder = createAsyncThunk(
  "documentFolder/createDocumentFolder",
  async (folder: DocumentFolder, { rejectWithValue, dispatch }) => {
    try {
      const token = getToken()
      const { data } = await api.createDocumentFolderReq(token, folder)
      toastSuccess("Вы успешно добавили новую папку")
      dispatch(getDocumentFolderList())
      return data
    } catch (error) {
      toastError("Ошибка при добавлении новой папки")
      return rejectWithValue({ message: "'Ошибка при добавлении новой папки" })
    }
  },
)

///GetById
export const getDocumentFolderById = createAsyncThunk(
  "documentFolder/getDocumentFolderById",
  async (id: number, { rejectWithValue }) => {
    try {
      const token = getToken()
      const { data } = await api.documentFolderById(token, id)
      return data
    } catch (error) {
      toastError("Ошибка при загрузке данных")
      return rejectWithValue({ message: "Ошибка при загрузке данных" })
    }
  },
)

///PUT
export const updateDocumentFolder = createAsyncThunk(
  "documentFolder/updateDocumentFolder",
  async (folder: DocumentFolder, { rejectWithValue, dispatch }) => {
    try {
      const token = getToken()
      const { data } = await api.updateDocumentFolder(token, folder)
      toastSuccess("Папка успешно обновлена")
      dispatch(getDocumentFolderList())
      dispatch(getDocumentFolderById(folder.id))
      return data
    } catch (error) {
      toastError("Ошибка при обновлении папки")
      return rejectWithValue({ message: "Ошибка при обновлении папки" })
    }
  },
)

////patch
export const partiallyUpdateDocumentFolder = createAsyncThunk(
  "documentFolder/partiallyUpdateDocumentFolder",
  async (folder: DocumentFolder, { rejectWithValue, dispatch }) => {
    try {
      const token = getToken()
      const { data } = await api.pachDocumentFolderReq(token, folder)
      toastSuccess("Вы успешно изменили данные")
      dispatch(getDocumentFolderList())
      dispatch(getDocumentFolderById(folder.id))
      return data
    } catch (error) {
      toastError("Ошибка при изменении данных")
      return rejectWithValue({ message: "Ошибка при изменении данных" })
    }
  },
)

///delete
export const deleteDocumentFolder = createAsyncThunk(
  "documentFolder/deleteDocumentFolder",
  async (id: number, { rejectWithValue, dispatch }) => {
    try {
      const token = getToken()
      const { data } = await api.delateDocumentFolderReq(token, id)
      toastSuccess("Вы успешно удалили папку")
      dispatch(getDocumentFolderList())
      return data
    } catch (error) {
      toastError("Ошибка при удалении")
      return rejectWithValue({ message: "Ошибка при удалении" })
    }
  },
)
