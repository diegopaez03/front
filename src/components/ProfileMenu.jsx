"use client";
import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Tooltip from "@mui/material/Tooltip";
import { useRouter } from "next/navigation";


const AccountCircleButton = () => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSeeProfile = () => {
    router.push("/profile")
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push("/");
    setAnchorEl(null);
    setTimeout(() => {
      window.location.reload();
    }, 500);
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
        <MenuItem onClick={handleSeeProfile}>See profile</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default AccountCircleButton;
