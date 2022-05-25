import { Grid, Typography } from "@mui/material";
import Image from "next/image";

import { WHO_WE } from "common/text/who-we";
import { useScreenDown } from "common/hooks/screenSize";

import image from "/assets/team.png";

import { ImageGridContainerStyled, WhoWeContainerStyled } from "./styled";

const WhoWeAre = () => {
  const isDownMd = useScreenDown("md");

  return (
    <WhoWeContainerStyled>
      <Grid container maxWidth="lg">
        <Grid item xs={6} >
          <Typography
            variant={isDownMd ? "h4" : "h3"}
            sx={{ pb: { xxs: 4, md: 8 } }}
          >
            {WHO_WE.TITLE}
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>{WHO_WE.CONTENT_1}</Typography>
          <Typography variant="body1">{WHO_WE.CONTENT_2}</Typography>
        </Grid>
        <ImageGridContainerStyled item xs={6} >
          <Image src={image} />
        </ImageGridContainerStyled>
      </Grid>
    </WhoWeContainerStyled>
  );
};

export default WhoWeAre;
