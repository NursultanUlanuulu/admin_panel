import apiRoot from "../../app/api"
import { IProfile, LoginReq, LoginRes } from "./type"

export const api = {
  login: (data: LoginReq) => apiRoot.post<LoginRes>(`/admin/user/login/`, data),

  getProfileReq: (token: string) => {
    return apiRoot.get<IProfile>(`/v1/user/me/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  },
}
