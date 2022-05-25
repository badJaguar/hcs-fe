import styled from "@emotion/styled";
import { Box } from "@mui/material";

import columnSvg from "../../../assets/what-we-can-col.svg";
import blueBg from "/assets/contact-us-bg.svg";

export const ContactUsContainerStyled = styled(Box, { label: 'GreetingsStyled' })({
  display: 'flex',
  width: '100%',
  justifyContent: 'center',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 80,
    left: 0,
    height: 'calc(100% - 140px)',
    width: 186,
    backgroundImage: `url(${columnSvg.src})`,
    WebkitBackgroundSize: '100%',
    zIndex: 1,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 80,
    right: 0,
    height: 'calc(100% - 140px)',
    width: 186,
    backgroundImage: `url(${columnSvg.src})`,
    WebkitBackgroundSize: '100%',
  }
});

export const BlueBgInsertStyled = styled(Box)({
  display: 'flex',
  backgroundImage: `url(${blueBg.src})`,
  width: blueBg.width,
  height: blueBg.height,
  marginBottom: 'auto',
  position: 'absolute',
  top: 80,
});
