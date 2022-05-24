import styled from "@emotion/styled";

export const StyledFooter = styled('footer')(({ theme }) => ({
  height: 60,
  backgroundColor: theme.palette.background.white,
  display: 'flex',
  alignItems: 'center',
}));
