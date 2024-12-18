import { ROUTES } from '../../shared/data'
import { Outlet } from 'react-router-dom'
import { AvailableLoansList } from './ui/list'

const AvailableLoansRoute = {
	path: ROUTES.available_loans,
	element: <Outlet />,
	children: [
		{
			path: '',
			element: <AvailableLoansList />,
		},
	],
}

export default AvailableLoansRoute
