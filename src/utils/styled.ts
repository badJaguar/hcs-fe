import styled from "@emotion/styled";
import { Box, Grid } from "@mui/material";

import defaultTheme from "../../styles/theme/defaultTheme";

import seoBgImage from "/assets/seo-bg.png";
import imageBg from "/assets/what-we-can-col.svg";

export const MainBannerStyled = styled(Grid)(({ theme }) => ({
  width: "100%",
  minHeight: "calc(100vh - 60px)",
  backgroundImage: `url(${seoBgImage.src})`,
  layout: "fill",
  objectFit: "cover",
  objectPosition: "left center",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(0, 4),

  [defaultTheme.breakpoints.down("md")]: {
    padding: theme.spacing(4, 4),
  }
}));

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

export const CulumnsStyledSectionStyled = styled(Box, { label: 'WhatWeCanContainerStyled' })(
  ({ theme }) => ({
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
      width: '100%',
      backgroundImage: `url(${imageBg.src})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      right: 0,
      height: '100%',
      width: '100%',
      backgroundImage: `url(${imageBg.src})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'top right',
    },

    [defaultTheme.breakpoints.down("md")]: {
      '&::before': {
        display: 'none',
      },
      '&::after': {
        display: 'none',
      }
    }
  })
);

export const WhatWeCanStyled = styled(Grid, { label: 'WhatWeCanStyled' })({
  height: '100%',
  alignSelf: 'center',
  flexWrap: "nowrap",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
});
