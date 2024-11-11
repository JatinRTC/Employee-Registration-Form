import React from 'react';
import {TextField} from '@mui/material';

const textLabel = ({ 
  type, label, name, value, onChange, required, multiline, rows 
}) => {
  switch (type) {
    case 'text':
    case 'email':
    case 'number':
      return (
        <TextField
          label={label}
          variant="outlined"
          name={name}
          type={type}
          fullWidth
          required={required}
          value={value}
          onChange={onChange}
          multiline={multiline}
          rows={rows}
        />
      );

      default:
      return null;
  }
};

export default textLabel;