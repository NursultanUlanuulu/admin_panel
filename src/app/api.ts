import axios from "axios"
import { toastError } from "../shared/libs"
const apiRoot = axios.create({
  baseURL: "http://176.126.167.44:62280/api",
})

export const addAuthHeader = (token: string) => ({
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
})

apiRoot.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        window.localStorage.removeItem("accessToken")

        // Проверка текущего URL
        if (window.location.pathname !== "/auth") {
          window.location.href = "/auth"
        }
      }
    } else {
      toastError("Ошибка")
      console.error("Network or server error", error)
    }
    return Promise.reject(error)
  },
)

export default apiRoot
