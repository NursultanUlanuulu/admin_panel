import { Outlet } from "react-router-dom"
import { DocumentFolder } from "./ui/list"
import { ROUTES } from "@/shared/data"

export const DocumentFolderRoute = {
  path: ROUTES.documents_and_licenses_folders,
  element: <Outlet />,
  children: [
    {
      path: "",
      element: <DocumentFolder />,
    },
  ],
}
