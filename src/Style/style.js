import styled from 'styled-components';
import { Box, Typography, Button, FormControl, TableRow,  Table, Alert } from '@mui/material';

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
  color: #0d47a1;
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
  font-size: 1.2rem !important;
  background: linear-gradient(45deg, #2196f3 30%, #21cbf3 90%);
`;

export const RadioButtonContainer = styled(FormControl)`
  display: flex;
  flex-direction: column;
`;

export const BoxSide = styled(Box)`
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
  text-transform: capitalize;
  color: #0d47a1;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const StyledButton = styled(Button)`
  background: linear-gradient(45deg, #2196f3 30%, #21cbf3 90%);
  color: white;
  padding: 12px 28px !important;
  font-size: 1.2rem !important;
  margin: 20px;
  border-radius: 8px;
  text-transform: capitalize;
  box-shadow: 0px 6px 25px rgba(33, 203, 243, 0.4);
  transition: transform 0.3s, background 0.3s;

  &:hover {
    background: linear-gradient(45deg, #21cbf3 30%, #2196f3 90%);
    transform: scale(1.05);
  }
`;
export const StyledDataButton = styled(Button)`
  background: linear-gradient(90deg,rgba(125, 169, 186, 1) 0%, rgba(87, 199, 133, 1) 49%, rgba(63, 196, 85, 1) 100%);
  color: white;
  padding: 12px 28px !important;
  font-size: 1.2rem !important;
  text-transform: capitalize;
  margin: 20px;
  border-radius: 8px;
  box-shadow: 0px 6px 25px rgba(33, 203, 243, 0.4);
  transition: transform 0.3s, background 0.3s;

  &:hover {
    background: linear-gradient(90deg,rgba(63, 196, 85, 1) 100%, rgba(87, 199, 133, 1) 49%,rgba(125, 169, 186, 1) 0%);
    transform: scale(1.05);
  }
`;

export const TableRowSide = styled(TableRow)`
  cursor: pointer;
  &:hover {
    background-color: '#6b7b8c54';
  }
  `;

export const TableSide = styled(Table)`
  width: 100%;
`;

export const TableRowSideIn = styled(TableRow)`
  background-color: '#6b7b8c54'
`;

export const AlertSide  = styled(Alert)`
  width:100%;
`;



