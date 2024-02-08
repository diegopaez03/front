"use client";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import axios from "axios";
import { useRouter } from "next/navigation";
import { homeRedirect } from "@/utils/redirect";

export default function SignIn() {
  homeRedirect();
  const [errorMessage, setErrorMessage] = React.useState("");
  const router = useRouter();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    try {
      const response = await axios.post("http://localhost:4000/auth/login", {
        username: data.get("username"),
        password: data.get("password"),
      });
      if (response.data.message) {
        setErrorMessage(response.data.message);
      }
      if (response.data.loggedIn) {
        localStorage.setItem("token", response.data.token);
        router.push("/");
        setTimeout(() => {
          window.location.reload();
        }, 200);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography>Username</Typography>
              <TextField
                required
                fullWidth
                id="username"
                name="username"
                autoComplete="username"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Password</Typography>
              <TextField
                required
                fullWidth
                name="password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="caption" color={"error"}>{errorMessage}</Typography>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/join/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
