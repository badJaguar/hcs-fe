import { useRouter } from "next/router";

import { Button, Divider, Grid, Typography } from "@mui/material";

import { BUTTON_TEXT, TAB_TEXT, WHAT_WE } from "common/text/pricing-options";
import { useScreenDown } from "common/hooks/screenSize";
import { BulletPointStyled } from "common/mui-components/BulletPointStyled";

import TickIcon from "../../../assets/icons/tick-icon";

import {
  BestLabelStyled,
  BluePricingPaperStyled,
  BulletPointContainerStyled,
  CardsContainerStyled,
  CulumnsStyledSectionStyled,
  WhatWeCanStyled,
  WhitePricingPaperStyled
} from "./styled";

const PricingOptions = () => {
  const isDownMd = useScreenDown("md");
  const router = useRouter();

  const handleClick = () => {
    router.push({ pathname: 'contact-us', query: { activatePopup: true } });
  };

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
              <BulletPointStyled variant="subtitle1">
                <TickIcon fontSize="large" color="primary" sx={{ mr: 2 }} />
                {TAB_TEXT[0].BULLET_POINT}
              </BulletPointStyled>
              {
                TAB_TEXT[0].BULLET_POINTS.map((point) => (
                  <BulletPointStyled key={point} variant="subtitle1">
                    <span style={{ marginLeft: 24 }} />&#8212;&nbsp;
                    {point}
                  </BulletPointStyled>
                ))
              }
            </BulletPointContainerStyled>
            <Button
              variant="contained"
              onClick={handleClick}
              fullWidth
              sx={{ my: 12.5, mt: 16 }}
            >{BUTTON_TEXT}</Button>
          </WhitePricingPaperStyled>

          <BluePricingPaperStyled>
            <BestLabelStyled>
              BEST
            </BestLabelStyled>
            <Typography color="secondary.light" sx={{ py: 3 }} variant="h5">{TAB_TEXT[1].TITLE}</Typography>
            <Typography color="secondary" variant="h3"><sup><small>$</small></sup>{TAB_TEXT[1].PRICE}</Typography>
            <Divider sx={{ my: 12.5, borderColor: 'white' }} />
            <BulletPointContainerStyled>
              {
                TAB_TEXT[1].BULLET_POINTS.map((point) => (
                  <BulletPointStyled key={point} variant="subtitle1" color="secondary">
                    <TickIcon fontSize="large" color="secondary" sx={{ mr: 2 }} />
                    {point}
                  </BulletPointStyled>
                ))
              }
            </BulletPointContainerStyled>
            <Button
              variant="contained"
              onClick={handleClick}
              fullWidth
              sx={{ my: 12.5, mt: 50 }}
            >{BUTTON_TEXT}</Button>
          </BluePricingPaperStyled>

          <WhitePricingPaperStyled>
            <Typography sx={{ py: 3 }} variant="h5" color="text.mediumGray">{TAB_TEXT[2].TITLE}</Typography>
            <Typography variant="h3"><sup><small>$</small></sup>{TAB_TEXT[2].PRICE}</Typography>
            <Divider sx={{ my: 12.5 }} />
            <BulletPointContainerStyled>
              {
                TAB_TEXT[2].BULLET_POINTS.map((point) => (
                  <BulletPointStyled textAlign="left" key={point} variant="subtitle1">
                    <TickIcon fontSize="large" color="primary" sx={{ mr: 2 }} />
                    {point}
                  </BulletPointStyled>
                ))
              }
            </BulletPointContainerStyled>
            <Button
              variant="contained"
              onClick={handleClick}
              fullWidth
              sx={{ my: 12.5 }}
            >{BUTTON_TEXT}</Button>
          </WhitePricingPaperStyled>
        </CardsContainerStyled>
      </WhatWeCanStyled>
    </CulumnsStyledSectionStyled >
  );
};

export default PricingOptions;
