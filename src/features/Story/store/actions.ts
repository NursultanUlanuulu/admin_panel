import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../api'
import { StoryCrud } from '../type'
import { getToken } from '@/shared/enums'
import { toastError, toastSuccess } from '@/shared/libs'

///get all
export const getStory = createAsyncThunk(
	'story/getStory',
	async (_, { rejectWithValue }) => {
		try {
			const token = getToken()
			const { data } = await api.getStoryReq(token)
			return data
		} catch (error) {
			toastError('Ошибка при загрузке данных')
			return rejectWithValue({ message: 'Ошибка при загрузке данных' })
		}
	}
)

////post
export const createStory = createAsyncThunk(
	'story/createStory',
	async (story: StoryCrud, { rejectWithValue, dispatch }) => {
		try {
			const token = getToken()
			const { data } = await api.createStoryReq(token, story)
			toastSuccess('Вы успешно добавили новый сториc')
			dispatch(getStory())
			return data
		} catch (error) {
			toastError('Ошибка при добавлении сториса')
			return rejectWithValue({ message: 'Ошибка при добавлении сториса' })
		}
	}
)

///getByID
export const getStoryById = createAsyncThunk(
	'story/getMainStoryById',
	async (id: number, { rejectWithValue }) => {
		try {
			const token = getToken()
			const { data } = await api.getStoryByIdReq(token, id)
			return data
		} catch (error) {
			toastError('Ошибка при загрузке данных')
			return rejectWithValue({ message: 'Ошибка при загрузке данных' })
		}
	}
)

////put
export const updateStory = createAsyncThunk(
	'story/updateStory',
	async (story: StoryCrud, { rejectWithValue, dispatch }) => {
		try {
			const token = getToken()
			const { data } = await api.updateStoryReq(token, story)
			toastSuccess('Вы успешно изменили данные сториса')
			dispatch(getStory())
			return data
		} catch (error) {
			toastError('Ошибка при изменении сториса')
			return rejectWithValue({ message: 'Ошибка при изменении сториса' })
		}
	}
)

////patch
export const partiallyUpdateStory = createAsyncThunk(
	'story/partiallyUpdateStory',
	async (story: StoryCrud, { rejectWithValue, dispatch }) => {
		try {
			const token = getToken()
			const { data } = await api.partiallyUpdateStoryReq(token, story)
			toastSuccess('Вы успешно изменили данные сториса')
			dispatch(getStory())
			return data
		} catch (error) {
			toastError('Ошибка при изменении сториса')
			return rejectWithValue({ message: 'Ошибка при изменении сториса' })
		}
	}
)

///delete
export const deleteStory = createAsyncThunk(
	'story/deleteStory',
	async (id: number, { rejectWithValue, dispatch }) => {
		try {
			const token = getToken()
			const { data } = await api.deleteStoryReq(token, id)
			dispatch(getStory())
			return data
		} catch (error) {
			toastError('Ошибка при удалении')
			return rejectWithValue({ message: 'Ошибка при удалении' })
		}
	}
)
