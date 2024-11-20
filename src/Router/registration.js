import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Title, StyledButton } from '../Style/style.js';

const Page1 = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/addEmployees');
  };

  return (
    <Container>
      <Title variant="h3" component="h1" gutterBottom>
        EMPLOYEE REGISTRATION FORM
      </Title>
      <StyledButton onClick={handleClick} variant="contained">
        Click Here
      </StyledButton>
    </Container>
  );
};

export default Page1;
