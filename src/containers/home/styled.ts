import styled from "@emotion/styled";
import { Box, Grid, Typography } from "@mui/material";

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
  height: '256px',

  [defaultTheme.breakpoints.down("md")]: {
    height: '200px',
  }
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

export const CulumnsStyledSectionStyled = styled(Box, { label: 'WhatWeCanContainerStyled' })({
  width: '100%',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
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
});

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
