"use client";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Switch from "@mui/material/Switch";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function NewCreation() {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [keyCode, setKeyCode] = React.useState("");
  const [encrypted, setEncrypted] = React.useState(false);

  const handleSave = () => {
    // Aquí puedes manejar la lógica para guardar la creación en la base de datos
    console.log("Name:", name);
    console.log("Description:", description);
    console.log("KeyCode:", keyCode);
    console.log("Encrypted:", encrypted);
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
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sx={{ mb: 2 }}>
          <Typography>Description</Typography>
          <TextField
            fullWidth
            multiline
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sx={{ mb: 2 }}>
          <Typography>Key Code</Typography>
          <TextField
            fullWidth
            value={keyCode}
            onChange={(e) => setKeyCode(e.target.value)}
          />
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <Typography sx={{ flexGrow: 1 }}>Encrypt</Typography>
        <Switch
          checked={encrypted}
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
