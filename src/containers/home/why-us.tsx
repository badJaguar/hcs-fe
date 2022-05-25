import { Grid, Typography } from "@mui/material";
import Image from "next/image";

import { WHY_US } from "common/text/why-us";
import { useScreenDown } from "common/hooks/screenSize";

import image from "/assets/team.png";

import { ImageGridContainerStyled, WhoWeContainerStyled } from "./styled";

const WhyUs = () => {
  const isDownMd = useScreenDown("md");

  return (
    <WhoWeContainerStyled component="section">
      <Grid container maxWidth="lg" gap={5}>
        <ImageGridContainerStyled item xs={5}>
          <Image src={image} />
        </ImageGridContainerStyled>
        <Grid item xs={6} gap={6}>
          <Typography
            variant={isDownMd ? "h4" : "h3"}
            sx={{ pb: { xxs: 4, md: 8 } }}
          >
            {WHY_US.TITLE}
          </Typography>
          <Typography component="article" variant="body1" sx={{ mb: 4 }}>{WHY_US.CONTENT_1}</Typography>
          <Typography component="article" variant="body1">{WHY_US.CONTENT_2}</Typography>
        </Grid>
      </Grid>
    </WhoWeContainerStyled>
  );
};

export default WhyUs;
