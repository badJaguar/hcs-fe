import { Grid, Typography } from "@mui/material";
import Image from "next/image";

import { WHO_WE } from "common/text/who-we";
import { useScreenDown } from "common/hooks/screenSize";

import image from "/assets/team.png";

import { ImageGridContainerStyled, WithoutColumnsSectionStyled } from "utils/styled";

const WhoWeAre = () => {
  const isDownMd = useScreenDown("md");

  return (
    <WithoutColumnsSectionStyled component="section">
      <Grid container maxWidth="lg" gap={5} justifyContent="center" alignItems="center">
        <Grid item xs={6} >
          <Typography
            variant={isDownMd ? "h4" : "h3"}
            sx={{ pb: { xxs: 4, md: 8 } }}
          >
            {WHO_WE.TITLE}
          </Typography>
          <Grid item md={10} xs={12}>
            <Typography component="article" variant="body1" sx={{ mb: 4 }}>{WHO_WE.CONTENT_1}</Typography>
            <Typography component="article" variant="body1">{WHO_WE.CONTENT_2}</Typography>
          </Grid>
        </Grid>
        <ImageGridContainerStyled item md={5}>
          <Image src={image} alt="Our team" />
        </ImageGridContainerStyled>
      </Grid>
    </WithoutColumnsSectionStyled>
  );
};

export default WhoWeAre;
