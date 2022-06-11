import { Grid, Typography } from "@mui/material";

import { MAIN_BANNER } from "./utils/constants";

import { MainBannerStyled } from "utils/styled";

const MainBanner = (
  <MainBannerStyled container gap={20} sx={{ flexDirection: 'column' }}>
    <Grid item sx={{ color: 'secondary.light', textAlign: 'center' }}>
      <Typography variant="h1" fontWeight={500}>
        {MAIN_BANNER.TITLE_1}
      </Typography>
      <Typography variant="h2" fontWeight={500} sx={{ pb: 5 }}>
        {MAIN_BANNER.TITLE_2}
      </Typography>
      <Typography variant="h5" fontWeight={500} sx={{ py: 4, px: 2, maxWidth: 'md' }}>
        {MAIN_BANNER.SUBTITLE}
      </Typography>
      <Typography variant="h5" fontWeight={500} sx={{ py: 4, px: 2, maxWidth: 'md' }}>
        {MAIN_BANNER.PAPERS[0].TITLE}
      </Typography>
      <Typography variant="h5" fontWeight={500} sx={{ pt: 4, px: 2, maxWidth: 'md' }}>
        {MAIN_BANNER.PAPERS[1].TITLE}
      </Typography>
      <Grid item sx={{ textAlign: 'center', pt: 12 }}>
        <Typography variant="h3" fontWeight={400} color="secondary.light">
          {MAIN_BANNER.PAPERS[2].GOOD_LUCK_1}
        </Typography>
        <Typography variant="h3" fontWeight={400} color="secondary.light">
          {MAIN_BANNER.PAPERS[2].GOOD_LUCK_2}
        </Typography>
      </Grid>
    </Grid>
  </MainBannerStyled>
);

export default MainBanner;
