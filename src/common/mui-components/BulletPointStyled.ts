import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import defaultTheme from "../../../styles/theme/defaultTheme";

export const BulletPointStyled = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  display: 'flex',
  lineHeight: '1.5',

  [defaultTheme.breakpoints.down("xl")]: {
    marginBottom: theme.spacing(3),
  }
}));
