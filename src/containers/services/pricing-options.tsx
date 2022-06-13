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
  WhitePricingPaperStyled
} from "./utils/styled";
import { CulumnsStyledSectionStyled, WhatWeCanStyled } from "utils/styled";

const PricingOptions = () => {
  const isDownMd = useScreenDown("md");
  const router = useRouter();

  const handleClick = () => {
    router.push({ pathname: 'contact-us', query: { activatePopup: true } });
  };

  return (
    <CulumnsStyledSectionStyled component="section" sx={{ py: 4 }}>
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

          <BluePricingPaperStyled>
            <div>
              <BestLabelStyled>
                PROMOTIONAL OFFER
              </BestLabelStyled>
              <Typography sx={{ py: 3 }} variant="h5" color="secondary.light">{TAB_TEXT[0].TITLE}</Typography>
              <Typography color="secondary" variant="h3"><sup><small>$</small></sup>{TAB_TEXT[0].PRICE}</Typography>
              <Divider sx={{ my: { xxs: 3, md: 12.5 }, borderColor: 'white' }} />
              <BulletPointContainerStyled>
                <BulletPointStyled color="secondary" variant="subtitle1">
                  <TickIcon fontSize="large" color="secondary" sx={{ mr: 2, width: { xxs: 16, md: 22 }, height: { xxs: 16, md: 22 } }} />
                  {TAB_TEXT[0].BULLET_POINT}
                </BulletPointStyled>
                {
                  TAB_TEXT[0].BULLET_POINTS.map((point) => (
                    <BulletPointStyled color="secondary" key={point} variant="subtitle1">
                      <span style={{ marginLeft: 24 }} />&#8212;&nbsp;
                      {point}
                    </BulletPointStyled>
                  ))
                }
                {
                  TAB_TEXT[0].OTHER_ADVANTAGES.map((point) => (
                    <BulletPointStyled key={point} variant="subtitle1" color="secondary">
                      <TickIcon fontSize="large" color="secondary" sx={{ mr: 2, width: { xxs: 16, md: 22 }, height: { xxs: 16, md: 22 } }} />
                      {point}
                    </BulletPointStyled>
                  ))
                }
              </BulletPointContainerStyled>

            </div>
            <Button
              variant="contained"
              onClick={handleClick}
              fullWidth
              sx={{ mb: 6 }}
            >{BUTTON_TEXT}</Button>
          </BluePricingPaperStyled>

          <WhitePricingPaperStyled>
            <div>
              <Typography sx={{ py: 3 }} color="text.mediumGray" variant="h5">{TAB_TEXT[1].TITLE}</Typography>
              <Typography color="primary" variant="h3"><sup><small>$</small></sup>{TAB_TEXT[1].PRICE}</Typography>

              <Divider sx={{ my: { xxs: 3, md: 11.5 } }} />
              <BulletPointContainerStyled>
                {
                  TAB_TEXT[1].BULLET_POINTS.map((point) => (
                    <BulletPointStyled key={point} variant="subtitle1" color="primary">
                      <TickIcon fontSize="large" color="primary" sx={{ mr: 2, width: { xxs: 16, md: 22 }, height: { xxs: 16, md: 22 } }} />
                      {point}
                    </BulletPointStyled>
                  ))
                }
              </BulletPointContainerStyled>
            </div>
            <Button
              variant="contained"
              onClick={handleClick}
              fullWidth
            >{BUTTON_TEXT}</Button>
          </WhitePricingPaperStyled>

          <WhitePricingPaperStyled>
            <div>
              <Typography sx={{ py: 3 }} variant="h5" color="text.mediumGray">{TAB_TEXT[2].TITLE}</Typography>
              <Typography variant="h3"><sup><small>$</small></sup>{TAB_TEXT[2].PRICE}</Typography>
              <Divider sx={{ my: { xxs: 3, md: 12.5 } }} />
              <BulletPointContainerStyled>
                {
                  TAB_TEXT[2].BULLET_POINTS.map((point) => (
                    <BulletPointStyled textAlign="left" key={point} variant="subtitle1">
                      <TickIcon fontSize="large" color="primary" sx={{ mr: 2, width: { xxs: 16, md: 22 }, height: { xxs: 16, md: 22 } }} />
                      {point}
                    </BulletPointStyled>
                  ))
                }
              </BulletPointContainerStyled>
            </div>
            <Button
              variant="contained"
              onClick={handleClick}
              fullWidth
            >{BUTTON_TEXT}</Button>
          </WhitePricingPaperStyled>

          <WhitePricingPaperStyled>
            <div>
              <Typography sx={{ py: 3 }} variant="h5" color="text.mediumGray">{TAB_TEXT[3].TITLE}</Typography>
              <Typography variant="h3">{TAB_TEXT[3].PRICE}</Typography>
              <Typography variant="body1">{TAB_TEXT[3].PRICE_INFO}</Typography>
              <Divider sx={{ mb: { xxs: 3, md: 12.5 }, mt: { xxs: 3, md: 9.5 } }} />
              <BulletPointContainerStyled>
                {
                  TAB_TEXT[3].BULLET_POINTS.map((point) => (
                    <BulletPointStyled textAlign="left" key={point} variant="subtitle1">
                      <TickIcon
                        fontSize="large"
                        color="primary"
                        sx={{ mr: 2, width: { xxs: 16, md: 22 }, height: { xxs: 16, md: 22 } }}
                      />
                      {point}
                    </BulletPointStyled>
                  ))
                }
              </BulletPointContainerStyled>
            </div>
            <Button
              variant="contained"
              onClick={handleClick}
              fullWidth
            >{BUTTON_TEXT}</Button>
          </WhitePricingPaperStyled>

        </CardsContainerStyled>
      </WhatWeCanStyled>
    </CulumnsStyledSectionStyled>
  );
};

export default PricingOptions;
