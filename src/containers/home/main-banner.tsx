import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";

import * as TEXT from "common/text/home";
import { useScreenDown } from "common/hooks/screenSize";
import image from "/assets/hermes-home.jpg";

import { GreetingsStyled } from "./styled";
import { useRouter } from "next/router";

const MainBanner = () => {
  const isDownMd = useScreenDown("md");
  const router = useRouter();

  const clickHandle = () => router.push('/contact-us');

  return (
    <Box sx={{ position: "relative" }} component="section">
      <GreetingsStyled sx={{ top: isDownMd ? 0 : '10%' }}>
        <Typography
          variant={isDownMd ? "h5" : "h2"}
          color="secondary"
        >
          {TEXT.SLOGAN_1}
        </Typography>
        <Typography
          variant={isDownMd ? "h5" : "h2"}
          color="secondary"
        >
          {TEXT.SLOGAN_2}
        </Typography>
        <Button
          variant="contained"
          sx={{ mt: { xxs: 4, md: 10 }, px: 16 }}
          onClick={clickHandle}
        >
          {TEXT.CONTACT_US}
        </Button>
      </GreetingsStyled>
      <Box maxWidth="xxl" sx={{ backgroundColor: "background.lightGray", width: '100vw' }}>
        <Image
          src={image}
          alt="Hermes home"
          objectFit="cover"
          quality={100}
          sizes="50vw"
          priority
        />
      </Box>
      {/* <RecommendationsContainerStyled container>
        <RecommendationStyled item container>
          <Typography variant="h2" color="text.blue" sx={{ pr: 4 }}>{TEXT.TOTALS[0].count}</Typography>
          <Typography variant="caption">{TEXT.TOTALS[0].value}</Typography>
        </RecommendationStyled>
        {!isDownXs && <Divider orientation="vertical" sx={{ borderColor: 'border.gray', height: 24, mt: 4.5 }} />}
        <RecommendationStyled item container>
          <Typography variant="h2" color="text.blue" sx={{ pr: 4 }}>{TEXT.TOTALS[1].count}</Typography>
          <Typography variant="caption">{TEXT.TOTALS[1].value}</Typography>
        </RecommendationStyled>
        {!isDownXs && <Divider orientation="vertical" sx={{ borderColor: 'border.gray', height: 24, mt: 4.5 }} />}
        <RecommendationStyled item container>
          <Typography variant="h2" color="text.blue" sx={{ pr: 4 }}>{TEXT.TOTALS[2].count}</Typography>
          <Typography variant="caption">{TEXT.TOTALS[2].value}</Typography>
        </RecommendationStyled>
      </RecommendationsContainerStyled> */}
    </Box>
  );
};

export default MainBanner;
