import { RootState } from '../../../app/store'

export const selectUsers = (state: RootState) => state.users.users

export const selectGetUsersStatus = (state: RootState) =>
	state.users.getUsersList.status
