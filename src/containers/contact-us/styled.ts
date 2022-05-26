import styled from "@emotion/styled";
import { Box } from "@mui/material";

import olympusImg from "/assets/olympus.png";

export const ContactUsContainerStyled = styled(Box, { label: 'GreetingsStyled' })({
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
});

export const BlueBgInsertStyled = styled(Box)({
  display: 'flex',
  backgroundImage: `url(${olympusImg.src})`,
  width: '100%',
  height: '50%',
  marginBottom: 'auto',
  position: 'absolute',
  top: 80,
});
