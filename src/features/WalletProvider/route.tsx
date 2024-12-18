import { ROUTES } from '../../shared/data'
import { Outlet } from 'react-router-dom'
import { WalletProviderList } from './ui/list'

const WalletProviderRoute = {
	path: ROUTES.walletprovider,
	element: <Outlet />,
	children: [
		{
			path: '',
			element: <WalletProviderList />,
		},
	],
}

export default WalletProviderRoute
