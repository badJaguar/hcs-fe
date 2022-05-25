import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";

import * as TEXT from "common/text/home";
import { useScreenDown } from "common/hooks/screenSize";
import image from "/assets/hemes-home.png";

import { GreetingsStyled } from "./styled";

const MainBanner = () => {
  const isDownXs = useScreenDown("xs");
  const isDownMd = useScreenDown("md");

  return (
    <Box sx={{ position: "relative" }} component="section">
      <GreetingsStyled sx={{ top: isDownMd ? 0 : '10%' }}>
        <Typography variant={isDownMd ? "h4" : "h2"} color="secondary">
          {TEXT.TITLE}
        </Typography>
        <Typography
          component="article"
          variant={isDownXs ? "subtitle2" : "subtitle1"}
          color="secondary"
          sx={{
            mt: { xxs: 4, md: 8 },
            lineHeight: 1.5
          }}>
          {TEXT.GREETINGS}
        </Typography>
        <Button variant="contained" sx={{ mt: 10, px: 16 }}>
          {TEXT.CONTACT_US}
        </Button>
      </GreetingsStyled>
      <Box maxWidth="xxl" sx={{ backgroundColor: "background.lightGray" }}>
        <Image src={image} />
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
