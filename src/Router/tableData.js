import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTableData } from '../Reducer/table.js';
import { Table, TableBody, TableContainer, TableHead, TableRow, Paper, CircularProgress } from '@mui/material';
import TableCellComponent from '../Component/tableApi.js';

const TableComponent = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.tableData);

  useEffect(() => {
    dispatch(fetchTableData());
  }, [dispatch]);

  if (loading) return <CircularProgress />;
  if (error) return <div>Error: {error}</div>;

  return (
    <TableContainer component={Paper} sx={{ padding: '30px', overflow: 'auto' }}>
      <Table sx={{   width: '100%' }}>
        <TableHead >
          <TableRow  sx={{ backgroundColor: '#6b7b8c54' }}>
            {['ID', 'FirstName', 'LastName', 'Email', 'Phone', 'Address', 'Gender', 'Role', 'Experience', 'Pincode', 'Describe'].map((header) => (
              <TableCellComponent key={header} value={header}  align="center" sx={{fontWeight: 'bold' }} />
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id} sx={{ '&:hover': { backgroundColor: '#6b7b8c54' }, cursor: 'pointer' }}>
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;