import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../app/store'
import { selectGetUsersStatus, selectUsers } from '../../store/selectors'
import { getUsersList } from '../../store/action'

const UsersService = () => {
	const headerLinks = ['НОМЕР', 'ИМЯ', 'ФАМИЛИЯ']

	const users = useAppSelector(selectUsers)

	const dispatch = useAppDispatch()

	const getUsersStatus = useAppSelector(selectGetUsersStatus)

	useEffect(() => {
		dispatch(getUsersList())
	}, [])

	return {
		headerLinks,
		users,
		getUsersStatus,
	}
}
export default UsersService
