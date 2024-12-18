import { BrowserRouter } from "react-router-dom"
import MyRoutes from "./router"
import { useAppDispatch } from "./store"
import { useEffect } from "react"
import { ToastContainer } from "react-toastify"
import { getProfileInfo } from "@/features/Auth/store/actions"

export const App = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getProfileInfo())
  }, [])

  return (
    <BrowserRouter>
      <MyRoutes />
      <ToastContainer />
    </BrowserRouter>
  )
}
