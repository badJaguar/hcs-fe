import { Grid, Paper } from "@mui/material";

import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

import { BlueBgInsertStyled, ContactUsContainerStyled, ContactUsWrapperStyled } from "./styled";

export const ContactUs = () => {
  return (
    <ContactUsWrapperStyled>
      <ContactUsContainerStyled maxWidth="lg">
        <BlueBgInsertStyled />
        <Paper
          elevation={15}
          sx={{
            position: 'relative',
            maxWidth: 'lg',
            px: { xs: 8, md: 25 },
            py: { xs: 5, md: 15 },
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
        </Paper>
      </ContactUsContainerStyled>
    </ContactUsWrapperStyled>
  );
};
