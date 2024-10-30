import React from 'react';
import { Box,Typography } from '@mui/material';

const  Page3 = () => {
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
        SUBMITTED YOUR FORM
      </Typography>
    </Box>
  );
}

export default Page3;
