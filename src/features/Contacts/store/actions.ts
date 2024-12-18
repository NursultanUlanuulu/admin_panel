import { createAsyncThunk } from "@reduxjs/toolkit"
import api from "../api"
import { Contact } from "../type"
import { getToken } from "@/shared/enums"
import { toastError, toastSuccess } from "@/shared/libs"

////get
export const getContacts = createAsyncThunk(
  "contacts/getContacts",
  async (_, { rejectWithValue }) => {
    try {
      const token = getToken()
      const { data } = await api.getContactsReq(token)
      return data
    } catch (error) {
      toastError("Ошибка при загрузке данных")
      return rejectWithValue({ message: "Ошибка при загрузке данных" })
    }
  },
)

///post
export const createContact = createAsyncThunk(
  "contact/create",
  async (contact: Contact, { rejectWithValue, dispatch }) => {
    try {
      const token = getToken()
      const { data } = await api.createContactReq(token, contact)
      toastSuccess("Вы успешно добавили новый контакт")
      dispatch(getContacts())
      return data
    } catch (error) {
      toastError("Ошибка при добавлении контакта")
      return rejectWithValue({ message: "Ошибка при добавлении контакта" })
    }
  },
)

///getByID
export const getContactById = createAsyncThunk(
  "contact/getContactById",
  async (id: number, { rejectWithValue }) => {
    try {
      const token = getToken()
      const { data } = await api.getByIdReq(token, id)
      return data
    } catch (error) {
      toastError("Ошибка при загрузке данных")
      return rejectWithValue({ message: "Ошибка при загрузке данных" })
    }
  },
)

////put
export const updateContact = createAsyncThunk(
  "contact/update",
  async (contact: Contact, { rejectWithValue }) => {
    try {
      const token = getToken()
      const { data } = await api.updateContactReq(token, contact)
      return data
    } catch (error) {
      toastError("Ошибка при изменении контакта")
      return rejectWithValue({ message: "Ошибка при изменении контакта" })
    }
  },
)

////patch
export const partiallyUpdateContact = createAsyncThunk(
  "contact/patch",
  async (contact: Contact, { rejectWithValue, dispatch }) => {
    try {
      const token = getToken()
      const { data } = await api.pachContactReq(token, contact)
      toastSuccess("Вы успешно изменили данные контакта")
      dispatch(getContacts())
      return data
    } catch (error) {
      toastError("Ошибка при изменении контакта")
      return rejectWithValue({ message: "Ошибка при изменении контакта" })
    }
  },
)

///delete
export const deleteContact = createAsyncThunk(
  "contact/delate",
  async (contactId: number, { rejectWithValue, dispatch }) => {
    try {
      const token = getToken()
      const { data } = await api.delateContactReq(token, contactId)
      toastSuccess("Вы успешно удалили контакт")
      dispatch(getContacts())
      return data
    } catch (error) {
      toastError("Ошибка при удалении")
      return rejectWithValue({ message: "Ошибка при удалении" })
    }
  },
)
