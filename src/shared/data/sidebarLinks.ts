import { ROUTES } from './Routes'
import HomeIcon from '@mui/icons-material/Home'
import WebStoriesIcon from '@mui/icons-material/WebStories'
import CreditScoreIcon from '@mui/icons-material/CreditScore'
import AutoStoriesIcon from '@mui/icons-material/AutoStories'
import RoomIcon from '@mui/icons-material/Room'
import { Roles } from '../enums'
import ArticleIcon from '@mui/icons-material/Article'
import PhoneIcon from '@mui/icons-material/Phone'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import NotificationsIcon from '@mui/icons-material/Notifications'
import FolderIcon from '@mui/icons-material/Folder'
import GroupIcon from '@mui/icons-material/Group'
import WalletIcon from '@mui/icons-material/Wallet'
import SubtitlesIcon from '@mui/icons-material/Subtitles'
const shared = [
	{
		text: 'Главная',
		href: '/',
		roles: [Roles.SuperAdmin, Roles.Manager],
		icon: HomeIcon,
	},
]
const superadminLinks = [
	{
		text: 'Заявки на кредит',
		href: ROUTES.loan_applications,
		roles: [Roles.SuperAdmin],
		icon: CreditScoreIcon,
	},
	{
		text: 'Папки документов и лицензий',
		href: ROUTES.documents_and_licenses_folders,
		roles: [Roles.SuperAdmin],
		icon: FolderIcon,
	},
	{
		text: 'Документы',
		href: ROUTES.documents,
		roles: [Roles.SuperAdmin],
		icon: ArticleIcon,
	},

	{
		text: 'Филиалы',
		href: ROUTES.branches,
		roles: [Roles.SuperAdmin],
		icon: RoomIcon,
	},
	{
		text: 'Контакты',
		href: ROUTES.contacts,
		roles: [Roles.SuperAdmin],
		icon: PhoneIcon,
	},
	{
		text: 'Регионы',
		href: ROUTES.regions,
		roles: [Roles.SuperAdmin],
		icon: LocationOnIcon,
	},
	{
		text: 'Главные Сторисы',
		href: ROUTES.top_stories,
		roles: [Roles.SuperAdmin],
		icon: WebStoriesIcon,
	},
	{
		text: 'Сторисы',
		href: ROUTES.stories,
		roles: [Roles.SuperAdmin],
		icon: AutoStoriesIcon,
	},
	{
		text: 'Уведомления',
		href: ROUTES.notifications,
		roles: [Roles.SuperAdmin],
		icon: NotificationsIcon,
	},
	{
		text: 'Пользователи',
		href: ROUTES.users,
		roles: [Roles.SuperAdmin],
		icon: GroupIcon,
	},
	{
		text: 'Доступные кредиты',
		href: ROUTES.available_loans,
		roles: [Roles.SuperAdmin],
		icon: SubtitlesIcon,
	},
	{
		text: 'Провайдер кошелька',
		href: ROUTES.walletprovider,
		roles: [Roles.SuperAdmin],
		icon: WalletIcon,
	},
]
const links = [...shared, ...superadminLinks]
export default links
