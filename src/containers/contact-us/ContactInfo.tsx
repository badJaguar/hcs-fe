import { Container, Grid, Typography } from "@mui/material";

import { useScreenDown } from "common/hooks/screenSize";

import { COMPANY_NUMBER } from "utils/constants";

import CallIcon from "../../../assets/icons/call-icon";
import EmailIcon from "../../../assets/icons/email-icon";
import LocationIcon from "../../../assets/icons/location-icon";
import { ADDRESS, CONTACT_DESCRIPTION, CONTACT_TITLE, EMAIL } from "./constants";

const ContactInfo = () => {
  const isDownMd = useScreenDown("md");

  return (
    <Grid item xs={5}>
      <Typography variant={isDownMd ? "h4" : "h3"}>
        {CONTACT_TITLE}
      </Typography>
      <Typography variant={isDownMd ? "body2" : "body1"} sx={{
        mt: { xxs: 1, md: 3 },
        lineHeight: 1.5
      }}>
        {CONTACT_DESCRIPTION}
      </Typography>
      <Container sx={{ pt: { xxs: 4, md: 8 }, display: 'inline-flex', alignItems: 'center' }}>
        <CallIcon sx={{ width: { xxs: 32, md: 48 }, height: { xxs: 32, md: 48 }, mr: 4 }} />
        <Typography
          component="a"
          href={`tel:${COMPANY_NUMBER}`}
          variant={isDownMd ? "body1" : "caption"}
          color="primary.dark"
        >{COMPANY_NUMBER}</Typography>
      </Container>
      <Container sx={{ pt: { xxs: 4, md: 8 }, display: 'inline-flex', alignItems: 'center' }}>
        <EmailIcon sx={{ width: { xxs: 32, md: 48 }, height: { xxs: 32, md: 48 }, mr: 4 }} />
        <Typography
          component="a"
          href={`mailto:${EMAIL}`}
          variant={isDownMd ? "body1" : "caption"}
          color="primary.dark"
        >{EMAIL}</Typography>
      </Container>
      <Container sx={{ pt: { xxs: 4, md: 8 }, display: 'inline-flex', alignItems: 'center' }}>
        <LocationIcon sx={{ width: { xxs: 32, md: 48 }, height: { xxs: 32, md: 48 }, mr: 4 }} />
        <Typography variant={isDownMd ? "body1" : "caption"}>{ADDRESS}</Typography>
      </Container>
    </Grid >

  );
};
export default ContactInfo;
