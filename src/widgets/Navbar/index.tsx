import React, { useState } from "react";
import { Menu as MenuIcon } from "@mui/icons-material";
import PersonIcon from "@mui/icons-material/Person";
import {
  AppBar,
  Menu,
  MenuItem,
  Toolbar,
  IconButton,
  Typography,
  Skeleton,
  Badge,
  ClickAwayListener,
} from "@mui/material";
import { useNavigate } from "react-router";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import { selectNotifications } from "@/features/Notification/store/selectors";
// import { getNotifications } from "@/features/Notification/store/actions";
// import { Notification } from "@/features/Notification";
import FlexBetween from "../../shared/ui/FlexBetween";
// import { useAppDispatch, useAppSelector } from "../../app/store";
import { tokensDark } from "../../app/providers/ThemeProvider";
import { logout } from "../../features/Auth/store/slice";
import { useAppDispatch, useAppSelector } from "../../app/store";
import { selectNotification } from "../../features/Notification/store/selectors";
import { getNotification } from "../../features/Notification/store/actions";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Notification from "../../features/Notification/ui/list/Notification";
// import { Notification } from "../../features/Notification/Notification";


interface NavbarProp {
  isNonMobile: boolean;
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
}
const Navbar: React.FC<NavbarProp> = ({
  isNonMobile,
  isSidebarOpen,
  setIsSidebarOpen,
  loading,
}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [notification, setNotification] = React.useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const { list: notifications } = useAppSelector(selectNotification);
  const isOpen = Boolean(anchorEl);
  const handleClick = (event: any) => setAnchorEl(event.currentTarget);
  const handleClose = () => {
    setAnchorEl(null);
    logoutBtn();
  };
  const logoutBtn = async () => {
    await dispatch(logout());
    navigate("/auth/");
  };
  React.useEffect(() => {
    dispatch(getNotification());
  }, []);
  return (
    <AppBar
      sx={{
        position: "static",
        background: "none",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <FlexBetween>
          {isNonMobile ? (
            <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
              <MenuIcon />
            </IconButton>
          ) : (
            <Typography
              sx={{
                color: tokensDark.greenAccent[400],
                fontSize: "26px",
                cursor: "pointer",
              }}
              variant="h4"
              fontWeight="bold"
              onClick={() => navigate("/")}
            >
              ELET
            </Typography>
          )}
        </FlexBetween>
        <FlexBetween gap="1.5rem">
          {loading ? (
            <Skeleton
              variant="circular"
              animation="wave"
              width={35}
              height={35}
            />
          ) : (
            <FlexBetween>
              <FlexBetween>
                <IconButton
                  onClick={() => setNotification(true)}
                  className="myAppBar__links__profile__title"
                >
                  <Badge
                    // badgeContent={
                    //   notifications.filter(
                    //     (notification) => !notification.watched
                    //   )
                    //     ? notifications.filter(
                    //         (notification) => !notification.watched
                    //       ).length
                    //     : 0
                    // }
                    color="primary"
                  >
                    <NotificationsIcon
                      sx={{
                        fontSize: "23px",
                        cursor: "pointer",
                      }}
                    />
                  </Badge>
                </IconButton>
                {notification && (
                  <ClickAwayListener onClickAway={() => setNotification(false)}>
                    <div>
                      <Notification />
                    </div>
                  </ClickAwayListener>
                )}
                <Menu
                  anchorEl={anchorEl}
                  open={isOpen}
                  onClose={() => setAnchorEl(null)}
                  anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                  PaperProps={{
                    style: {
                      background: "#115D36",
                      color: "white",
                    },
                  }}
                >
                  {/* <MenuItem
                    onClick={() => {
                      setAnchorEl(null);
                      navigate("/edit_account");
                    }}
                  >
                    Редактировать профиль
                  </MenuItem> */}
                  <MenuItem onClick={handleClose}>Выйти</MenuItem>
                </Menu>
              </FlexBetween>
              <IconButton onClick={handleClick}>
                <PersonIcon
                  sx={{
                    fontSize: "23px",
                    cursor: "pointer",
                  }}
                />
              </IconButton>
            </FlexBetween>
          )}
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
