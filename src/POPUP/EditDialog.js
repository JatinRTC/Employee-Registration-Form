// Dialog.js
import React from "react";
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button} from "@mui/material";

const EditDialog = ({ open, handleClose, currentItem, handleInputChange, handleUpdate}) => {
    
  return (
    <Dialog
      open={open}
      onClose={handleClose}
    >
      <DialogTitle>UPDATE EMPLOYEE INFORMATION </DialogTitle>
      <DialogContent>
        <TextField
          name="firstName"
          label="First Name"
          value={currentItem.firstName || ''}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="lastName"
          label="Last Name"
          value={currentItem.lastName || ''}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="email"
          label="Email"
          value={currentItem.email || ''}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="phone"
          label="Phone"
          value={currentItem.phone || ''}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="address"
          label="Address"
          value={currentItem.address || ''}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="gender"
          label="Gender"
          value={currentItem.gender || ''}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="role"
          label="Role"
          value={currentItem.role || ''}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="experience"
          label="Experience"
          value={currentItem.experience || ''}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="pincode"
          label="Pincode"
          value={currentItem.pincode || ''}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="describe"
          label="Description"
          value={currentItem.describe || ''}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
      </DialogContent>
      <DialogActions >
        <Button onClick={handleClose} color="error" variant="contained">Cancel</Button>
        <Button onClick={handleUpdate} color="success"  variant="contained">Update</Button>
      </DialogActions>
    </Dialog>
  );
};


export default EditDialog;



