import styled from "@emotion/styled";
import { Box, Grid, Paper } from "@mui/material";
import defaultTheme from "../../../../styles/theme/defaultTheme";

export const BestLabelStyled = styled('div')(({ theme }) => ({
  content: '"BEST"',
  backgroundColor: theme.palette.background.golden,
  marginTop: theme.spacing(-10),
  marginRight: 'auto',
  marginLeft: 'auto',
  width: 80,
  height: 40,
  borderRadius: '0px 0px 6px 6px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 600,
  color: theme.palette.secondary.light,
  letterSpacing: 1.5,

  [defaultTheme.breakpoints.up("xl")]: {
    marginTop: theme.spacing(-12),
  },
  [defaultTheme.breakpoints.up("md")]: {
    marginTop: theme.spacing(-12),
  },
  [defaultTheme.breakpoints.up("xs")]: {
    marginTop: theme.spacing(-12),
  },
  [defaultTheme.breakpoints.down("xs")]: {
    marginTop: theme.spacing(-12),
  }
}));

export const WhitePricingPaperStyled = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(6),
  width: 370,
  boxShadow: '0px 6px 24px rgba(107, 119, 131, 0.14)',
}));

export const BluePricingPaperStyled = styled(WhitePricingPaperStyled)(({ theme }) => ({
  paddingTop: theme.spacing(12),
  margin: theme.spacing(-6, 0),
  backgroundColor: theme.palette.background.blue,
}));

export const BulletPointContainerStyled = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
});

export const CardsContainerStyled = styled(Grid)(({ theme }) => ({
  flexDirection: "row",
  gap: theme.spacing(10),
  justifyContent: "center",
  width: "100%",
  zIndex: 1,
  position: "relative",
}));
