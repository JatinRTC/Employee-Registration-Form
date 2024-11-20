// Dialog.js
import React from "react";
import { Dialog,DialogTitle, DialogActions, DialogContent, DialogContentText,  IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';

const ConfirmationDialog = ({ open, onClose, onConfirm}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      
    >
      <DialogTitle>Confirm Deletion</DialogTitle>
      <DialogContent>
        <DialogContentText >
          {"Do you want to remove this Employees Information"}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <IconButton color="primary" onClick={onClose}>
          <CloseIcon />
        </IconButton>
        <IconButton color="primary" onClick={onConfirm}>
          <CheckIcon />
        </IconButton>
      </DialogActions>
    </Dialog>
  );
};


export default ConfirmationDialog;
