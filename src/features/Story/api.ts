import apiRoot, { addAuthHeader } from '../../app/api'
import { StoryCrud } from './type'

const api = {
	///get
	getStoryReq: (token: string) => {
		return apiRoot.get<StoryCrud>(
			`/admin/addtional/story/`,
			addAuthHeader(token)
		)
	},

	///post
	createStoryReq: (token: string, story: StoryCrud) => {
		return apiRoot.post<StoryCrud>(`//admin/addtional/story/`, story, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
	},

	///getById
	getStoryByIdReq: (token: string, id: number) => {
		return apiRoot.get<StoryCrud>(
			`/admin/addtional/story/${id}/`,
			addAuthHeader(token)
		)
	},

	///update PUT
	updateStoryReq: (token: string, story: StoryCrud) => {
		return apiRoot.put<StoryCrud>(
			`/admin/addtional/story/${story.id}/`,
			story,
			addAuthHeader(token)
		)
	},

	///patch
	partiallyUpdateStoryReq: (token: string, story: StoryCrud) => {
		return apiRoot.patch<StoryCrud>(
			`/admin/addtional/story/${story.id}/`,
			story,
			addAuthHeader(token)
		)
	},

	////delete
	deleteStoryReq: (token: string, id: number) => {
		return apiRoot.delete<StoryCrud>(
			`/admin/addtional/story/${id}/`,
			addAuthHeader(token)
		)
	},
}

export default api
