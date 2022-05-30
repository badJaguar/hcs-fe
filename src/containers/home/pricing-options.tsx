import { Button, Divider, Grid, Typography } from "@mui/material";

import { BUTTON_TEXT, TAB_TEXT, WHAT_WE } from "common/text/pricing-options";
import { useScreenDown } from "common/hooks/screenSize";

import TickIcon from "../../../assets/icons/tick-icon";

import {
  BluePricingPaperStyled,
  BulletPointContainerStyled,
  BulletPointStyled,
  CardsContainerStyled,
  CulumnsStyledSectionStyled,
  WhatWeCanStyled,
  WhitePricingPaperStyled
} from "./styled";

const PricingOptions = () => {
  const isDownMd = useScreenDown("md");

  return (
    <CulumnsStyledSectionStyled component="section">
      <WhatWeCanStyled container maxWidth="lg" sx={{ px: { xxs: 2, md: 4 } }}>
        <Grid item xs={6} sx={{ pb: { xxs: 4, md: 15 } }}>
          <Typography
            variant={isDownMd ? "h4" : "h3"}
            sx={{ pb: { xxs: 4, md: 8 } }}
          >
            {WHAT_WE.TITLE}
          </Typography>
          <Typography component="article" variant="body1" sx={{ mb: 4 }}>{WHAT_WE.CONTENT_1}</Typography>
        </Grid>
        <CardsContainerStyled container>

          <WhitePricingPaperStyled>
            <Typography sx={{ py: 3 }} variant="h5" color="text.mediumGray">{TAB_TEXT[0].TITLE}</Typography>
            <Typography variant="h3"><sup><small>$</small></sup>{TAB_TEXT[0].PRICE}</Typography>
            <Divider sx={{ my: 12.5 }} />
            <BulletPointContainerStyled>
              {
                TAB_TEXT[0].BULLET_POINTS.map((point) => (
                  <BulletPointStyled key={point} variant="subtitle1">
                    <TickIcon fontSize="large" color="primary" />&nbsp;
                    {point}
                  </BulletPointStyled>
                ))
              }
            </BulletPointContainerStyled>
            <Button variant="contained" fullWidth sx={{ my: 12.5, mt: 29 }}>{BUTTON_TEXT}</Button>
          </WhitePricingPaperStyled>

          <BluePricingPaperStyled>
            <Typography color="secondary.light" sx={{ py: 3 }} variant="h5">{TAB_TEXT[1].TITLE}</Typography>
            <Typography color="secondary" variant="h3"><sup><small>$</small></sup>{TAB_TEXT[1].PRICE}</Typography>
            <Divider sx={{ my: 12.5, borderColor: 'white' }} />
            <BulletPointContainerStyled>
              {
                TAB_TEXT[1].BULLET_POINTS.map((point) => (
                  <BulletPointStyled key={point} variant="subtitle1" color="secondary">
                    <TickIcon fontSize="large" color="secondary" />&nbsp;
                    {point}
                  </BulletPointStyled>
                ))
              }
            </BulletPointContainerStyled>
            <Button variant="contained" fullWidth sx={{ my: 12.5, mt: 40 }}>{BUTTON_TEXT}</Button>
          </BluePricingPaperStyled>

          <WhitePricingPaperStyled>
            <Typography sx={{ py: 3 }} variant="h5" color="text.mediumGray">{TAB_TEXT[2].TITLE}</Typography>
            <Typography variant="h3"><sup><small>$</small></sup>{TAB_TEXT[2].PRICE}</Typography>
            <Divider sx={{ my: 12.5 }} />
            <BulletPointContainerStyled>
              {
                TAB_TEXT[2].BULLET_POINTS.map((point) => (
                  <BulletPointStyled textAlign="left" key={point} variant="subtitle1">
                    <TickIcon fontSize="large" color="primary" />&nbsp;
                    {point}
                  </BulletPointStyled>
                ))
              }
            </BulletPointContainerStyled>
            <Button variant="contained" fullWidth sx={{ my: 12.5 }}>{BUTTON_TEXT}</Button>
          </WhitePricingPaperStyled>
        </CardsContainerStyled>
      </WhatWeCanStyled>
    </CulumnsStyledSectionStyled >
  );
};

export default PricingOptions;
