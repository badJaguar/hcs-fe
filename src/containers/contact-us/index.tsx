import React from "react";
import { useRouter } from "next/router";

import { Grid, Snackbar } from "@mui/material";

import PaperBlured from "common/mui-components/paper-blured";

import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import SnackbarAction from "./SnackbarAction";
import TransitionLeft from "./TransientLeft";

import { BlueBgInsertStyled, ContactUsContainerStyled, ContactUsWrapperStyled } from "./styled";

const ContactUs = () => {
  const router = useRouter();

  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (router.query?.activatePopup === "true") {
      setOpen(true);
      router.push({ pathname: router.pathname, query: '' });
    }
  }, [router, router.query?.activatePopup]);

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    router.push({ pathname: router.pathname, query: '' });
    setOpen(false);
  };

  return (
    <ContactUsWrapperStyled>
      <ContactUsContainerStyled maxWidth="lg">
        <BlueBgInsertStyled />
        <PaperBlured
          sx={{
            position: 'relative',
            maxWidth: 'lg',
            px: { xxs: 8, md: 25 },
            py: { xxs: 5, md: 15 },
            p: 4,
            zIndex: 2,
            margin: 4,
          }}>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
          >
            <ContactInfo />
            <ContactForm />
          </Grid>
        </PaperBlured>
      </ContactUsContainerStyled>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Sorry, we are working on payment."
        action={<SnackbarAction onClose={handleClose} />}
        TransitionComponent={TransitionLeft}
        ContentProps={{
          sx: {
            backgroundColor: 'white',
            color: 'primary.dark',
            minHeight: 80,
            fontSize: 16
          }
        }}
      />
    </ContactUsWrapperStyled>
  );
};

export default ContactUs;
