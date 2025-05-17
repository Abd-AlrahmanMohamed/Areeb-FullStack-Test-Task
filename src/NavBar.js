import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  MenuItem,
  Menu,
  Button,
  Badge,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import EventIcon from "@mui/icons-material/Event";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import getUserBookings from "./api/Bookings/GetUserBookings";
import { AddShoppingCart } from "@mui/icons-material";

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");
  const [adminMenuAnchor, setAdminMenuAnchor] = useState(null);
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);

  const login = useSelector((state) => state.loginData.login);
  const rolesData = localStorage.getItem("roles");

  useEffect(() => {
    const userName = localStorage.getItem("name");
    const uId = localStorage.getItem("id");
    if (userName) setName(userName);
    if (uId) setUserId(uId);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    localStorage.removeItem("name");
    localStorage.removeItem("roles");
    setName(null);
    navigate("/login");
  };

  const getBookings = (userBookingId) => {
    dispatch(getUserBookings(userBookingId));
  };

  // Admin Menu handlers
  const handleAdminMenuClick = (event) => {
    setAdminMenuAnchor(event.currentTarget);
  };
  const handleAdminMenuClose = () => {
    setAdminMenuAnchor(null);
  };
  const handleAdminNavigate = (path) => {
    navigate(path);
    handleAdminMenuClose();
  };

  // Profile Menu handlers
  const handleProfileMenuOpen = (event) => {
    setProfileAnchorEl(event.currentTarget);
  };
  const handleProfileMenuClose = () => {
    setProfileAnchorEl(null);
  };

  const isProfileMenuOpen = Boolean(profileAnchorEl);
  const isAdminMenuOpen = Boolean(adminMenuAnchor);

  const profileMenu = (
    <Menu
      anchorEl={profileAnchorEl}
      open={isProfileMenuOpen}
      onClose={handleProfileMenuClose}
    >
      <MenuItem
        onClick={() => {
          handleLogout();
          handleProfileMenuClose();
        }}
      >
        <LogoutIcon sx={{ mr: 1 }} /> Sign Out
      </MenuItem>
    </Menu>
  );

  const adminMenu = (
    <Menu
      anchorEl={adminMenuAnchor}
      open={isAdminMenuOpen}
      onClose={handleAdminMenuClose}
    >
      <MenuItem onClick={() => handleAdminNavigate("/allUsers")}>
        <PeopleIcon sx={{ mr: 1 }} />
        All Users
      </MenuItem>
      <MenuItem onClick={() => handleAdminNavigate("/addEvent")}>
        <EventIcon sx={{ mr: 1 }} />
        Add Event
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" color="primary">
        <Toolbar>
          {/* Admin Toggle Button */}
          {rolesData && rolesData.includes("Admin") && (
            <>
              <ToggleButton
                value="admin"
                onClick={handleAdminMenuClick}
                sx={{ mr: 2 }}
                color="primary" // This sets the toggle button active color
              >
                <AdminPanelSettingsIcon sx={{ color: "inherit", mr: 1 }} />
                Options
              </ToggleButton>
              {adminMenu}
            </>
          )}

          {/* Home Button */}
          <IconButton color="inherit" component={Link} to="/">
            <HomeIcon />
            <Typography sx={{ ml: 1 }}>Home</Typography>
          </IconButton>

          {/* User Info */}
          {name && (
            <Button
              color="inherit"
              component={Link}
              to={`/user/${userId}`}
              sx={{ ml: 2 }}
            >
              <AccountCircle sx={{ mr: 1 }} /> {name}
            </Button>
          )}

          {/* Cart Button */}
          {rolesData && rolesData.includes("User") && (
            <IconButton
              color="inherit"
              component={Link}
              to={`/cart/${userId}`}
              onClick={() => getBookings(userId)}
              sx={{ ml: 2 }}
            >
              <Badge color="error">
                <AddShoppingCart />
              </Badge>
            </IconButton>
          )}

          {/* Login or Profile Menu */}
          <Box sx={{ marginLeft: "auto" }}>
            {name ? (
              <IconButton color="inherit" onClick={handleProfileMenuOpen}>
                <AccountCircle />
              </IconButton>
            ) : (
              <Button color="inherit" onClick={() => navigate("/login")}>
                Login
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      {profileMenu}
    </Box>
  );
};

export default NavBar;
