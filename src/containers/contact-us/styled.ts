import styled from "@emotion/styled";
import { Box } from "@mui/material";

import runningHermesImg from "/assets/hermes-contact-us.svg";
import columnImg from "/assets/column-contact-us.svg";
import defaultTheme from "../../../styles/theme/defaultTheme";

export const ContactUsWrapperStyled = styled(Box)(
  ({ theme }) => ({
    display: 'flex',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.blue,
  }));

export const ContactUsContainerStyled = styled(Box, { label: 'ContactUsContainerStyled' })(
  ({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.blue,

    [defaultTheme.breakpoints.down("md")]: {
      margin: theme.spacing(4, 0),
    },
  }));

export const BlueBgInsertStyled = styled(Box)({
  height: 'calc(100vh - 140px)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 80,
    left: 0,
    height: 'calc(100% - 140px)',
    width: runningHermesImg.width,
    backgroundImage: `url(${runningHermesImg.src})`,
    WebkitBackgroundSize: '100%',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 80,
    right: 0,
    height: 'calc(100% - 140px)',
    width: columnImg.width,
    backgroundImage: `url(${columnImg.src})`,
    WebkitBackgroundSize: '100%',
  },

  [defaultTheme.breakpoints.down("md")]: {
    '&::before': {
      display: 'none'
    },
    '&::after': {
      display: 'none'
    },
  }
});
