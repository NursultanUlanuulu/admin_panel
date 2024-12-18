// import { useEffect, useState } from 'react'
// import { useAppDispatch, useAppSelector } from '../../../../app/store'
// import {
// 	selectGetLoanApplicationStatus,
// 	selectloanApplication,
// } from '../../store/selectors'
// import { getLoanApplicationsList } from '../../store/action'
// import { LoanApplication } from '../../type'

// type Modal = 'info'

// const Service = () => {
// 	const [modal, setModal] = useState<{ [key: string]: boolean }>({
// 		info: false,
// 	})
// 	const [activeLoan, setActiveLoan] = useState<LoanApplication | null>(null)

// 	const headerLinks = [
// 		'ID',
// 		'ПОЛЬЗОВАТЕЛЬ',
// 		'СУММА ЗАЯВКИ',
// 		'ДАТА ЗАЯВКИ',
// 		'ДАТА СОЗДАНИЯ',
// 		'СТАТУС',
// 	]

// 	const loanApplication = useAppSelector(selectloanApplication)

// 	const dispatch = useAppDispatch()

// 	const getLoanApplicationStatus = useAppSelector(
// 		selectGetLoanApplicationStatus
// 	)

// 	useEffect(() => {
// 		dispatch(getLoanApplicationsList())
// 	}, [])

// 	const handleModal = (type: Modal) => {
// 		setModal(prev => ({ ...prev, [type]: !prev[type] }))
// 	}

// 	const handleChangeActiveLoan = (loan: LoanApplication) => {
// 		setActiveLoan(loan)
// 	}
// 	return {
// 		headerLinks,
// 		loanApplication,
// 		modal,
// 		activeLoan,
// 		getLoanApplicationStatus,
// 		handleModal,
// 		handleChangeActiveLoan,
// 	}
// }
// export default Service
import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../../../app/store"
import {
  selectGetLoanApplicationsStatus,
  selectLoanApplication,
  // selectLoanApplicationsPagination,
} from "../../store/selectors"
import { getLoanApplicationsList } from "../../store/action"
import { LoanApplications } from "../../type"
import { log } from "console"

type Modal = "info"

const Service = () => {
  const [modal, setModal] = useState<{ [key: string]: boolean }>({
    info: false,
  })
  const [activeLoan, setActiveLoan] = useState<LoanApplications | null>(null)

  const headerLinks = [
    "ID",
    "ПОЛЬЗОВАТЕЛЬ",
    "СУММА ЗАЯВКИ",
    "ДАТА ЗАЯВКИ",
    "ДАТА СОЗДАНИЯ",
    "СТАТУС",
  ]

  const loanApplications = useAppSelector(selectLoanApplication)
  console.log(loanApplications)

  const pagination = useAppSelector(selectLoanApplicationsPagination)
  const getLoanApplicationStatus = useAppSelector(
    selectGetLoanApplicationsStatus,
  )

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getLoanApplicationsList())
  }, [dispatch])

  const handleModal = (type: Modal) => {
    setModal((prev) => ({ ...prev, [type]: !prev[type] }))
  }

  const handleChangeActiveLoan = (loan: LoanApplications) => {
    setActiveLoan(loan)
  }

  const loadPage = (url: string) => {
    dispatch(getLoanApplicationsList(url))
  }

  return {
    headerLinks,
    loanApplications,
    pagination,
    modal,
    activeLoan,
    getLoanApplicationStatus,
    handleModal,
    handleChangeActiveLoan,
    loadPage,
  }
}

export default Service
