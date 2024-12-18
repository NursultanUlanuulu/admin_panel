import apiRoot, { addAuthHeader } from '../../app/api'
import { Notification } from './type'

const api = {
	///get
	getNotificationReq: (token: string) => {
		return apiRoot.get<Notification>(
			`/admin/notification/`,
			addAuthHeader(token)
		)
	},

	///post
	createNotificationReq: (token: string, notification: Notification) => {
		return apiRoot.post<Notification>(
			`/admin/notification/`,
			notification,
			addAuthHeader(token)
		)
	},

	///getById
	getNotificationByIdReq: (token: string, id: number) => {
		return apiRoot.get<Notification>(
			`/admin/notification/${id}/`,
			addAuthHeader(token)
		)
	},

	///update PUT
	updateNotificationReq: (token: string, notification: Notification) => {
		return apiRoot.put<Notification>(
			`/admin/notification/${notification.id}/`,
			notification,
			addAuthHeader(token)
		)
	},

	///patch
	partiallyUpdateNotificationReq: (
		token: string,
		notification: Notification
	) => {
		return apiRoot.patch<Notification>(
			`/admin/notification/${notification.id}/`,
			notification,
			addAuthHeader(token)
		)
	},

	////delete
	deleteNotificationReq: (token: string, id: number) => {
		return apiRoot.delete<Notification>(
			`/admin/notification/${id}/`,
			addAuthHeader(token)
		)
	},
}

export default api
