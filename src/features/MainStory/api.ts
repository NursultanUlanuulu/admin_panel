import apiRoot, { addAuthHeader } from "../../app/api"
import { MainStory } from "./type"

const api = {
  ///get
  getMainStoryReq: (token: string) => {
    return apiRoot.get<MainStory>(
      `/admin/addtional/main_story/`,
      addAuthHeader(token),
    )
  },

  ///post
  createRMainStoryReq: (
    token: string,
    mainStory: MainStory,
    imageFile: File,
  ) => {
    const formData = new FormData()
    formData.append("image", imageFile)
    formData.append("is_active", mainStory.is_active)

    return apiRoot.post<MainStory>(`/admin/addtional/main_story/`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    })
  },

  ///getById
  getMainStoryByIdReq: (token: string, id: number) => {
    return apiRoot.get<MainStory>(
      `/admin/addtional/main_story/${id}/`,
      addAuthHeader(token),
    )
  },

  ///update PUT
  updateMainStoryReq: (token: string, mainStory: MainStory) => {
    return apiRoot.put<MainStory>(
      `/admin/addtional/region/${mainStory.id}/`,
      mainStory,
      addAuthHeader(token),
    )
  },

  // /patch
  partiallyUpdateMainStoryReq: (token: string, mainStory: MainStory) => {
    return apiRoot.patch<MainStory>(
      `/admin/addtional/main_story/${mainStory.id}/`,
      mainStory,
      addAuthHeader(token),
    )
  },

  ////delete
  deleteMainStoryReq: (token: string, id: number) => {
    return apiRoot.delete<MainStory>(
      `/admin/addtional/main_story/${id}/`,
      addAuthHeader(token),
    )
  },
}

export default api
