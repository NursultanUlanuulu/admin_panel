import apiRoot, { addAuthHeader } from "../../app/api"
import { DocumentFolder } from "./type"

export const api = {
  ///get
  getDocumentFolderReq: (token: string) => {
    return apiRoot.get<DocumentFolder>(
      `/admin/addtional/document_folder/`,
      addAuthHeader(token),
    )
  },

  ///post
  createDocumentFolderReq: (token: string, folder: DocumentFolder) => {
    const formData = new FormData()
    formData.append("name", folder.name)
    if (folder.imageFile) {
      formData.append("image", folder.imageFile)
    }
    formData.append("position", folder.position.toString())

    return apiRoot.post<DocumentFolder>(
      `/admin/addtional/document_folder/`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      },
    )
  },

  documentFolderById: (token: string, id: number) => {
    return apiRoot.get<DocumentFolder>(
      `/admin/addtional/document_folder/${id}/`,
      addAuthHeader(token),
    )
  },

  ////PUT
  updateDocumentFolder: (token: string, folder: DocumentFolder) => {
    const formData = new FormData()
    formData.append("name", folder.name)
    if (folder.imageFile) {
      formData.append("image", folder.imageFile)
    }
    formData.append("position", folder.position.toString())

    return apiRoot.put<DocumentFolder>(
      `/admin/addtional/document_folder/${folder.id}/`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      },
    )
  },

  ///pach
  pachDocumentFolderReq: (token: string, folder: DocumentFolder) => {
    const formData = new FormData()
    formData.append("name", folder.name)
    if (folder.imageFile) {
      formData.append("image", folder.imageFile)
    }
    formData.append("position", folder.position.toString())
    return apiRoot.patch<DocumentFolder>(
      `/admin/addtional/document_folder/${folder.id}/`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      },
    )
  },

  ///delete
  delateDocumentFolderReq: (token: string, id: number) => {
    return apiRoot.delete<DocumentFolder>(
      `/admin/addtional/document_folder/${id}/`,
      addAuthHeader(token),
    )
  },
}
