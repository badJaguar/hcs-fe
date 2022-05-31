import React from "react";
import dayjs from "dayjs";
import Link from "next/link";

import {
  Grid, Typography, Link as MuiLink,
  Dialog, Container, DialogContent,
  DialogActions, Button
} from "@mui/material";

import { TEXT } from "./utils/constants";
import PrivacyPolicy from "./PrivacyPolicy";

import { StyledFooter } from "./styled";
import TermsOfService from "./TermsOfService";

const Footer = () => {
  const [open, setOpen] = React.useState(false);
  const [content, setContent] = React.useState<"policy" | "terms">("policy");

  const currentYear = dayjs().year();

  const handleClickOpen = (_: React.MouseEvent, type: "policy" | "terms") => {
    setContent(type);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
                sx={{ cursor: "pointer" }}
                onClick={(e) => handleClickOpen(e, "policy")}
              >{TEXT.POLICY}</MuiLink>
            </Link>
            <Link href="">
              <MuiLink
                onClick={(e) => handleClickOpen(e, "terms")}
                component={Typography}
                variant="body2"
                lineHeight="2"
                sx={{ cursor: "pointer" }}
              >{TEXT.TERMS}</MuiLink>
            </Link>
          </Grid>
        </Grid>
      </Container>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          {
            content === 'terms' ? <TermsOfService /> : <PrivacyPolicy />
          }
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>Agree</Button>
        </DialogActions>
      </Dialog>
    </StyledFooter>
  );
};

export default Footer;
