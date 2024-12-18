import * as yup from 'yup'
import { useAppDispatch, useAppSelector } from '../../../../app/store'
import { StatusResponse } from '../../../../shared/enums'
import { partiallyUpdateContact, updateContact } from '../../store/actions'
import {
	selectPartiallyUpdateContactStatusPatch,
	selectUpdateContactStatus,
} from '../../store/selectors'
import { Contacts, EditContact } from '../../type'

const validationSchema = yup.object().shape({
	name: yup.string().required('Обязательное поле'),
	contact: yup.string().required('Обязательное поле'),
	position: yup.number().required('Обязательное поле'),
})

const EditContactServise = (contact: Contacts) => {
	const dispatch = useAppDispatch()
	const isEditLoading =
		useAppSelector(selectUpdateContactStatus) === StatusResponse.LOADING
	const load =
		useAppSelector(selectPartiallyUpdateContactStatusPatch) ===
		StatusResponse.LOADING

	const initialValues: EditContact = {
		id: contact.id,
		name: contact.name,
		contact: contact.contact,
		position: contact.position,
	}

	const onSubmit = (values: EditContact) => {
		dispatch(updateContact({ ...values, id: contact.id }))
		dispatch(partiallyUpdateContact({ ...values, id: contact.id }))
	}

	return {
		initialValues,
		validationSchema,
		isEditLoading,
		load,
		onSubmit,
	}
}

export default EditContactServise
