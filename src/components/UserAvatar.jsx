import React from "react";
import Avatar from "@mui/material/Avatar";

const UserAvatar = ({ username, size }) => {
  // Obtengo la primera letra del nombre de usuario
  const firstLetter = username ? username.charAt(0).toUpperCase() : "";

  return (
    <Avatar
      sx={{
        bgcolor: "primary.main",
        width: `${size}rem`,
        height: `${size}rem`,
        fontSize: `${size / 1.5}rem`,
      }}
    >
      {firstLetter}
    </Avatar>
  );
};

export default UserAvatar;
