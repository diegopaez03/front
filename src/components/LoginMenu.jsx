"use client";
import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Tooltip from "@mui/material/Tooltip";
import { useRouter } from "next/navigation";

const LoginMenu = () => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogin = () => {
    router.push("/join/login");
    handleClose();
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignUp = () => {
    router.push("/join/signup");
    handleClose();
  };

  return (
    <>
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          aria-controls="account-menu"
          aria-haspopup="true"
          aria-expanded={Boolean(anchorEl) ? "true" : undefined}
          sx={{ width: 50, height: 50 }}
        >
          <AccountCircleIcon sx={{ color: "white", width: 50, height: 50 }} />
        </IconButton>
      </Tooltip>
      <Menu
        id="account-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleLogin}>Login</MenuItem>
        <MenuItem onClick={handleSignUp}>Sign Up</MenuItem>
      </Menu>
    </>
  );
};

export default LoginMenu;
