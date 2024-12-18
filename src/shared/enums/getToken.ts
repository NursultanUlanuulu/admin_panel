import { toastError } from '../libs'

export const getToken = () => {
	const token = window.localStorage.getItem('accessToken')
	if (!token) {
		toastError('Войдите в систему')
		throw new Error('Токен доступа отсутствует')
	}
	return token
}
