import apiRoot, { addAuthHeader } from "../../app/api"
import { Region } from "./type"

export const api = {
  ///get
  getRegionsReq: (token: string) => {
    return apiRoot.get<Region>(`/admin/addtional/region/`, addAuthHeader(token))
  },

  ///post
  createRegionReq: (token: string, region: Region) => {
    return apiRoot.post<Region>(
      `/admin/addtional/region/`,
      region,
      addAuthHeader(token),
    )
  },

  ///getById
  getRegionByIdReq: (token: string, id: number) => {
    return apiRoot.get<Region>(
      `/admin/addtional/region/${id}/`,
      addAuthHeader(token),
    )
  },

  ///update PUT
  updateRegionReq: (token: string, region: Region) => {
    return apiRoot.put<Region>(
      `/admin/addtional/region/${region.id}/`,
      region,
      addAuthHeader(token),
    )
  },

  ///patch
  partiallyUpdateRegionReq: (token: string, region: Region) => {
    return apiRoot.patch<Region>(
      `/admin/addtional/region/${region.id}/`,
      region,
      addAuthHeader(token),
    )
  },

  ////delete
  deleteRegionReq: (token: string, id: number) => {
    return apiRoot.delete<Region>(
      `/admin/addtional/region/${id}/`,
      addAuthHeader(token),
    )
  },
}
