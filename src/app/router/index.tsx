import { useRoutes } from "react-router"
import { CreateFoldersRoute } from "@/features/Folders"
import ContactsRoute from "@/features/Contacts"
import BranchRoute from "@/features/Branch"
import RegionRoute from "@/features/Region"
import DocumentRoute from "@/features/Document"
import MainStoryRoute from "@/features/MainStory"
import NotificationRoute from "@/features/Notification"
import StoryRoute from "@/features/Story"
import UsersRoute from "@/features/Users"
import AvailableLoansRoute from "@/features/AvailableLoans"
import WalletProviderRoute from "@/features/WalletProvider"
import { AuthRouter } from "@/features/Auth"
import DocumentFolderRoute from "@/features/DocumentsFolders"
import { Dashboard, ErrorPage, Layout } from "@/widgets"

const MyRoutes = () => {
  const myRouter = useRoutes([
    AuthRouter,
    {
      path: "",
      element: <Layout />,
      children: [
        { path: "", element: <Dashboard /> },
        CreateFoldersRoute,
        ContactsRoute,
        BranchRoute,
        RegionRoute,
        DocumentFolderRoute,
        DocumentRoute,
        MainStoryRoute,
        NotificationRoute,
        StoryRoute,
        UsersRoute,
        AvailableLoansRoute,
        WalletProviderRoute,
      ],
    },
    { path: "*", element: <ErrorPage type={404} /> },
  ])
  return myRouter
}
export default MyRoutes
