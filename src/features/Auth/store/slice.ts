import { createSlice } from '@reduxjs/toolkit'
import { getProfileInfo, login } from './actions'
import { StatusResponse } from '../../../shared/enums'
import { IProfile } from '../type'

interface Login {
	status: StatusResponse
	token: string
	message?: string
}

interface GetProfile {
	status: StatusResponse
	user: IProfile
	message?: string
}

interface InitialState {
	login: Login
	getProfile: GetProfile
}

const initialState: InitialState = {
	login: {
		status: StatusResponse.INITIAL,
		token: '',
		message: '',
	},
	getProfile: {
		status: StatusResponse.INITIAL,
		user: {} as IProfile,
		message: '',
	},
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logout: state => {
			localStorage.clear()
			state.login.token = ''
		},
	},
	extraReducers(builder) {
		builder
			.addCase(login.fulfilled, (state, action) => {
				state.login.status = StatusResponse.SUCCESS
				state.login.token = action.payload.token
			})
			.addCase(login.pending, state => {
				state.login.status = StatusResponse.LOADING
			})
			.addCase(login.rejected, (state, action) => {
				state.login.status = StatusResponse.ERROR
				state.login.message = action.payload as string
			})
		builder
			.addCase(getProfileInfo.fulfilled, (state, action) => {
				state.getProfile.user = action.payload
				state.getProfile.status = StatusResponse.SUCCESS
			})
			.addCase(getProfileInfo.pending, state => {
				state.getProfile.status = StatusResponse.LOADING
			})
			.addCase(getProfileInfo.rejected, (state, action) => {
				state.getProfile.status = StatusResponse.ERROR
				state.getProfile.message = action.payload as string
			})
	},
})

export const { logout } = authSlice.actions
export default authSlice.reducer
