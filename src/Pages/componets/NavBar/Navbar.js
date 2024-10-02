import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close"; // Import Close Icon
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [userActive, setUserActive] = useState("");
  const handleSetActive = (route) => {
    setUserActive(route); // Update the active route
  };

  const getLink = (item) => {
    switch (item) {
      case "Home":
        return "/";
      case "About us":
        return "/about";
      case "Contact us":
        return "/contact";
      default:
        return "/";
    }
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [menuOpen, setMenuOpen] = React.useState(false); // Track if menu is open
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const currentPath = location.pathname;

  const handleMenuToggle = (event) => {
    if (menuOpen) {
      setAnchorEl(null);
      setMenuOpen(false);
    } else {
      setAnchorEl(event.currentTarget);
      setMenuOpen(true);
    }
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMenuOpen(false);
  };

  const menuRoute = [
    {
      label: "Home",
      route: "/",
    },
    {
      label: "About us",
      route: "/about",
    },
    {
      label: "Contact us",
      route: "/contact",
    },
    {
      label: "WhitePaper",
      route: "https://evox-whitepaper.gitbook.io/evox-whitepaper",
    },
  ];

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "transparent", boxShadow: "none" }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0px",
        }}
        className="navmain__"
      >
        {isMobile ? (
          <>
            <IconButton edge="start" color="inherit" onClick={handleMenuToggle}>
              {menuOpen ? (
                <CloseIcon />
              ) : (
                <MenuIcon style={{ position: "relative", zIndex: "50" }} />
              )}
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              keepMounted
              PaperProps={{
                style: {
                  width: "100%",
                  height: "100%",
                  maxWidth: "unset", // Fullscreen width
                  maxHeight: "unset", // Fullscreen height
                  backgroundColor: "#2E2E2E",
                  display: "flex",
                  flexDirection: "column",
                  padding: "48px 45px 0px 41px",
                  top: "0",
                  left: "0",
                },
              }}
            >
              <div
                className="logodiv"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <img src="/ContactUS_Images/logo1.svg" alt="/" />
                <IconButton
                  edge="start"
                  color="inherit"
                  onClick={handleMenuToggle}
                >
                  <CloseIcon sx={{ fill: "#FFFFFF" }} />
                </IconButton>
              </div>
              <div
                style={{
                  paddingLeft: "36px",
                  paddingTop: "120px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "40px",
                }}
              >
                {menuRoute.map((item, index) => (
                  <Link
                    to={item?.route}
                    key={index}
                    style={{ textDecoration: "none", display: "flex" }}
                  >
                    <MenuItem
                      key={item}
                      className="mobilenav"
                      sx={{ gap: "40px" }}
                      style={{
                        fontWeight:
                          location.pathname === item.route ? "700" : "400",
                        minWidth: "unset",
                        minHeight: "unset",
                        color:
                          location.pathname === item?.route
                            ? "#FFFFFF"
                            : "#C4C4C4",
                      }}
                      onClick={() => handleSetActive(item?.route)}
                    >
                      {item?.label}
                    </MenuItem>
                  </Link>
                ))}
              </div>
            </Menu>
          </>
        ) : (
          <div style={{ display: "flex" }} className="menuitemsnavbar">
            {menuRoute.map((item, index) => (
              <Link
                to={item?.route}
                key={index}
                style={{ textDecoration: "none" }}
                onClick={(e) => {
                  if (index === menuRoute.length - 1) {
                    e.preventDefault();
                    window.open(item?.route, "_blank", "noopener,noreferrer");
                  } else {
                    handleSetActive(item?.route);
                  }
                }}
              >
                <Button
                  key={item}
                  className="navoptions"
                  sx={{
                    fontWeight:
                      location.pathname === item?.route ? "700" : "400",
                    minWidth: "unset",
                    color:
                      location.pathname === item?.route ? "#FFFFFF" : "#C4C4C4",
                  }}
                  onClick={() => handleSetActive(item?.route)}
                >
                  {item?.label}
                </Button>
              </Link>
            ))}
          </div>
        )}
        <div className="logodiv">
          <img src="/ContactUS_Images/logo1.svg" alt="" />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
