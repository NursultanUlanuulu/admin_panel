import apiRoot, { addAuthHeader } from "@/app/api"
import { Document } from "./type"

export const api = {
  getDocumentReq: (token: string) => {
    return apiRoot.get<Document>(
      `/admin/addtional/document/`,
      addAuthHeader(token),
    )
  },

  createDocumentReq: (token: string, document: Document) => {
    return apiRoot.post<Document>(
      `/admin/addtional/document/`,
      document,
      addAuthHeader(token),
    )
  },

  detail: (token: string, id: number) => {
    return apiRoot.get<Document>(
      `/admin/addtional/document/${id}/`,
      addAuthHeader(token),
    )
  },

  updateDocument: (token: string, document: Document) => {
    return apiRoot.put<Document>(
      `/admin/addtional/document/${document.id}/`,
      document,
      addAuthHeader(token),
    )
  },

  pachDocumentReq: (token: string, document: Document) => {
    return apiRoot.patch<Document>(
      `/admin/addtional/document${document.id}/`,
      document,
      addAuthHeader(token),
    )
  },

  delateDocumentReq: (token: string, id: number) => {
    return apiRoot.delete<Document>(
      `/admin/addtional/document/${id}/`,
      addAuthHeader(token),
    )
  },
}
