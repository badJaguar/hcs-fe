import styled from "@emotion/styled";
import { Box, Grid, Paper, Typography } from "@mui/material";
import defaultTheme from "../../../../styles/theme/defaultTheme";

import seoBgImage from "/assets/seo-bg.png";
import seoGiveImage from "/assets/seo-give-bg.png";

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

export const BlockquoteContainerStyled = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  padding: theme.spacing(0, 2),
  margin: 'auto',
  marginBottom: theme.spacing(6),
  justifyContent: 'center',
  backgroundColor: "background.lightGray",
}));

export const BlockquoteStyled = styled(Typography)<{ component?: string; }>(({ theme }) => ({
  maxWidth: '80ch',
  marginTop: theme.spacing(5),
  padding: theme.spacing(5, 4),
  borderLeft: `3px solid ${theme.palette.background.golden}`,
}));

export const ImageGridContainerStyled = styled(Grid)(({ theme }) => ({
  img: {
    borderRadius: theme.shape.borderRadius,
  }
}));

export const SeoContainerStyled = styled(Grid)<{ component?: string; }>(({ theme }) => ({
  padding: theme.spacing(20, 4),
  backgroundColor: theme.palette.secondary.light,
  width: '100%',
  display: 'flex',
  justifyContent: 'center',

  [defaultTheme.breakpoints.down("md")]: {
    padding: theme.spacing(5, 4),
  }
}));

export const SeoAdvantagesContainerStyled = styled(SeoContainerStyled)(({ theme }) => ({
  padding: theme.spacing(4),
  paddingBottom: theme.spacing(22),
  flexDirection: 'column',
  alignItems: 'center',

  [defaultTheme.breakpoints.down("md")]: {
    paddingBottom: theme.spacing(11),
  }
}));

export const PaperStyled = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: 164,
  padding: theme.spacing(6, 9),
  boxShadow: '0px 6px 24px rgba(107, 119, 131, 0.14)',
  borderRadius: theme.shape.borderRadius as number * 2
}));

export const AdvantagesStyled = styled(Grid)({
  alignItems: "center",
  justifyContent: "center",
});

export const SeoGiveStyled = styled(Grid)(({ theme }) => ({
  margin: theme.spacing(14, 'auto'),
  padding: theme.spacing(0, 4),

  [defaultTheme.breakpoints.down("md")]: {
    padding: theme.spacing(4, 4),
  }
}));

export const SeoGiveContainerStyled = styled(Box)(({ theme }) => ({
  padding: theme.spacing(16, 12),
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: theme.shape.borderRadius as number * 2,
  backgroundImage: `url(${seoGiveImage.src})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: "center",

  [defaultTheme.breakpoints.down("xs")]: {
    padding: theme.spacing(10, 0),
  }
}));
