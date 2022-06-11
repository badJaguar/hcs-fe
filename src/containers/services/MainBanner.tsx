import { Grid, Typography } from "@mui/material";

import { MAIN_BANNER } from "./utils/constants";

import PaperBlured from "common/mui-components/paper-blured";
import { MainBannerStyled } from "utils/styled";

const MainBanner = (
  <MainBannerStyled container gap={20} sx={{ flexDirection: 'column' }}>
    <Grid item sx={{ color: 'secondary.light', textAlign: 'center' }}>
      <Typography variant="h1" fontWeight={500}>
        {MAIN_BANNER.TITLE}
      </Typography>
      <Typography variant="h5" fontWeight={500} sx={{ py: 4, px: 2, maxWidth: 'xl' }}>
        {MAIN_BANNER.SUBTITLE}
      </Typography>
    </Grid>
    <Grid item container justifyContent="center" gap={7.5}>
      <Grid item xs={5}>
        <PaperBlured>
          <Typography variant="h5" fontWeight={400} sx={{ pb: 6 }}>
            {MAIN_BANNER.PAPERS[0].TITLE}
          </Typography>
        </PaperBlured>
      </Grid>
      <Grid item xs={5}>
        <PaperBlured>
          <Typography variant="h5" fontWeight={400} sx={{ pb: 6 }}>
            {MAIN_BANNER.PAPERS[1].TITLE}
          </Typography>
        </PaperBlured>
      </Grid>
      <Grid item sx={{ textAlign: 'center' }}>
        <Typography variant="h2" fontWeight={500} color="secondary.light">
          {MAIN_BANNER.PAPERS[2].GOOD_LUCK_1}
        </Typography>
        <Typography variant="h2" fontWeight={500} color="secondary.light">
          {MAIN_BANNER.PAPERS[2].GOOD_LUCK_2}
        </Typography>
      </Grid>
    </Grid>
  </MainBannerStyled>
);

export default MainBanner;
