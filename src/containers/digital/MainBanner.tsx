import { Grid, Typography } from "@mui/material";
import { BulletPointStyled } from "common/mui-components/BulletPointStyled";

import PaperBlured from "common/mui-components/paper-blured";
import { MainBannerStyled } from "utils/styled";

import TickBodylessIcon from "../../../assets/icons/tick-bodyless-icon";

import { MAIN_BANNER, PAPER } from "./utils/constants";

const MainBanner = (
  <MainBannerStyled item container gap={20}>
    <Grid item sx={{ color: 'secondary.light' }} md={5} xs={12}>
      <Typography variant="h1" fontWeight={500}>
        {MAIN_BANNER.TITLE}
      </Typography>
      <Typography variant="h5" fontWeight={500} sx={{ py: 4 }}>
        {MAIN_BANNER.SUBTITLE}
      </Typography>
      <Typography variant="subtitle1" fontWeight={400}>
        {MAIN_BANNER.CONTENT_1}
      </Typography>
      <Typography variant="subtitle1" fontWeight={400} sx={{ pt: 2 }}>
        {MAIN_BANNER.CONTENT_2}
      </Typography>
    </Grid>

    <Grid item>
      <PaperBlured>
        <Typography variant="h5" fontWeight={500} sx={{ pb: 4 }}>
          {PAPER.TITLE}
        </Typography>
        {
          PAPER.BULLET_POINTS.map((point) => (
            <BulletPointStyled key={point} variant="subtitle1">
              <TickBodylessIcon fontSize="large" color="secondary" sx={{ mr: 4 }} />
              {point}
            </BulletPointStyled>
          ))
        }
      </PaperBlured>
    </Grid>
  </MainBannerStyled>
);

export default MainBanner;
