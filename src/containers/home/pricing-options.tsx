import { Grid, Paper, Typography } from "@mui/material";

import { TAB_TEXT, WHAT_WE } from "common/text/pricing-options";
import { useScreenDown } from "common/hooks/screenSize";

import BulbIcon from "../../../assets/icons/bulb-icon";
import HandshakeIcon from "../../../assets/icons/handshake-icon";
import StatisticsDocIcon from "../../../assets/icons/statistics-doc-icon";

import { CulumnsStyledSectionStyled, WhatWeCanStyled } from "./styled";

const PricingOptions = () => {
  const isDownMd = useScreenDown("md");

  return (
    <CulumnsStyledSectionStyled component="section">
      <WhatWeCanStyled container maxWidth="lg" sx={{ px: { xxs: 2, md: 4 } }}>
        <Grid item xs={6} sx={{ pb: { xxs: 4, md: 15 } }}>
          <Typography
            variant={isDownMd ? "h4" : "h3"}
            sx={{ pb: { xxs: 4, md: 8 } }}
          >
            {WHAT_WE.TITLE}
          </Typography>
          <Typography component="article" variant="body1" sx={{ mb: 4 }}>{WHAT_WE.CONTENT_1}</Typography>
        </Grid>
        <Grid container flexDirection="row" gap={10} justifyContent="center" width="100%" zIndex={1}>
          <Paper elevation={15} sx={{ p: 6, maxWidth: 270 }}>
            <BulbIcon sx={{ height: 56, width: 56 }} />
            <Typography sx={{ py: 3 }} variant="h5">Lorem Ipsum</Typography>
            <Typography variant="body1">{TAB_TEXT}</Typography>
          </Paper>
          <Paper elevation={15} sx={{ p: 6, maxWidth: 270 }}>
            <HandshakeIcon sx={{ height: 56, width: 56 }} />
            <Typography sx={{ py: 3 }} variant="h5">Lorem Ipsum</Typography>
            <Typography variant="body1">{TAB_TEXT}</Typography>
          </Paper>
          <Paper elevation={15} sx={{ p: 6, maxWidth: 270 }}>
            <StatisticsDocIcon sx={{ height: 56, width: 56 }} />
            <Typography sx={{ py: 3 }} variant="h5">Lorem Ipsum</Typography>
            <Typography variant="body1">{TAB_TEXT}</Typography>
          </Paper>
        </Grid>
      </WhatWeCanStyled>
    </CulumnsStyledSectionStyled>
  );
};

export default PricingOptions;
