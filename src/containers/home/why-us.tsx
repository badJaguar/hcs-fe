import { Grid, Typography } from "@mui/material";
import Image from "next/image";

import { WHY_US } from "common/text/why-us";
import { useScreenDown } from "common/hooks/screenSize";

import image from "/assets/why-us.png";

import { ImageGridContainerStyled, WithoutColumnsSectionStyled } from "./styled";

const WhyUs = () => {
  const isDownMd = useScreenDown("md");

  return (
    <WithoutColumnsSectionStyled component="section">
      <Grid container maxWidth="lg" gap={5}>
        <ImageGridContainerStyled item xs={5}>
          <Image src={image} alt="Our team" />
        </ImageGridContainerStyled>
        <Grid item xs={6} gap={6}>
          <Typography
            variant={isDownMd ? "h4" : "h3"}
            sx={{ pb: { xxs: 4, md: 8 } }}
          >
            {WHY_US.TITLE}
          </Typography>
          <article>
            <Typography component="span" variant="body1" sx={{ mb: 4 }}>{WHY_US.CONTENT_1}</Typography>
            <Typography component="span" variant="body1" fontWeight="bold">{WHY_US.BOLDED}</Typography>
            <Typography component="span" variant="body1">{WHY_US.CONTENT_2}</Typography>
          </article>
          <article>
            <Typography component="span" variant="body1">{WHY_US.CONTENT_3}</Typography>
          </article>
        </Grid>
      </Grid>
    </WithoutColumnsSectionStyled>
  );
};

export default WhyUs;
