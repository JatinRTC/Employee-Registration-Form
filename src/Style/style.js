import styled from 'styled-components';
import { Box, Typography, Button, FormControl } from '@mui/material';

export const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 40px;
  padding: 32px;
  background-color: #f6f6f6;
  border-radius: 8px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
`;


export const StyledTypography = styled(Typography)`
  font-size: 2.7;
  font-weight: bold !important;
  color: #2196f3;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const StyledBoxField = styled(Box)`
  display: flex;
  justify-content: space-between;
  gap: 16px;
`;

export const SubmitButton = styled(Button)`
  width: 100%;
  padding: 14px;
`;

export const RadioButtonContainer = styled(FormControl)`
  display: flex;
  flex-direction: column;
`;

export const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 20px;
`;

export const Title = styled(Typography)`
  font-weight: bold !important;
  color: #0d47a1;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const StyledButton = styled(Button)`
  background: linear-gradient(45deg, #2196f3 30%, #21cbf3 90%);
  color: white;
  padding: 12px 28px !important;
  font-size: 1.2rem !important;
  font-weight: bold !important;
  border-radius: 8px;
  box-shadow: 0px 6px 25px rgba(33, 203, 243, 0.4);
  transition: transform 0.3s, background 0.3s;

  &:hover {
    background: linear-gradient(45deg, #21cbf3 30%, #2196f3 90%);
    transform: scale(1.05);
  }
`;
