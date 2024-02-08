"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import PropTypes from "prop-types";
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import getUser from "@/utils/getUser";
import loginRedirect from "@/utils/redirect";

const Creation = ({ creation }) => {
  loginRedirect();
  const router = useRouter();

  const [editable, setEditable] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [name, setName] = useState(creation.creationName);
  const [description, setDescription] = useState(creation.creationDescription);
  const [encrypted, setEncrypted] = useState(creation.encrypted);

  const [errorMessage, setErrorMessage] = useState("");

  const handleEditClick = () => {
    setEditable(true);
  };

  const handleCancelEdit = () => {
    setName(creation.creationName);
    setDescription(creation.creationDescription);
    setEncrypted(creation.encrypted);
    setEditable(false);
  };

  const handleSave = async (event) => {
    event.preventDefault();
    console.log("id de la creacion: " + creation.creationId);

    try {
      const dataToSend = {
        creationName: name,
        creationDescription: description,
        encrypted: encrypted,
      };

      const response = await axios.patch(
        `http://localhost:4000/creation/${creation.creationId}`,
        dataToSend
      );
      console.log(dataToSend);
      console.log(response);
      if (response.data.message) {
        setErrorMessage(response.data.message);
      } else {
        // Recargar pagina
        window.location.reload();
      }
    } catch (error) {
      console.error("Error:", error);
    }
    setEditable(false);
  };

  const handleConfirmDelete = () => {
    // Lógica para eliminar
    setShowConfirmDialog(false);
  };

  const handleCancelDelete = () => {
    setShowConfirmDialog(false);
  };

  return (
    <>
      <Box
        sx={{
          p: 2,
          border: 1,
          borderColor: "primary.main",
          borderRadius: 1,
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            backgroundColor: "primary.main",
            p: 1,
            mb: 1,
            borderRadius: 2,
            color: "text.secondary",
            typography: "h4",
          }}
        >
          {editable ? (
            <TextField
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
            />
          ) : (
            creation.creationName
          )}
        </Box>
        <Typography variant="h6">
        Description:{" "}
        </Typography>
        {editable ? (
          <TextField
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
          />
        ) : (
          <Typography variant="body1">
            {creation.creationDescription}
          </Typography>
        )}
        <Box
          sx={{
            backgroundColor: "primary.main",
            p: 1,
            mt: 2,
            mb: 2,
            borderRadius: 2,
          }}
        >
          <Typography variant="body1" color="text.secondary">
            Key Code
          </Typography>
          <Typography variant="body1" fontSize="1.6rem" color="text.secondary">
            {creation.keyCode}
          </Typography>
        </Box>
        <Typography variant="body1" color="text.primary">
          {" "}
          {editable ? (
            <Button
              variant="contained"
              color={encrypted ? "success" : "error"}
              onClick={() => setEncrypted(!encrypted)}
            >
              {encrypted ? "Encrypted" : "Unencrypted"}
            </Button>
          ) : (
            <Button variant="contained" color={encrypted ? "success" : "error"}>
              {encrypted ? "Encrypted" : "Unencrypted"}
            </Button>
          )}
        </Typography>
        <Box alignContent={"center"} justifyContent={"center"}>
          {editable ? (
            <>
              <Button
                variant="outlined"
                fullWidth
                onClick={handleCancelEdit}
                sx={{ mt: 2, mb: 1 }}
              >
                Cancel
              </Button>
              <Button variant="contained" fullWidth onClick={handleSave}>
                Save
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="outlined"
                fullWidth
                startIcon={<EditIcon />}
                onClick={handleEditClick}
                sx={{ mt: 2, mb: 1 }}
              >
                Edit
              </Button>
              <Button
                variant="outlined"
                fullWidth
                onClick={() => setShowConfirmDialog(true)}
                startIcon={<DeleteIcon />}
              >
                Delete
              </Button>
            </>
          )}
        </Box>
      </Box>
      <Dialog
        open={showConfirmDialog}
        onClose={() => setShowConfirmDialog(false)}
      >
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to delete this creation?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelDelete} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmDelete} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

Creation.propTypes = {
  creation: PropTypes.shape({
    creationId: PropTypes.number.isRequired,
    creationName: PropTypes.string.isRequired,
    creationDescription: PropTypes.string.isRequired,
    keyCode: PropTypes.string.isRequired,
    encrypted: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Creation;
