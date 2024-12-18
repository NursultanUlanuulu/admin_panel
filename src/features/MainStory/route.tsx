import { Outlet } from "react-router-dom";
import { ROUTES } from "../../shared/data";
import MainStory from "./ui/list";

const Route = {
  path: ROUTES.top_stories,
  element: <Outlet />,
  children: [
    {
      path: "",
      element: <MainStory />,
    },
  ],
};

export default Route;
