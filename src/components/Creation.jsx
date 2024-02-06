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
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Creation = ({ creation }) => {
  const [editable, setEditable] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  const handleEditClick = () => {
    setEditable(true);
  };

  const handleConfirmDelete = () => {
    // Lógica para eliminar
    setShowConfirmDialog(false);
  };

  const handleCancelDelete = () => {
    setShowConfirmDialog(false);
  };

  return (
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
        <Typography variant="h6" color="text.secondary">
          {creation.creationName}
        </Typography>
      </Box>
      <Typography variant="body1">
        Description: {creation.creationDescription}
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
          color={creation.encrypted ? "success" : "error"}
        >
          {creation.encrypted ? "Encrypted" : "Unencrypted"}
        </Button>
      </Typography>
      <Box >
      <Button
        variant="outlined"
        fullWidth
        startIcon={<EditIcon />}
        onClick={handleEditClick}
        disabled={editable}
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
    </Box>
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
