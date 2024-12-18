import { Bounce, toast, ToastOptions } from 'react-toastify'
const toastConfig: ToastOptions = {
	style: {},
	position: 'top-right',
	autoClose: 4000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
	theme: 'light',
	transition: Bounce,
}
const errorToastConfig: ToastOptions = {
	style: {},
	position: 'top-right',
	autoClose: 4000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
	theme: 'light',
	transition: Bounce,
}

export const toastSuccess = (message: string) => {
	toast.success(message, toastConfig)
}
export const toastError = (message: string) => {
	toast.error(message, errorToastConfig)
}
export const toastInfo = (message: string) => {
	toast.info(message, toastConfig)
}
