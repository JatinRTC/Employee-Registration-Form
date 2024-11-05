// src/components/TableComponent.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTableData } from '../TableAPI/table';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress } from '@mui/material';

const TableComponent = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.tableData);

  useEffect(() => {
    dispatch(fetchTableData());
  }, [dispatch]);

  if (loading) return <CircularProgress />;
  if (error) return <div>Error: {error}</div>;

  return (
    <TableContainer component={Paper}  sx={{ padding:'30px', align:'center', overflow: "auto" }} >
      <Table   sx={{border:"1px solid #ccc", width:'100%'  }}>
        <TableHead >
          <TableRow sx={{ backgroundColor: '#f5f5f5'  }}>
            <TableCell align="center" sx={{border:'1px solid black', fontWeight: 'bold' }}>ID</TableCell>
            <TableCell align="center" sx={{border:'1px solid black', fontWeight: 'bold' }}>FirstName</TableCell>
            <TableCell align="center" sx={{border:'1px solid black', fontWeight: 'bold' }}>LastName</TableCell>
            <TableCell align="center" sx={{border:'1px solid black', fontWeight: 'bold' }}>Email</TableCell>
            <TableCell align="center" sx={{border:'1px solid black', fontWeight: 'bold' }}>Phone</TableCell>
            <TableCell align="center" sx={{border:'1px solid black', fontWeight: 'bold' }}>Address</TableCell>
            <TableCell align="center" sx={{border:'1px solid black', fontWeight: 'bold' }}>Gender</TableCell>
            <TableCell align="center" sx={{border:'1px solid black', fontWeight: 'bold' }}>Role</TableCell>
            <TableCell align="center" sx={{border:'1px solid black', fontWeight: 'bold' }}>Experience</TableCell>
            <TableCell align="center" sx={{border:'1px solid black', fontWeight: 'bold' }}>Pincode</TableCell>
            <TableCell align="center" sx={{border:'1px solid black', fontWeight: 'bold' }}>Describe</TableCell>
          </TableRow>
        </TableHead>
        <TableBody  >
          {data.map((item) => (
            <TableRow key={item} sx={{ '&:hover': { backgroundColor: '#f5f5f5' }, cursor: 'pointer' }}>
              <TableCell align="center" sx={{border:'1px solid black' }}>{item.id}</TableCell>
              <TableCell align="center" sx={{border:'1px solid black' }}>{item.firstName}</TableCell>
              <TableCell align="center" sx={{border:'1px solid black' }}>{item.lastName}</TableCell>
              <TableCell align="center" sx={{border:'1px solid black' }}>{item.email}</TableCell>
              <TableCell align="center" sx={{border:'1px solid black' }}>{item.phone}</TableCell>
              <TableCell align="center" sx={{border:'1px solid black' }}>{item.address}</TableCell>
              <TableCell align="center" sx={{border:'1px solid black' }}>{item.gender}</TableCell>
              <TableCell align="center" sx={{border:'1px solid black' }}>{item.role}</TableCell>
              <TableCell align="center" sx={{border:'1px solid black' }}>{item.experience}</TableCell>
              <TableCell align="center" sx={{border:'1px solid black' }}>{item.pincode}</TableCell>
              <TableCell align="center" sx={{border:'1px solid black' }}>{item.describe}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
