import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../app/store'
import { StatusResponse } from '../../../../shared/enums'
import { deleteMainStory, getMainStory } from '../../store/actions'
import {
	selectCreateMainStoryStatus,
	selectDeleteMainStoryStatus,
	selectGetMainStoryStatus,
	selectMainStory,
	selectUpdateMainStoryStatus,
} from '../../store/selectors'
import { MainStory } from '../../type'
// import {
//   selectCreateRegionStatus,
//   selectDeleteRegionStatus,
//   selectGetRegionStatus,
//   selectRegion,
//   selectUpdateRegionStatus,
// } from "../../store/selectors";
// import { deleteRegion, getRegions } from "../../store/actions";
// import { Region } from "../../type";

type Modal = 'delete' | 'create' | 'edit'

const ListServise = () => {
	const [modal, setModal] = useState<{
		[key: string]: boolean
	}>({
		delete: false,
		info: false,
		edit: false,
	})

	const [activeMainStory, setActiveMainStory] = useState({} as MainStory)

	const headerLinks = ['СТОРИС', 'ВРЕМЯ СОЗДАНИЯ', 'СТОРИС АКТИВНЫЙ?']

	const mainStory = useAppSelector(selectMainStory)

	const dispatch = useAppDispatch()

	const getMainStoryStatus = useAppSelector(selectGetMainStoryStatus)

	const isCreatingMainStorySuccess =
		useAppSelector(selectCreateMainStoryStatus) === StatusResponse.SUCCESS

	const isUpdateMainStorySuccess =
		useAppSelector(selectUpdateMainStoryStatus) === StatusResponse.SUCCESS

	const isDelateMainStorySuccess =
		useAppSelector(selectDeleteMainStoryStatus) === StatusResponse.SUCCESS

	////get
	useEffect(() => {
		dispatch(getMainStory())
	}, [])

	///create
	useEffect(() => {
		if (isCreatingMainStorySuccess && modal.create) {
			setModal({ ...modal, create: false })
		}
	}, [isCreatingMainStorySuccess])

	////update
	useEffect(() => {
		if (isUpdateMainStorySuccess && modal.edit) {
			setModal({ ...modal, edit: false })
		}
	}, [isUpdateMainStorySuccess])

	//delate
	useEffect(() => {
		if (isDelateMainStorySuccess && modal.delete) {
			setModal({ ...modal, delete: false })
		}
	}, [isDelateMainStorySuccess])

	//   useEffect(() => {
	//     if ((isUpdateRegionSuccess || isDelateRegionSuccess) && modal.info) {
	//       setModal({ ...modal, info: false });
	//     }
	//   }, [isUpdateRegionSuccess, isDelateRegionSuccess]);

	const handleModal = (type: Modal) => {
		setModal({ ...modal, [type]: !modal[type] })
	}

	const handleDeleteMainStory = () => {
		dispatch(deleteMainStory(activeMainStory.id ?? 0))
	}

	const handleChangeActiveMainStory = (mainStory: MainStory) => {
		setActiveMainStory(mainStory)
	}
	return {
		headerLinks,
		mainStory,
		modal,
		activeMainStory,
		getMainStoryStatus,
		handleModal,
		handleDeleteMainStory,
		handleChangeActiveMainStory,
	}
}

export default ListServise
