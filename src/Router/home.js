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
    >
      <Typography variant="h3" component="sucess" gutterBottom>
        EMPLOYEE REGISTRATION FORM
      </Typography>
      <Button
        onClick={handleClick}
        variant="contained"
        sx={{
          background: 'linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)',
          color: 'white',
          padding: '10px 20px',
          fontSize: '1.2rem',
          fontWeight: 'bold',
          borderRadius: '8px',
          boxShadow: '0px 4px 20px rgba(33, 203, 243, .3)',
          transition: '0.3s',
          
        }}
      >
       Click Here
      </Button>
    </Box>
  );
}

export default Page1;
