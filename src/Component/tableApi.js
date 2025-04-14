import React from 'react';
import { TableCell } from '@mui/material';


const TableCellComponent = ({ value, align = 'center', sx }) => {
  return (
    <TableCell align={align} sx={{ border: '0.5px solid grey', ...sx }}>
      {value}
    </TableCell>
    
  );
};

export default TableCellComponent;

