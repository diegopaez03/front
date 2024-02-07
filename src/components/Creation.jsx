"use client";
import React, { useState } from "react";
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
  Switch,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Creation = ({ creation }) => {
  const [editable, setEditable] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [name, setName] = useState(creation.creationName);
  const [description, setDescription] = useState(creation.creationDescription);
  const [encrypted, setEncrypted] = useState(creation.encrypted);

  const handleEditClick = () => {
    setEditable(true);
  };

  const handleCancelEdit = () => {
    setName(creation.creationName);
    setDescription(creation.creationDescription);
    setEncrypted(creation.encrypted);
    setEditable(false);
  };

  const handleSave = () => {
    // Aquí puedes implementar la lógica para guardar los cambios utilizando una petición PATCH con axios
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
          }}
        >
          <Typography variant="h5" color="text.secondary">
            {editable ? (
              <TextField
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
              />
            ) : (
              creation.creationName
            )}
          </Typography>
        </Box>
        <Typography variant="body1">
          Description:{" "}
          {editable ? (
            <TextField
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              fullWidth
            />
          ) : (
            creation.creationDescription
          )}
        </Typography>
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
          <Button
            variant="contained"
            color={encrypted ? "success" : "error"}
            onClick={() => setEncrypted(!encrypted)}
          >
            {encrypted ? "Encrypted" : "Unencrypted"}
          </Button>
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
              <Button
                variant="contained"
                fullWidth
                onClick={handleSave}
              >
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
