import { createSlice } from '@reduxjs/toolkit'
import { StatusResponse } from '../../../shared/enums'
import { WalletProvider, WalletProviders } from '../type'
import { getWalletProviderList } from './action'

interface InitialState {
	getWalletProvider: {
		status: StatusResponse
		message?: string
	}
	wallet: WalletProvider[]
}

const initialState: InitialState = {
	getWalletProvider: {
		status: StatusResponse.INITIAL,
		message: '',
	},
	wallet: [],
}

const walletProviderSlice = createSlice({
	name: 'wallet',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(getWalletProviderList.fulfilled, (state, { payload }) => {
				state.getWalletProvider.status = StatusResponse.SUCCESS
				state.wallet = payload
			})
			.addCase(getWalletProviderList.pending, state => {
				state.getWalletProvider.status = StatusResponse.LOADING
			})
			.addCase(getWalletProviderList.rejected, (state, { payload }) => {
				state.getWalletProvider.status = StatusResponse.ERROR
				state.getWalletProvider.message = payload as string
			})
	},
})

export default walletProviderSlice.reducer
