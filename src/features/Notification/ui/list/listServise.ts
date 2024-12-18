import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../app/store'
import { StatusResponse } from '../../../../shared/enums'
import { deleteNotification, getNotification } from '../../store/actions'
import {
	selectCreateNotificationStatus,
	selectDeleteNotificationStatus,
	selectGetNotificationStatus,
	selectNotification,
} from '../../store/selectors'
import { Notification } from '../../type'

type Modal = 'delete' | 'create' | 'edit'

const NotificationServise = () => {
	const [modal, setModal] = useState<{
		[key: string]: boolean
	}>({
		delete: false,
		info: false,
		edit: false,
	})

	const [activeNotification, setActiveNotification] = useState(
		{} as Notification
	)

	const headerLinks = [
		'сообщение',
		'имя',
		'фамилия',
		'номер',
		'время добовления',
		'прочитано?',
	]

	const notification = useAppSelector(selectNotification)

	const dispatch = useAppDispatch()

	const getNotificationStatus = useAppSelector(selectGetNotificationStatus)

	const isCreatingNotificationSuccess =
		useAppSelector(selectCreateNotificationStatus) === StatusResponse.SUCCESS

	const isUpdateNotificationSuccess =
		useAppSelector(selectCreateNotificationStatus) === StatusResponse.SUCCESS

	const isDelateNotificationSuccess =
		useAppSelector(selectDeleteNotificationStatus) === StatusResponse.SUCCESS

	////get
	useEffect(() => {
		dispatch(getNotification())
	}, [])

	///create
	useEffect(() => {
		if (isCreatingNotificationSuccess && modal.create) {
			setModal({ ...modal, create: false })
		}
	}, [isCreatingNotificationSuccess])

	////update
	useEffect(() => {
		if (isUpdateNotificationSuccess && modal.edit) {
			setModal({ ...modal, edit: false })
		}
	}, [isUpdateNotificationSuccess])

	/////dalete
	useEffect(() => {
		if (isDelateNotificationSuccess && modal.delete) {
			setModal({ ...modal, delete: false })
		}
	}, [isDelateNotificationSuccess])

	//   useEffect(() => {
	//     if ((isUpdateRegionSuccess || isDelateRegionSuccess) && modal.info) {
	//       setModal({ ...modal, info: false });
	//     }
	//   }, [isUpdateRegionSuccess, isDelateRegionSuccess]);

	const handleModal = (type: Modal) => {
		setModal({ ...modal, [type]: !modal[type] })
	}

	const handleDeleteNotification = () => {
		dispatch(deleteNotification(activeNotification.id ?? 0))
	}

	const handleChangeActiveNotification = (notification: Notification) => {
		setActiveNotification(notification)
	}
	return {
		headerLinks,
		notification,
		modal,
		activeNotification,
		getNotificationStatus,
		handleModal,
		handleDeleteNotification,
		handleChangeActiveNotification,
	}
}

export default NotificationServise
