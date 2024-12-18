import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../api'
import { getToken } from '@/shared/enums'
import { toastError } from '@/shared/libs'

export const getWalletProviderList = createAsyncThunk(
	'walletProvider/getWalletProviderList',
	async (_, { rejectWithValue }) => {
		try {
			const token = getToken()
			const { data } = await api.getWalletProviderReq(token)
			return data
		} catch (error) {
			toastError('Ошибка при загрузке данных')
			return rejectWithValue({ message: 'Ошибка при загрузке данных' })
		}
	}
)
