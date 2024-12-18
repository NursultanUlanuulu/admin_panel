import { RootState } from '../../../app/store'

export const selectLoans = (state: RootState) => state.loans.loans

export const selectGetLoansStatus = (state: RootState) =>
	state.loans.getAvailableLoans.status
