import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../api'
import { MainStory } from '../type'
import { getToken } from '@/shared/enums'
import { toastError, toastSuccess } from '@/shared/libs'

///get
export const getMainStory = createAsyncThunk(
	'mainStory/getMainStory',
	async (_, { rejectWithValue }) => {
		try {
			const token = getToken()
			const { data } = await api.getMainStoryReq(token)
			return data
		} catch (error) {
			toastError('Ошибка при загрузке данных')
			return rejectWithValue({ message: 'Ошибка при загрузке данных' })
		}
	}
)

////post
export const createMainStory = createAsyncThunk(
	'mainStory/createMain',
	async (
		{ mainStory, imageFile }: { mainStory: MainStory; imageFile: File },
		{ rejectWithValue, dispatch }
	) => {
		try {
			const token = getToken()
			const { data } = await api.createRMainStoryReq(
				token,
				mainStory,
				imageFile
			)
			toastSuccess('Вы успешно добавили главный сторис')
			dispatch(getMainStory())
			return data
		} catch (error) {
			toastError('Ошибка при добавлении контакта')
			return rejectWithValue({ message: 'Ошибка при добавлении контакта' })
		}
	}
)

///getByID
export const getMainStoryById = createAsyncThunk(
	'mainStory/getMainStoryById',
	async (id: number, { rejectWithValue }) => {
		try {
			const token = getToken()
			const { data } = await api.getMainStoryByIdReq(token, id)
			return data
		} catch (error) {
			toastError('Ошибка при загрузке данных')
			return rejectWithValue({ message: 'Ошибка при загрузке данных' })
		}
	}
)

////put
export const updateMainStory = createAsyncThunk(
	'mainStory/updateMainStory',
	async (mainStory: MainStory, { rejectWithValue, dispatch }) => {
		try {
			const token = getToken()
			const { data } = await api.updateMainStoryReq(token, mainStory)
			toastSuccess('Вы успешно изменили данные ')
			dispatch(getMainStory())
			return data
		} catch (error) {
			toastError('Ошибка при изменении данные')
			return rejectWithValue({ message: 'Ошибка при изменении контакта' })
		}
	}
)

////patch
export const partiallyUpdateMainStory = createAsyncThunk(
	'mainStory/partiallyUpdateMainStory',
	async (mainStory: MainStory, { rejectWithValue, dispatch }) => {
		try {
			const token = getToken()
			const { data } = await api.partiallyUpdateMainStoryReq(token, mainStory)
			toastSuccess('Вы успешно изменили данные')
			dispatch(getMainStory())
			return data
		} catch (error) {
			toastError('Ошибка при изменении данных')
			return rejectWithValue({ message: 'Ошибка при изменении данных' })
		}
	}
)

///delete
export const deleteMainStory = createAsyncThunk(
	'mainStory/deleteMainStory',
	async (id: number, { rejectWithValue, dispatch }) => {
		try {
			const token = getToken()
			const { data } = await api.deleteMainStoryReq(token, id)
			toastSuccess('Вы успешно удалили главный сторис')
			dispatch(getMainStory())
			return data
		} catch (error) {
			toastError('Ошибка при удалении')
			return rejectWithValue({ message: 'Ошибка при удалении' })
		}
	}
)
