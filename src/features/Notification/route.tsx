import React from "react";
import { ROUTES } from "../../shared/data";
import { Outlet } from "react-router-dom";
import Notification from "./ui/list/Notification";

const Route = {
  path: ROUTES.notifications,
  element: <Outlet />,
  children: [
    {
      path: "",
      element: <Notification />,
    },
  ],
};

export default Route;
