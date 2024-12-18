import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../api'
import { Notification } from '../type'
import { getToken } from '@/shared/enums'
import { toastError, toastSuccess } from '@/shared/libs'

///get all
export const getNotification = createAsyncThunk(
	'notification/getNotification',
	async (_, { rejectWithValue }) => {
		try {
			const token = getToken()
			const { data } = await api.getNotificationReq(token)
			return data
		} catch (error) {
			toastError('Ошибка при загрузке данных')
			return rejectWithValue({ message: 'Ошибка при загрузке данных' })
		}
	}
)

////post
export const createNotification = createAsyncThunk(
	'notification/createNotification',
	async (notification: Notification, { rejectWithValue, dispatch }) => {
		try {
			const token = getToken()
			const { data } = await api.createNotificationReq(token, notification)
			toastSuccess('Вы успешно добавили новое уведомление')
			dispatch(getNotification())
			return data
		} catch (error) {
			toastError('Ошибка при добавлении уведомлении')
			return rejectWithValue({ message: 'Ошибка при добавлении уведомлении' })
		}
	}
)

///getByID
export const getNotificationById = createAsyncThunk(
	'notification/getNotificationById',
	async (id: number, { rejectWithValue }) => {
		try {
			const token = getToken()
			const { data } = await api.getNotificationByIdReq(token, id)
			return data
		} catch (error) {
			toastError('Ошибка при загрузке данных')
			return rejectWithValue({ message: 'Ошибка при загрузке данных' })
		}
	}
)

////put
export const updateNotification = createAsyncThunk(
	'notification/updateNotification',
	async (notification: Notification, { rejectWithValue, dispatch }) => {
		try {
			const token = getToken()
			const { data } = await api.updateNotificationReq(token, notification)
			toastSuccess('Вы успешно изменили данные уведомления')
			dispatch(getNotification())
			return data
		} catch (error) {
			toastError('Ошибка при изменении уведомления')
			return rejectWithValue({ message: 'Ошибка при изменении уведомления' })
		}
	}
)

////patch
export const partiallyUpdateNotification = createAsyncThunk(
	'notification/partiallyUpdateNotification',
	async (notification: Notification, { rejectWithValue, dispatch }) => {
		try {
			const token = getToken()
			const { data } = await api.partiallyUpdateNotificationReq(
				token,
				notification
			)
			toastSuccess('Вы успешно изменили данные уведомления')
			dispatch(getNotification())
			return data
		} catch (error) {
			toastError('Ошибка при изменении уведомления')
			return rejectWithValue({ message: 'Ошибка при изменении уведомления' })
		}
	}
)

///delete
export const deleteNotification = createAsyncThunk(
	'notification/deleteNotification',
	async (id: number, { rejectWithValue, dispatch }) => {
		try {
			const token = getToken()
			const { data } = await api.deleteNotificationReq(token, id)
			dispatch(getNotification())
			return data
		} catch (error) {
			toastError('Ошибка при удалении')
			return rejectWithValue({ message: 'Ошибка при удалении' })
		}
	}
)
