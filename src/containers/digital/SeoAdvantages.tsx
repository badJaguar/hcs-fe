import { Grid, Typography } from "@mui/material";

import DocMagnifyingGlassIcon from "../../../assets/icons/doc-magnifying-glass-icon";
import HandshakeDealIcon from "../../../assets/icons/handshake-deal-icon";
import MenMagnifyingGlassIcon from "../../../assets/icons/men-magnifying-glass-icon";
import PeopleIcon from "../../../assets/icons/people-icon";
import StarsIcon from "../../../assets/icons/stars-icon";
import { SEO_ADVANTAGES } from "./utils/constants";

import {
  AdvantagesStyled,
  PaperStyled,
  SeoAdvantagesContainerStyled
} from "./utils/styled";

const SeoAdvantages = (
  <SeoAdvantagesContainerStyled>
    <Typography variant="h5" fontWeight={500}>{SEO_ADVANTAGES.TITLE_1}</Typography>
    <Typography variant="h5" fontWeight={500}>{SEO_ADVANTAGES.TITLE_2}</Typography>
    <AdvantagesStyled container maxWidth="lg" gap={8} sx={{ pt: { lg: 15, md: 10, xxs: 6 } }}>
      <Grid item xs={2} minWidth={370}>
        <PaperStyled>
          <MenMagnifyingGlassIcon sx={{ width: 56, height: 56 }} />
          <Typography variant="body1" fontWeight={500}>
            {SEO_ADVANTAGES.BULLET_POINTS[0]}
          </Typography>
        </PaperStyled>
      </Grid>
      <Grid item xs={2} minWidth={370}>
        <PaperStyled>
          <DocMagnifyingGlassIcon sx={{ width: 56, height: 56 }} />
          <Typography variant="body1" fontWeight={500}>
            {SEO_ADVANTAGES.BULLET_POINTS[1]}
          </Typography>
        </PaperStyled>
      </Grid>
      <Grid item xs={2} minWidth={370}>
        <PaperStyled>
          <HandshakeDealIcon sx={{ width: 56, height: 56 }} />
          <Typography variant="body1" fontWeight={500}>
            {SEO_ADVANTAGES.BULLET_POINTS[2]}
          </Typography>
        </PaperStyled>
      </Grid>
      <Grid item xs={2} minWidth={370}>
        <PaperStyled>
          <StarsIcon sx={{ width: 56, height: 56 }} />
          <Typography variant="body1" fontWeight={500}>
            {SEO_ADVANTAGES.BULLET_POINTS[3]}
          </Typography>
        </PaperStyled>
      </Grid>
      <Grid item xs={2} minWidth={370}>
        <PaperStyled>
          <PeopleIcon sx={{ width: 56, height: 56 }} />
          <Typography variant="body1" fontWeight={500}>
            {SEO_ADVANTAGES.BULLET_POINTS[4]}
          </Typography>
        </PaperStyled>
      </Grid>
    </AdvantagesStyled>
  </SeoAdvantagesContainerStyled>
);

export default SeoAdvantages;
