import apiRoot, { addAuthHeader } from "../../app/api"
import { Users } from "./type"

const api = {
  getUsersReq: (token: string) => {
    return apiRoot.get<Users>(`/admin/user/list/`, addAuthHeader(token))
  },
}
export default api
