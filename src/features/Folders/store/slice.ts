// import { createSlice } from '@reduxjs/toolkit'
// import { StatusResponse } from '../../../shared/enums'
// import { getLoanApplicationsList } from './action'
// import { LoanApplications } from '../type'

// interface InitialState {
// 	getLoanApplicationsList: {
// 		status: StatusResponse
// 		message?: string
// 	}
// 	loanApplication: LoanApplications
// }

// const initialState: InitialState = {
// 	getLoanApplicationsList: {
// 		status: StatusResponse.INITIAL,
// 		message: '',
// 	},
// 	loanApplication: [],
// }

// const loanApplicationSlice = createSlice({
// 	name: 'loanApplication',
// 	initialState,
// 	reducers: {},
// 	extraReducers(builder) {
// 		builder
// 			.addCase(getLoanApplicationsList.fulfilled, (state, { payload }) => {
// 				state.getLoanApplicationsList.status = StatusResponse.SUCCESS
// 				state.loanApplication = payload
// 			})
// 			.addCase(getLoanApplicationsList.pending, state => {
// 				state.getLoanApplicationsList.status = StatusResponse.LOADING
// 			})
// 			.addCase(getLoanApplicationsList.rejected, (state, { payload }) => {
// 				state.getLoanApplicationsList.status = StatusResponse.ERROR
// 				state.getLoanApplicationsList.message = payload as string
// 			})
// 	},
// })

// export default loanApplicationSlice.reducer
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { StatusResponse } from "../../../shared/enums"
import { getLoanApplicationsList } from "./action"
import { LoanApplications } from "../type"

interface GetLoanApplicationsListState {
  status: StatusResponse
  message?: string
}

interface InitialState {
  getLoanApplicationsList: GetLoanApplicationsListState
  loanApplication: LoanApplications[]
}

const initialState: InitialState = {
  getLoanApplicationsList: {
    status: StatusResponse.INITIAL,
    message: "",
  },
  loanApplication: [],
}

const loanApplicationSlice = createSlice({
  name: "loanApplication",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getLoanApplicationsList.fulfilled, (state, action) => {
        state.getLoanApplicationsList.status = StatusResponse.SUCCESS
        state.loanApplication = action.payload
      })
      .addCase(getLoanApplicationsList.pending, (state) => {
        state.getLoanApplicationsList.status = StatusResponse.LOADING
      })
      .addCase(getLoanApplicationsList.rejected, (state, action) => {
        state.getLoanApplicationsList.status = StatusResponse.ERROR
        state.getLoanApplicationsList.message = action.payload
      })
  },
})

export default loanApplicationSlice.reducer
