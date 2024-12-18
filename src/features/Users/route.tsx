import { Outlet } from 'react-router-dom'
import { ROUTES } from '../../shared/data'
import { UsersList } from './ui/list'

const UsersRoute = {
	path: ROUTES.users,
	element: <UsersList />,
	children: {
		path: '',
		element: <Outlet />,
	},
}
export default UsersRoute
