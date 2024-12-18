import apiRoot, { addAuthHeader } from "../../app/api"
import { Branch } from "./type"

export const api = {
  getBranchReq: (token: string) => {
    return apiRoot.get<Branch>(`/admin/addtional/branch/`, addAuthHeader(token))
  },

  createBranchReq: (token: string, branch: Branch) => {
    return apiRoot.post<Branch>(
      `/admin/addtional/branch/`,
      branch,
      addAuthHeader(token),
    )
  },

  detail: (token: string, id: number) => {
    return apiRoot.get<Branch>(
      `/admin/addtional/branch/${id}/`,
      addAuthHeader(token),
    )
  },

  updateBranch: (token: string, branch: Branch) => {
    return apiRoot.put<Branch>(
      `/admin/addtional/branch/${branch.id}/`,
      branch,
      addAuthHeader(token),
    )
  },

  pachBranchReq: (token: string, branch: Branch) => {
    return apiRoot.patch<Branch>(
      `/admin/addtional/branch/${branch.id}/`,
      branch,
      addAuthHeader(token),
    )
  },

  delateContactReq: (token: string, id: number) => {
    return apiRoot.delete<Branch>(
      `/admin/addtional/branch/${id}/`,
      addAuthHeader(token),
    )
  },
}
