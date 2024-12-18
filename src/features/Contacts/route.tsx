import { Outlet } from 'react-router-dom'
import { ROUTES } from '../../shared/data'
import Contacts from './UI'
// import ContactInfo from "./UI/info";

const ContactsRoute = {
	path: ROUTES.contacts,
	element: <Contacts />,

	// element: <Outlet />,
	children: [
		{
			path: '',
			// element: <Contacts />,
			element: <Outlet />,

			// children: [
			//   {
			//     path: ":id",
			//     element: <ContactInfo />,
			//   },
			// ],
		},
	],
}

export default ContactsRoute
