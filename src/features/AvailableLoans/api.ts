import apiRoot, { addAuthHeader } from '../../app/api'
import { Available_loans } from './type'

const api = {
	getAvailableLoansReq: (token: string) => {
		return apiRoot.get<Available_loans>(
			`/admin/loan/available-products/list/`,
			addAuthHeader(token)
		)
	},
}
export default api
