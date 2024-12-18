import { AnyAction, combineReducers, configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import branchSlice from '../features/Branch/store/slice'
import contactsSlice from '../features/Contacts/store/slice'
import documentSlice from '../features/Document/store/slice'
import documentFolderSlice from '../features/DocumentsFolders/store/slice'
import mainStorySlice from '../features/MainStory/store/slice'
import notificationSlice from '../features/Notification/store/slice'
import regionSlice from '../features/Region/store/slice'
import storySlice from '../features/Story/store/slice'
import authSlice from './../features/Auth/store/slice'
import userSlice from '../features/Users/store/slice'
import availableLoansSlice from '../features/AvailableLoans/store/slice'
import loanApplicationSlice from '../features/Folders/store/slice'
import walletProviderSlice from '../features/WalletProvider/store/slice'

const reducers = {
	auth: authSlice,
	contacts: contactsSlice,
	branch: branchSlice,
	region: regionSlice,
	documentFolder: documentFolderSlice,
	document: documentSlice,
	mainStory: mainStorySlice,
	notification: notificationSlice,
	story: storySlice,
	users: userSlice,
	loans: availableLoansSlice,
	loanApplication: loanApplicationSlice,
	wallet: walletProviderSlice,
}

const combinedReducer = combineReducers(reducers)

const rootReducer = (
	state: ReturnType<typeof combinedReducer> | undefined,
	action: AnyAction
) => {
	if (action.type === 'auth/logout') {
		return combinedReducer(undefined, action)
	}
	return combinedReducer(state, action)
}

export const store = configureStore({
	reducer: rootReducer,
	devTools: import.meta.env.MODE !== 'production',
})

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// Declare a global `env` object
declare global {
	interface ImportMeta {
		readonly env: Record<string, string>
	}
}
