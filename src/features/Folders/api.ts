import apiRoot, { addAuthHeader } from "../../app/api"
import { LoanApplications } from "./type"

const api = {
  getLoanApplicationsReq: (token: string) => {
    return apiRoot.get<LoanApplications>(
      `/admin/loan/loan-requests/list/`,
      addAuthHeader(token),
    )
  },
}
export default api
