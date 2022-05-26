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
            px: { xxs: 8, md: 25 },
            py: { xxs: 5, md: 15 },
            zIndex: 2,
            backgroundColor: { xxs: 'white', md: '#ffffffb0' },
            height: '-webkit-fill-available',
            margin: 'auto',
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
