import { createSlice } from '@reduxjs/toolkit'
import { StatusResponse } from '../../../shared/enums'
import { Available_loans } from '../type'
import { getAvailableLoansList } from './actions'

interface InitialState {
	getAvailableLoans: {
		status: StatusResponse
		message?: string
	}
	loans: Available_loans
}

const initialState: InitialState = {
	getAvailableLoans: {
		status: StatusResponse.INITIAL,
		message: '',
	},
	loans: [],
}

const availableLoansSlice = createSlice({
	name: 'loans',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(getAvailableLoansList.fulfilled, (state, { payload }) => {
				state.getAvailableLoans.status = StatusResponse.SUCCESS
				state.loans = payload
			})
			.addCase(getAvailableLoansList.pending, state => {
				state.getAvailableLoans.status = StatusResponse.LOADING
			})
			.addCase(getAvailableLoansList.rejected, (state, { payload }) => {
				state.getAvailableLoans.status = StatusResponse.ERROR
				state.getAvailableLoans.message = payload as string
			})
	},
})

export default availableLoansSlice.reducer
