import apiRoot, { addAuthHeader } from '../../app/api'
import { WalletProvider } from './type'

const api = {
	getWalletProviderReq: (token: string) => {
		return apiRoot.get<WalletProvider>(
			`/admin/loan/wallet-providers/list/`,
			addAuthHeader(token)
		)
	},
}
export default api
