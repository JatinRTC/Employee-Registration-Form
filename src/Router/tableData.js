import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTableData, deleteData, updateData } from '../Reducer/table.js';
import { Table, TableBody, TableContainer, TableHead, TableRow, Paper,  Button, Container} from '@mui/material';
import TableCellComponent from '../Component/tableApi.js';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ConfirmationDialog from '../POPUP/Deletedialog.js';
import EditDialog from '../POPUP/EditDialog.js';
import CustomizedSnackbars from '../Snakbar/update.js';

const TableComponent = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.tableData);
  const [open, setOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState({});
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    dispatch(fetchTableData());
  }, [dispatch]);

  const handleEditChange = (item) => {
    setCurrentItem({ id: item.id,
        firstName: item.firstName,
        lastName:item.lastName,
        email:item.email,
        phone:item.phone,
        address:item.address,
        gender:item.gender,
        role:item.role,
        experience:item.experience,
        pincode:item.pincode,
        describe:item.describe
     });
    setOpen(true);
    
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentItem({});
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentItem((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = () => {
    const { id, firstName, lastName,email,phone,address,gender,role,experience,pincode,describe  } = currentItem;
    dispatch(updateData({ id, updatedData: { firstName, lastName,email,phone,address,gender,role,experience,pincode,describe } }));
    handleClose();
    <CustomizedSnackbars /> 
  };

  const handleDelete = (id) => {
    setSelectedId(id);
    setOpenDialog(true);
  };

  const handleConfirmDelete = () => {
    dispatch(deleteData(selectedId));
    setOpenDialog(false);
    setSelectedId(null);
  }

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedId(null);
  }


  

  return (

    <TableContainer component={Paper} sx={{ padding: '30px', overflow: 'auto' }}>
      <Table sx={{   width: '100%' }}>
        <TableHead >
          <TableRow  sx={{ backgroundColor: '#6b7b8c54' }}>
            {['ID', 'FirstName', 'LastName', 'Email', 'Phone', 'Address', 'Gender', 'Role', 'Experience', 'Pincode', 'Describe','Action'].map((header) => (
              <TableCellComponent key={header} value={header}  align="center" sx={{fontWeight: 'bold' }} />
            ))}
          </TableRow>
        </TableHead>
        <TableBody >
          {data.map((item) => (
            <TableRow  key={item.id}  sx={{ '&:hover': { backgroundColor: '#6b7b8c54' }, cursor: 'pointer' }}>
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
                value={
                  <Container sx={{display:'flex', direction:'row'}}  >
                  <Button  
                  variant="contained" 
                  color="success" 
                  sx={{ marginRight: '10px' }}
                  onClick={() => handleEditChange(item)}
                >
                  <EditIcon />
                </Button>
                <Button 
                  variant="contained" 
                  color="error"

                  onClick={() => handleDelete(item.id)}
                >
                  <DeleteIcon />
                </Button>
                  </Container>
                } 
                align="center" 
              />
              
            </TableRow>
          ))}
        </TableBody>
      </Table>

          <ConfirmationDialog 
            open={openDialog}
            onClose={handleCloseDialog}
            onConfirm={handleConfirmDelete}
          />
          <EditDialog
            open={open}
            handleClose={handleClose}
            currentItem={currentItem}
            handleInputChange={handleInputChange}
            handleUpdate={handleUpdate}
          />

          

    </TableContainer>
    
    
  );
};

export default TableComponent;