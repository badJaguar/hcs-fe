import { Grid, Paper } from "@mui/material";

import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

import { BlueBgInsertStyled, ContactUsContainerStyled } from "./styled";

export const ContactUs = () => {
  return (
    <ContactUsContainerStyled maxWidth="lg">
      <BlueBgInsertStyled />
      <Paper
        elevation={15}
        sx={{
          position: 'relative',
          maxWidth: 'lg',
          px: { xxs: 8, md: 25 },
          py: { xxs: 5, md: 15 },
          zIndex: 2,
          mx: 4,
          backgroundColor: '#ffffffb0'
        }}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
        >
          <ContactInfo />
          <ContactForm />
        </Grid>
      </Paper>
    </ContactUsContainerStyled >
  );
};
