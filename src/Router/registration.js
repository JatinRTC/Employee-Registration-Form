import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Title, StyledButton, BoxSide , StyledDataButton } from '../Style/style.js';
import { Stack , Divider } from '@mui/material';

const Page1 = () => {
  const navigate = useNavigate();

  const handleReduxClick = () => {
    navigate('/addEmployees/redux');
  };

  const handleStateClick = () => {
    navigate('/addEmployees/state');
  };

  const Statetable = () => {
    navigate('/employeesData');
  };

  return (
    <BoxSide>
      <Stack mt={3} alignItems="center">
        <Title variant="h3" component="h1" gutterBottom>
          EMPLOYEE REGISTRATION FORM
        </Title>
      </Stack>
      <Stack direction="row" spacing={2} justifyContent="center" mt={2}>
        <StyledButton onClick={handleReduxClick} variant="contained">
          Redux Managed Form
        </StyledButton>
        <Divider orientation="vertical" variant="middle" sx={{border:2 , color: '#a2acb0'}}  flexItem />
        <StyledButton onClick={handleStateClick} variant="contained">
          Props Managed Form
        </StyledButton>
        <Divider orientation="vertical" variant="middle" sx={{border:2 , color: '#a2acb0'}} flexItem />
        <StyledDataButton severity="success" onClick={Statetable} variant="contained">
          Employees Data
        </StyledDataButton>
      </Stack>
    </BoxSide>
  );
};

export default Page1;
