import { Box, useMediaQuery } from "@mui/material"
import { useState } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { StatusResponse } from "@/shared/enums"
import Sidebar from "../Sidebar"
import { selectUserProfile } from "@/features/Auth/store/selectors"
import { useAppSelector } from "@/app/store"
import Navbar from "../Navbar"

const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width: 640px)")

  const { status } = useAppSelector(selectUserProfile)

  const isLoading = status === StatusResponse.LOADING
  const [isSidebarOpen, setIsSidebarOpen] = useState(
    !isNonMobile ? false : true,
  )

  // const accessToken = window.localStorage.getItem("accessToken")
  // const token = accessToken
  // if (!token) return <Navigate to="/auth" />

  return (
    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
      <Sidebar
        isNonMobile={isNonMobile}
        isSidebarOpen={isSidebarOpen}
        drawerWidth={250}
        loading={isLoading}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Box flexGrow={1} sx={{ overflowX: "auto" }}>
        <Navbar
          isNonMobile={isNonMobile}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          loading={isLoading}
        />
        <Box m="2rem 1rem">
          <Outlet />
        </Box>
      </Box>
    </Box>
  )
}

export default Layout
