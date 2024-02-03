"use client";
import React from "react";
import Link from "next/link";
import { Box, Button, Grid, Typography } from "@mui/material";
import Logged from "@/components/ProfileMenu";
import NotLogged from "@/components/LoginMenu";

const IsLogged = false;

const Navbar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "primary.main",
        borderRadius: "10px",
        mb: 1,
      }}
    >
      <Box>
        <Link href="/">
          <Button variant="text">
            <Typography color="text.secondary" fontWeight={600}>
              Home
            </Typography>
          </Button>
        </Link>
      </Box>
      <Box>
        <Grid container alignItems="center" spacing={2}>
          <Grid item>
            <Link href="/creation">
              <Button variant="text">
                <Typography color="text.secondary" fontWeight={600}>
                  Creations
                </Typography>
              </Button>
            </Link>
          </Grid>
          <Grid item>
            <Link href="/creation/newcreation">
              <Button variant="text">
                <Typography color="text.secondary" fontWeight={600}>
                  New Creation
                </Typography>
              </Button>
            </Link>
          </Grid>
          <Grid item>{IsLogged ? <Logged /> : <NotLogged />}</Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Navbar;
