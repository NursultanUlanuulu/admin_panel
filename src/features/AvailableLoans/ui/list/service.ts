import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../app/store'
import { selectGetLoansStatus, selectLoans } from '../../store/selectors'
import { getAvailableLoansList } from '../../store/actions'
import { Available_loan } from '../../type'

type Modal = 'info'

const AvailableLoansService = () => {
	const [modal, setModal] = useState<{ [key: string]: boolean }>({
		info: false,
	})

	const [activeLoan, setActiveLoan] = useState<Available_loan | null>(null)

	const headerLinks = [
		'НАЗВАНИЕ',
		'ОПИСАНИЕ',
		'ТИП РАСЧЕТА',
		'ДАТА АКТУАЛЬНОСТИ',
		'ДАТА СОЗДАНИЯ',
	]

	const availableLoans = useAppSelector(selectLoans)

	const dispatch = useAppDispatch()

	const getAvailableLoansStatus = useAppSelector(selectGetLoansStatus)

	useEffect(() => {
		dispatch(getAvailableLoansList())
	}, [])

	const handleModal = (type: Modal) => {
		setModal(prev => ({ ...prev, [type]: !prev[type] }))
	}

	const handleChangeActiveLoan = (loan: Available_loan) => {
		setActiveLoan(loan)
	}
	return {
		headerLinks,
		availableLoans,
		modal,
		activeLoan,
		getAvailableLoansStatus,
		handleModal,
		handleChangeActiveLoan,
	}
}
export default AvailableLoansService
