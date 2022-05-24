import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const MenuItemButtonStyled = styled(Button)(({ theme }) => ({
  margin: theme.spacing(2, 1),
  color: 'primary.dark',
  display: 'block',
}));

export const CallBackButtonStyled = styled(Button)(({ theme }) => ({
  padding: theme.spacing(3.5, 8),
  backgroundColor: '#E3C56C'
}));
