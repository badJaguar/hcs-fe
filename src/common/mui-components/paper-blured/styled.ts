import styled from "@emotion/styled";
import { Paper } from "@mui/material";
import defaultTheme from "../../../../styles/theme/defaultTheme";

export const PaperStyled = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(14, 11),
  background: 'rgba(255, 255, 255, 0.09)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  color: theme.palette.background.white,

  [defaultTheme.breakpoints.down("md")]: {
    padding: theme.spacing(10, 6),
  },
  [defaultTheme.breakpoints.down("xs")]: {
    padding: theme.spacing(6, 4),
  }
}));
