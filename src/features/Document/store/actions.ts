import { createAsyncThunk } from "@reduxjs/toolkit"
import { api } from "../api"
import { Document } from "../type"
import { getToken } from "@/shared/enums"
import { toastError, toastSuccess } from "@/shared/libs"

export const getDocumentList = createAsyncThunk(
  "document/getDocumentList",
  async (_, { rejectWithValue }) => {
    try {
      const token = getToken()
      const { data } = await api.getDocumentReq(token)
      return data
    } catch (error) {
      toastError("Ошибка при загрузке данных")
      return rejectWithValue({ message: "Ошибка при загрузке данных" })
    }
  },
)

export const createDocument = createAsyncThunk(
  "document/createDocument",
  async (document: Document, { rejectWithValue, dispatch }) => {
    try {
      const token = getToken()
      const { data } = await api.createDocumentReq(token, document)
      toastSuccess("Вы успешно добавили новый документ")
      dispatch(getDocumentList())
      return data
    } catch (error) {
      toastError("Ошибка при добавлении документа")
      return rejectWithValue({ message: "Ошибка при добавлении документа" })
    }
  },
)

export const getDocumentById = createAsyncThunk(
  "document/getDocumentById",
  async (id: number, { rejectWithValue, dispatch }) => {
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

export const updateDocument = createAsyncThunk(
  "document/updateDocument",
  async (document: Document, { rejectWithValue, dispatch }) => {
    try {
      const token = getToken()
      const { data } = await api.updateDocument(token, document)
      toastSuccess("Вы успешно изменили данные документа")
      dispatch(getDocumentList())
      dispatch(getDocumentById(document.id))
      return data
    } catch (error) {
      toastError("Ошибка при изменении документа")
      return rejectWithValue({ message: "Ошибка при изменении документа" })
    }
  },
)

export const partiallyUpdateDocument = createAsyncThunk(
  "document/partiallyUpdateDocument",
  async (document: Document, { rejectWithValue, dispatch }) => {
    try {
      const token = getToken()
      const { data } = await api.pachDocumentReq(token, document)
      toastSuccess("Вы успешно изменили данные документа")
      dispatch(getDocumentList())
      dispatch(getDocumentById(document.id))
      return data
    } catch (error) {
      toastError("Ошибка при изменении документа")
      return rejectWithValue({ message: "Ошибка при изменении документа" })
    }
  },
)

export const deleteDocument = createAsyncThunk(
  "document/deleteDocument",
  async (id: number, { rejectWithValue, dispatch }) => {
    try {
      const token = getToken()
      const { data } = await api.delateDocumentReq(token, id)
      toastSuccess("Вы успешно удалили документ")
      dispatch(getDocumentList())
      return data
    } catch (error) {
      toastError("Ошибка при удалении")
      return rejectWithValue({ message: "Ошибка при удалении" })
    }
  },
)
