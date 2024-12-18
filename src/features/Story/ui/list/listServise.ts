import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../app/store'
import { StatusResponse } from '../../../../shared/enums'
import { deleteStory, getStory } from '../../store/actions'
import {
	selectCreateStoryStatus,
	selectDeleteStoryStatus,
	selectGetStoryStatus,
	selectStory,
} from '../../store/selectors'
import { StoryCrud } from '../../type'

type Modal = 'delete' | 'create' | 'edit'

const ListServise = () => {
	const [modal, setModal] = useState<{
		[key: string]: boolean
	}>({
		delete: false,
		info: false,
		edit: false,
	})

	const [activeStory, setActiveStory] = useState({} as StoryCrud)

	const headerLinks = [
		'сториc',
		'ссылка',
		'Главный сториС',
		'просмотры пользователей',
		'видео',
		'время добовления',
		'активно?',
	]

	const story = useAppSelector(selectStory)

	console.log(story)

	const dispatch = useAppDispatch()

	const getStoryStatus = useAppSelector(selectGetStoryStatus)

	const isCreatingStorySuccess =
		useAppSelector(selectCreateStoryStatus) === StatusResponse.SUCCESS

	const isUpdateStorySuccess =
		useAppSelector(selectCreateStoryStatus) === StatusResponse.SUCCESS

	const isDelateStorySuccess =
		useAppSelector(selectDeleteStoryStatus) === StatusResponse.SUCCESS

	////get
	useEffect(() => {
		dispatch(getStory())
	}, [])

	///create
	useEffect(() => {
		if (isCreatingStorySuccess && modal.create) {
			setModal({ ...modal, create: false })
		}
	}, [isCreatingStorySuccess])

	useEffect(() => {
		if (isUpdateStorySuccess && modal.edit) {
			setModal({ ...modal, edit: false })
		}
	}, [isUpdateStorySuccess])

	useEffect(() => {
		if (isDelateStorySuccess && modal.delete) {
			setModal({ ...modal, delete: false })
		}
	}, [isDelateStorySuccess])

	const handleModal = (type: Modal) => {
		setModal({ ...modal, [type]: !modal[type] })
	}

	const handleDeleteStory = () => {
		dispatch(deleteStory(activeStory.id ?? 0))
	}

	const handleChangeActiveStory = (story: StoryCrud) => {
		setActiveStory(story)
	}
	return {
		headerLinks,
		story,
		modal,
		activeStory,
		getStoryStatus,
		handleModal,
		handleDeleteStory,
		handleChangeActiveStory,
	}
}

export default ListServise
