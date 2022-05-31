import { Container, Typography } from "@mui/material";
import { WHAT_SEO_GIVE } from "./utils/constants";
import { SeoGiveContainerStyled, SeoGiveStyled } from "./utils/styled";

const SeoGive = (
  <SeoGiveStyled>
    <SeoGiveContainerStyled>
      <Typography variant="h3" fontWeight={500} color="secondary.light">{WHAT_SEO_GIVE.TITLE}</Typography>
      <Container maxWidth="md" sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center', px: { xxs: 10, xs: 10, md: 52 } }}>
        <Typography variant="body1" color="secondary.light" sx={{ py: 4 }}>{WHAT_SEO_GIVE.CONTENT_1}</Typography>
        <Typography variant="body1" color="secondary.light">{WHAT_SEO_GIVE.CONTENT_2}</Typography>
      </Container>
    </SeoGiveContainerStyled>
  </SeoGiveStyled>
);

export default SeoGive;
