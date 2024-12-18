import { RootState } from '../../../app/store'

export const selectWallet = (state: RootState) => state.wallet.wallet

export const selectGetWalletStatus = (state: RootState) =>
	state.wallet.getWalletProvider.status
