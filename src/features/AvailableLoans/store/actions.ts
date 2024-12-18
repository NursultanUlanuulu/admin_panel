import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../api'
import { toastError } from '../../../shared/libs'
import { getToken } from '@/shared/enums'

export const getAvailableLoansList = createAsyncThunk(
	'loans/getAvailableLoansList',
	async (_, { rejectWithValue }) => {
		try {
			const token = getToken()
			const { data } = await api.getAvailableLoansReq(token)
			return data
		} catch (error) {
			toastError('Ошибка при загрузке данных')
			return rejectWithValue({ message: 'Ошибка при загрузке данных' })
		}
	}
)
