import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../app/store'
import { selectGetWalletStatus, selectWallet } from '../../store/selectors'
import { getWalletProviderList } from '../../store/action'

const Service = () => {
	const headerLinks = ['ИЗОБРАЖЕНИЕ', 'НАЗВАНИЕ', 'ID ПРОВАЙДЕРА В СИСТЕМЕ']

	const wallet = useAppSelector(selectWallet)

	const dispatch = useAppDispatch()

	const getWalletStatus = useAppSelector(selectGetWalletStatus)

	useEffect(() => {
		dispatch(getWalletProviderList())
	}, [])

	return {
		headerLinks,
		wallet,
		getWalletStatus,
	}
}
export default Service
