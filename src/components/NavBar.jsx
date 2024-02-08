"use client";
import React from "react";
import Link from "next/link";
import { Box, Button, Grid, Typography } from "@mui/material";
import Logged from "@/components/ProfileMenu";
import NotLogged from "@/components/LoginMenu";
import getUser from "@/utils/getUser";
import { useRouter } from "next/navigation";

const IsLogged =
  typeof window !== "undefined" && Boolean(localStorage.getItem("token")); //Aqui simplemente es para saber si se esta logueado o no, se puede copiar y pegar

const Navbar = () => {
  const user = getUser();
  const router = useRouter();

  const handleGoToCreations = () => {
    setTimeout(() => {
      router.push("/creations/all/" + user);
    }, 100);
  };
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
            <Button
              variant="text"
              onClick={() => {
                handleGoToCreations();
              }}
            >
              <Typography color="text.secondary" fontWeight={600}>
                Creations
              </Typography>
            </Button>
          </Grid>
          <Grid item>
            <Link href="/creations/newcreation">
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
