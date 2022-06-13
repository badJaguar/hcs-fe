import styled from "@emotion/styled";
import { Box, Grid, Paper } from "@mui/material";
import defaultTheme from "../../../../styles/theme/defaultTheme";

export const BestLabelStyled = styled('div')(({ theme }) => ({
  content: '"BEST"',
  color: theme.palette.text.goldContrast,
  backgroundColor: theme.palette.background.golden,
  marginTop: theme.spacing(-10),
  marginRight: 'auto',
  marginLeft: 'auto',
  width: 148,
  height: 48,
  borderRadius: '0px 0px 6px 6px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 600,
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
  paddingBottom: theme.spacing(24),
  width: 370,
  boxShadow: '0px 6px 24px rgba(107, 119, 131, 0.14)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  [defaultTheme.breakpoints.down("lg")]: {
    width: 280,
    paddingBottom: theme.spacing(20),
  },
  [defaultTheme.breakpoints.down("xs")]: {
    width: 180,
    padding: theme.spacing(6, 3),
  },
}));

export const BluePricingPaperStyled = styled(WhitePricingPaperStyled)(({ theme }) => ({
  paddingTop: theme.spacing(12),
  margin: theme.spacing(-6, 0),
  backgroundColor: theme.palette.background.blue,

  [defaultTheme.breakpoints.down("xs")]: {
    margin: 0,
    padding: theme.spacing(12, 3),
    paddingBottom: 0,
  },
}));

export const BulletPointContainerStyled = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  textAlign: 'start',
});

export const CardsContainerStyled = styled(Grid)(({ theme }) => ({
  paddingBottom: theme.spacing(4),
  flexDirection: "row",
  gap: theme.spacing(10),
  justifyContent: "center",
  width: "100vw",
  zIndex: 1,
  position: "relative",

  [defaultTheme.breakpoints.down("xs")]: {
    gap: theme.spacing(4),
  },
}));
