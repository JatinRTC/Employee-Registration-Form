// Dialog.js
import React from "react";
import { Dialog, DialogActions, DialogContent, DialogContentText, Button, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';

const ConfirmationDialog = ({ open, onClose, onConfirm }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Do you want to remove this Employees Information
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>
          <CloseIcon />
        </Button>
        <IconButton onClick={onConfirm}>
          <CheckIcon />
        </IconButton>
      </DialogActions>
    </Dialog>
  );
};


export default ConfirmationDialog;
