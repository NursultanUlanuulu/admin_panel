import apiRoot, { addAuthHeader } from '../../app/api'
import { Contact, EditContact } from './type'

const api = {
	///get
	getContactsReq: (token: string) => {
		return apiRoot.get<Contact>(
			`/admin/addtional/contact/`,
			addAuthHeader(token)
		)
	},

	///getById
	getByIdReq: (token: string, id: number) => {
		return apiRoot.get<Contact>(
			`/admin/addtional/contact/${id}`,
			addAuthHeader(token)
		)
	},

	///post
	createContactReq: (token: string, contact: Contact) => {
		return apiRoot.post<Contact>(
			`/admin/addtional/contact/`,
			contact,
			addAuthHeader(token)
		)
	},

	///getById
	// getContactByIdReq: (token: string, id: number) => {
	// 	return apiRoot.get<EditContact>(
	// 		`/admin/addtional/branch/${id}/`,
	// 		addAuthHeader(token)
	// 	)
	// },

	///put
	updateContactReq: (token: string, contact: Contact) => {
		return apiRoot.put<EditContact>(
			`/admin/addtional/contact/${contact.id}/`,
			contact,
			addAuthHeader(token)
		)
	},

	///pach
	pachContactReq: (token: string, contact: Contact) => {
		return apiRoot.patch<EditContact>(
			`/admin/addtional/contact/${contact.id}/`,
			contact,
			addAuthHeader(token)
		)
	},

	///delete
	delateContactReq: (token: string, id: number) => {
		return apiRoot.delete<Contact>(
			`/admin/addtional/contact/${id}/`,
			addAuthHeader(token)
		)
	},
}

export default api
