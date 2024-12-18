import { Outlet } from "react-router-dom";
import { ROUTES } from "../../shared/data";
import Story from "./ui/list";

const Route = {
  path: ROUTES.stories,
  element: <Outlet />,
  children: [
    {
      path: "",
      element: <Story />,
    },
  ],
};

export default Route;
