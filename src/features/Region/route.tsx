import { Outlet } from "react-router-dom";
import { ROUTES } from "../../shared/data";
import RegionList from "./ui/list";

const Route = {
  path: ROUTES.regions,
  element: <Outlet />,
  children: [
    {
      path: "",
      element: <RegionList />,
    },
  ],
};
export default Route
