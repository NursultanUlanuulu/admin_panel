import { Outlet } from 'react-router'
import { LoanApplicationList } from './ui/list'
import { ROUTES } from '../../shared/data'

const Route = {
	path: ROUTES.loan_applications,
	element: <Outlet />,
	children: [{ path: '', element: <LoanApplicationList /> }],
}

export default Route
