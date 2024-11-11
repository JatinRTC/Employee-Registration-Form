import React from 'react';
import { TableCell } from '@mui/material';


const TableCellComponent = ({ value, align = 'center', sx }) => {
  return (
    <TableCell align={align} sx={{ border: '2px solid black', ...sx }}>
      {value}
    </TableCell>
    
  );
};

export default TableCellComponent;

