import { Grid, Typography, Link as MuiLink, Container } from "@mui/material";
import dayjs from "dayjs";
import Link from "next/link";

import { StyledFooter } from "./styled";
import { TEXT } from "./utils/constants";

const Footer = () => {
  const currentYear = dayjs().year();
  return (
    <StyledFooter>
      <Container>
        <Grid container justifyContent="space-between">
          <Grid item sx={{ mt: 1.5, width: { xxs: '50%' } }}>
            <Typography variant="body2" lineHeight="1.2">
              ©Hermes Corporate Solutions {currentYear}. All rights reserved.
            </Typography>
          </Grid>
          <Grid item
            display="flex"
            justifyContent="space-between"
            sx={{
              width: {
                xxs: "40%",
                xs: "20%",
              },
              flexDirection: {
                xxs: "column",
                md: "row"
              }
            }}>
            <Link href="">
              <MuiLink
                component={Typography}
                variant="body2"
                lineHeight="2"
              >{TEXT.POLICY}</MuiLink>
            </Link>
            <Link href="">
              <MuiLink component={Typography} variant="body2" lineHeight="2">{TEXT.TERMS}</MuiLink>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </StyledFooter >
  );
};

export default Footer;
