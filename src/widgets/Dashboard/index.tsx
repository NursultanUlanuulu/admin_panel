import { Box, Button, Grid } from '@mui/material'
import { useNavigate } from 'react-router'
import Header from '../Header'
// import { Roles } from "../../shared/enums";
import { tokensDark } from '../../app/providers/ThemeProvider'
import { selectUserProfile } from '../../features/Auth/store/selectors'
import { useAppSelector } from '../../app/store'
import { getFullName } from '../../shared/libs'
import { getRole } from '../../shared/libs/utils/getRole'

const Dashboard = () => {
	const { user } = useAppSelector(selectUserProfile)
	const navigate = useNavigate()
	const goToPath = (path: string) => {
		navigate(path)
	}

	const superadminNavs = [
		{ text: 'Запросы на кредит', value: '/loan_requests' },
		{
			text: 'Папки документов и лицензий',
			value: '/documents_and_licenses_folders',
		},
		{
			text: 'Документы',
			value: '/documents',
		},
		{ text: 'Главные Сторисы', value: '/top_stories' },
		{ text: 'Сторисы', value: '/stories' },
		{ text: 'Филиалы', value: '/branches' },
		{ text: 'Контакты', value: '/contacts' },
		{ text: 'Регионы', value: '/regions' },
		{ text: 'Уведомления', value: '/notifications' },
		{ text: 'Пользователи', value: '/users' },
	]

	return (
		<Box>
			<Header
				title={`Добро пожаловать ${getFullName(
					user.last_name || '',
					user.phone || '',
					user.first_name || ''
				)}`}
				subtitle={`${getRole(user.role)}`}
			></Header>
			{/* {user && user.role && user.role === Roles.SuperAdmin ? ( */}
			<Box sx={{ mt: '20px' }}>
				<Grid container spacing={2} alignItems='center' mb='30px'>
					{superadminNavs.map(nav => {
						return (
							<Grid key={nav.text} item xl={2} lg={3} md={3} sm={4} xs={6}>
								<Button
									onClick={() => goToPath(nav.value)}
									fullWidth
									key={nav.text}
									variant='contained'
									sx={{
										width: '200px',
										height: '70px',
										padding: '12px',
										transition: 'all 0.4s ease',
										background: tokensDark.greenAccent[500],
										'&:hover': {
											background: tokensDark.greenAccent[900],
										},
									}}
								>
									{nav.text}
								</Button>
							</Grid>
						)
					})}
				</Grid>
			</Box>
			{/* ) : null} */}
		</Box>
	)
}

export default Dashboard
