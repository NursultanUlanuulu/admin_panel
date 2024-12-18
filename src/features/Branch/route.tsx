import { Outlet } from "react-router-dom"
import { BranchList } from "./ui/list"
import { ROUTES } from "@/shared/data"

export const BranchRoute = {
  path: ROUTES.branches,
  element: <Outlet />,
  children: [
    {
      path: "",
      element: <BranchList />,
    },
  ],
}
