import { Outlet } from "react-router-dom"
import { DocumentList } from "./ui/list"
import { ROUTES } from "@/shared/data"

export const DocumentRoute = {
  path: ROUTES.documents,
  element: <Outlet />,
  children: [
    {
      path: "",
      element: <DocumentList />,
    },
  ],
}

// export default Route
