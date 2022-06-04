import { Grid, Typography } from "@mui/material";

import { MAIN_BANNER } from "./utils/constants";

import { BulletPointStyled } from "common/mui-components/BulletPointStyled";
import PaperBlured from "common/mui-components/paper-blured";
import { MainBannerStyled } from "utils/styled";

import TickBodylessIcon from "../../../assets/icons/tick-bodyless-icon";

const MainBanner = (
  <MainBannerStyled container gap={20} sx={{ flexDirection: 'column' }}>
    <Grid item sx={{ color: 'secondary.light', textAlign: 'center' }}>
      <Typography variant="h1" fontWeight={500}>
        {MAIN_BANNER.TITLE}
      </Typography>
      <Typography variant="h5" fontWeight={500} sx={{ py: 4 }}>
        {MAIN_BANNER.SUBTITLE}
      </Typography>
    </Grid>
    <Grid item container justifyContent="center" gap={7.5}>
      <Grid item>
        <PaperBlured>
          {<>
            <Typography variant="h5" fontWeight={400} sx={{ pb: 6 }}>
              {MAIN_BANNER.PAPERS[0].TITLE}
            </Typography>
            {
              MAIN_BANNER.PAPERS[0].BULLET_POINTS.map((point) => (
                <BulletPointStyled key={point} variant="subtitle1">
                  <TickBodylessIcon fontSize="large" color="secondary" sx={{ mr: 4 }} />
                  {point}
                </BulletPointStyled>
              ))
            }
          </>
          }
        </PaperBlured>
      </Grid>
      <Grid item>
        <PaperBlured>
          {<>
            <Typography variant="h5" fontWeight={400} sx={{ pb: 6 }}>
              {MAIN_BANNER.PAPERS[1].TITLE}
            </Typography>
            {
              MAIN_BANNER.PAPERS[1].BULLET_POINTS.map((point) => (
                <BulletPointStyled key={point} variant="subtitle1">
                  <TickBodylessIcon fontSize="large" color="secondary" sx={{ mr: 4 }} />
                  {point}
                </BulletPointStyled>
              ))
            }
          </>
          }
        </PaperBlured>
      </Grid>
    </Grid>
  </MainBannerStyled>
);

export default MainBanner;
