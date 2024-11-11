import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box,Typography,Button } from '@mui/material';

const  Page1 = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/addEmployees');
  };

  return (
    <Box
  display="flex"
  flexDirection="column"
  alignItems="center"
  justifyContent="center"
  height="100vh"
  textAlign="center"
  sx={{
    background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
    padding: '20px',
  }}
>
  <Typography
    variant="h3"
    component="h1"
    gutterBottom
    sx={{
      fontWeight: 'bold',
      color: '#0d47a1',
      marginBottom: '20px',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
    }}
  >
    EMPLOYEE REGISTRATION FORM
  </Typography>
  <Button
    onClick={handleClick}
    variant="contained"
    sx={{
      background: 'linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)',
      color: 'white',
      padding: '12px 28px',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      borderRadius: '8px',
      boxShadow: '0px 6px 25px rgba(33, 203, 243, 0.4)',
      transition: 'transform 0.3s, background 0.3s',
      '&:hover': {
        background: 'linear-gradient(45deg, #21cbf3 30%, #2196f3 90%)',
        transform: 'scale(1.05)',
      },
    }}
  >
    Click Here
  </Button>
</Box>

  );
}

export default Page1;
