import { Container, Grid, Typography } from "@mui/material";
import { BulletPointStyled } from "common/mui-components/BulletPointStyled";
import Image from "next/image";
import TickBodylessIcon from "../../../assets/icons/tick-bodyless-icon";

import { SEO } from "./utils/constants";
import { ImageGridContainerStyled, SeoContainerStyled } from "./utils/styled";

import image from "/assets/i-mac.png";

const Seo = (
  <SeoContainerStyled component="section">
    <Grid container maxWidth="xl" gap={5} justifyContent="center" alignItems="center">
      <ImageGridContainerStyled item md={6}>
        <Image src={image} alt="Somebody's mac" />
      </ImageGridContainerStyled>
      <Grid item xs={10} md={5}>
        <Typography variant="h3" sx={{ pb: { xxs: 4, md: 8 } }}>
          {SEO.TITLE}
        </Typography>
        <Grid item>
          <Typography component="article" variant="body1" sx={{ mb: 4 }}>{SEO.CONTENT_1}</Typography>
          <Typography component="article" variant="body1">{SEO.CONTENT_2}</Typography>
          <Container sx={{ mt: { md: 6, xxs: 5 } }}>
            {
              SEO.BULLET_POINTS.map((point) => (
                <BulletPointStyled key={point} variant="body1">
                  <TickBodylessIcon fontSize="large" color="primary" sx={{ mr: 4 }} />
                  {point}
                </BulletPointStyled>
              ))
            }
          </Container>
        </Grid>
      </Grid>
    </Grid>
  </SeoContainerStyled>
);

export default Seo;
