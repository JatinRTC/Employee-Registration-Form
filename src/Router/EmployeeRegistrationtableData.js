import React, { useEffect, useState } from 'react';
import {
  Table, TableBody, TableContainer, TableHead, TableRow,
  Button, Snackbar, Alert, Stack , Divider,
} from '@mui/material';
import TableCellComponent from '../Component/tableApi.js';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ConfirmationDialog from '../POPUP/Deletedialog.js';
import EditDialog from '../POPUP/EditDialog.js';
import axios from 'axios';

const TableComponent = () => {
  const [data, setData] = useState([]);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [currentItem, setCurrentItem] = useState({});
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarOpenError, setSnackbarOpenError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/entries');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleEditOpen = (item) => {
    setCurrentItem(item);
    setOpenEditDialog(true);
  };

  const handleEditClose = () => {
    setOpenEditDialog(false);
    setCurrentItem({});
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentItem((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async () => {
    try {
      const { id, ...updatedData } = currentItem;
      await axios.put(`http://localhost:3001/entries/${id}`, updatedData);
      setData((prevData) =>
        prevData.map((item) => (item.id === id ? { id, ...updatedData } : item))
      );
      handleEditClose();
      setSnackbarOpen(true);
    } catch (error) {
      console.error('Update failed:', error);
    }
  };

  const handleDelete = (id) => {
    setSelectedId(id);
    setOpenDeleteDialog(true);
  };

  const handleConfirmDelete = async () => {
    try {
      await axios.delete(`http://localhost:3001/entries/${selectedId}`);
      setData((prev) => prev.filter((item) => item.id !== selectedId));
      setOpenDeleteDialog(false);
      setSnackbarOpenError(true);
    } catch (error) {
      console.error('Delete failed:', error);
    }
  };

  return (
    <TableContainer  sx={{ padding: '30px', overflow: 'auto' }}>
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: '#6b7b8c54' }}>
            {[
              'Id', 'Firstname', 'Lastname', 'Email', 'Phone', 'Address',
              'Gender', 'Role', 'Experience', 'Pincode', 'Describe', 'Action'
            ].map((header) => (
              <TableCellComponent key={header} value={header} align="center" sx={{ fontWeight: 'bold' }} />
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id} sx={{ '&:hover': { backgroundColor: '#fafafa' }, cursor: 'pointer' }}>
              <TableCellComponent value={item.id} />
              <TableCellComponent value={item.firstName} />
              <TableCellComponent value={item.lastName} />
              <TableCellComponent value={item.email} />
              <TableCellComponent value={item.phone} />
              <TableCellComponent value={item.address} />
              <TableCellComponent value={item.gender} />
              <TableCellComponent value={item.role} />
              <TableCellComponent value={item.experience} />
              <TableCellComponent value={item.pincode} />
              <TableCellComponent value={item.describe} />
              <TableCellComponent
                align="center"
                value={
                  <Stack direction="row" spacing={1} justifyContent="center">
                    <Button variant="contained" color="primary" onClick={() => handleEditOpen(item)}>
                      <EditIcon />
                    </Button>
                    <Divider orientation="vertical" variant="middle" sx={{border:1.2  ,color: '#a2acb0'}} flexItem />
                    <Button variant="contained" color="error" onClick={() => handleDelete(item.id)}>
                      <DeleteIcon />
                    </Button>
                  </Stack>
                }
              />
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <EditDialog
        open={openEditDialog}
        handleClose={handleEditClose}
        currentItem={currentItem}
        handleInputChange={handleInputChange}
        handleUpdate={handleUpdate}
      />

      <ConfirmationDialog
        open={openDeleteDialog}
        onClose={() => setOpenDeleteDialog(false)}
        onConfirm={handleConfirmDelete}
      />

      <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={() => setSnackbarOpen(false)}>
        <Alert onClose={() => setSnackbarOpen(false)} severity="primary" variant="filled" sx={{ width: '100%' }}>
          Employee information updated successfully!
        </Alert>
      </Snackbar>

      <Snackbar open={snackbarOpenError} autoHideDuration={3000} onClose={() => setSnackbarOpenError(false)}>
        <Alert onClose={() => setSnackbarOpenError(false)} severity="info" variant="filled" sx={{ width: '100%' }}>
          Employee deleted successfully!
        </Alert>
      </Snackbar>
    </TableContainer>
  );
};

export default TableComponent;
