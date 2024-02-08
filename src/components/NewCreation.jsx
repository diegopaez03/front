"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import TextField from "@mui/material/TextField";
import Switch from "@mui/material/Switch";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import axios from "axios";
import getUser from "@/utils/getUser";
import loginRedirect from "@/utils/redirect";

export default function NewCreation() {
  loginRedirect();
  const router = useRouter();

  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [keyCode, setKeyCode] = React.useState("");
  const [encrypted, setEncrypted] = React.useState(false);

  const [errorMessage, setErrorMessage] = React.useState("");

  const handleSave = async (event) => {
    event.preventDefault();

    try {
      const user = await axios.get(
        `http://localhost:4000/scientist/${getUser()}`
      );
      const userId = user.data.scientistId;

      const dataToSend = {
        creationName: name,
        creationDescription: description,
        keyCode: keyCode,
        encrypted: encrypted,
        scientist: {
          scientistId: userId,
          username: getUser(),
        },
      };

      const response = await axios.post(
        "http://localhost:4000/creation",
        dataToSend
      );
      if (response.data.message) {
        setErrorMessage(response.data.message);
      } else {
        // Redirigir a la página de creations/all/{username}
        router.push("/creations/all/" + getUser());
        setTimeout(() => {
          window.location.reload()
        }, 500);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
      <Typography variant="h5" gutterBottom align="center">
        New Creation
      </Typography>
      <Grid container spacing={0}>
        <Grid item xs={12} sx={{ mb: 2 }}>
          <Typography>Name</Typography>
          <TextField
            fullWidth
            required
            autoComplete="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            helperText={
              name !== "" && name.length >= 3 ? (
                <Typography variant="caption" color={"error"}>
                  {errorMessage}
                </Typography>
              ) : (
                ""
              )
            }
          />
        </Grid>
        <Grid item xs={12} sx={{ mb: 2 }}>
          <Typography>Description</Typography>
          <TextField
            fullWidth
            multiline
            id="description"
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sx={{ mb: 2 }}>
          <Typography>Key Code</Typography>
          <TextField
            fullWidth
            required
            id="keyCode"
            value={keyCode}
            onChange={(e) => {
              const value = e.target.value;
              if (value === "" || (/^\d+$/.test(value) && value.length <= 10)) {
                setKeyCode(value);
              }
            }}
            inputProps={{ maxLength: 10 }}
            helperText={
              keyCode !== "" &&
              (keyCode.length !== 10 || !/^\d+$/.test(keyCode)) ? (
                <Typography variant="caption" color={"error"}>
                  El código debe tener 10 caracteres numéricos
                </Typography>
              ) : (
                ""
              )
            }
          />
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <Typography sx={{ flexGrow: 1 }}>Encrypt</Typography>
        <Switch
          checked={encrypted}
          id="encrypt"
          onChange={(e) => setEncrypted(e.target.checked)}
          color="primary"
        />
      </Box>
      <Button variant="contained" onClick={handleSave} fullWidth>
        Save
      </Button>
    </Box>
  );
}
