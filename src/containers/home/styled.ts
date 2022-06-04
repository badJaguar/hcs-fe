import styled from "@emotion/styled";
import { Box, Grid, Typography } from "@mui/material";

export const GreetingsStyled = styled(Box, { label: 'GreetingsStyled' })({
  position: "absolute",
  zIndex: 2,
  left: 0,
  right: 0,
  bottom: 0,
  margin: 'auto',
  maxWidth: '800px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
});

export const RecommendationsContainerStyled = styled(Grid)({
  flexDirection: "row",
  justifyContent: "center",
});

export const RecommendationStyled = styled(Grid)({
  flexWrap: "nowrap",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  maxWidth: 320
});

export const WhoWeAreTitle = styled(Typography)(({ theme }) => ({
  '&::before': {
    content: '""',
    borderLeft: `3px solid ${theme.palette.background.golden}`,
    marginLeft: theme.spacing(-5),
    paddingRight: theme.spacing(4),
  }
}));
