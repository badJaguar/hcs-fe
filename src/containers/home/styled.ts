import styled from "@emotion/styled";
import { Box, Grid, Paper, Typography } from "@mui/material";

import imageBg from "../../../assets/what-we-can-col.svg";
import defaultTheme from "../../../styles/theme/defaultTheme";

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

export const WithoutColumnsSectionStyled = styled(Box, { label: 'WhoWeContainerStyled' })(({ theme }) => ({
  padding: theme.spacing(20, 4),
  backgroundColor: theme.palette.secondary.light,
  width: '100%',
  display: 'flex',
  justifyContent: 'center',

  [defaultTheme.breakpoints.down("md")]: {
    padding: theme.spacing(5, 4),
  }
}));

export const ImageGridContainerStyled = styled(Grid)(({ theme }) => ({
  img: {
    borderRadius: theme.shape.borderRadius,
  }
}));

export const CulumnsStyledSectionStyled = styled(Box, { label: 'WhatWeCanContainerStyled' })(({ theme }) => ({
  width: '100%',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  paddingBottom: theme.spacing(6),
  minHeight: 660,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: imageBg.width,
    backgroundImage: `url(${imageBg.src})`,
    WebkitBackgroundSize: '100%',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    height: '100%',
    width: imageBg.width,
    backgroundImage: `url(${imageBg.src})`,
    WebkitBackgroundSize: '100%',
  }
}));

export const WhatWeCanStyled = styled(Grid, { label: 'WhatWeCanStyled' })({
  height: '100%',
  alignSelf: 'center',
  flexWrap: "nowrap",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
});

export const WhoWeAreTitle = styled(Typography)(({ theme }) => ({
  '&::before': {
    content: '""',
    borderLeft: `3px solid ${theme.palette.background.golden}`,
    marginLeft: theme.spacing(-5),
    paddingRight: theme.spacing(4),
  }
}));

export const CardsContainerStyled = styled(Grid)(({ theme }) => ({
  flexDirection: "row",
  gap: theme.spacing(10),
  justifyContent: "center",
  width: "100%",
  zIndex: 1,
  position: "relative",
}));

export const WhitePricingPaperStyled = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(6),
  width: 370,
  boxShadow: '0px 6px 24px rgba(107, 119, 131, 0.14)',

  [defaultTheme.breakpoints.down("xl")]: {
    padding: theme.spacing(4),
  }
}));

export const BluePricingPaperStyled = styled(WhitePricingPaperStyled)(({ theme }) => ({
  paddingTop: theme.spacing(12),
  margin: theme.spacing(-6, 0),
  backgroundColor: theme.palette.background.blue,

  [defaultTheme.breakpoints.down("xl")]: {
    paddingTop: theme.spacing(10),
  }
}));

export const BulletPointContainerStyled = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
});

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
  }
}));
