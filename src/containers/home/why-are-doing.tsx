import { Grid, Paper, Typography } from "@mui/material";

import { useScreenDown } from "common/hooks/screenSize";

import { WHY_ARE_DOING, WHY_ARE_DOING_BLOCQUOTES } from "common/text/why-are-doing";

import { CulumnsStyledSectionStyled, WhatWeCanStyled, WhoWeAreTitle } from "./styled";

const WhyAreWeDoingThis = () => {
  const isDownMd = useScreenDown("md");

  return (
    <CulumnsStyledSectionStyled component="section">
      <WhatWeCanStyled container maxWidth="lg" sx={{ px: { xxs: 2, md: 4 } }}>
        <Grid item xs={6} sx={{ pb: { xxs: 4, md: 15 } }}>
          <Typography
            variant={isDownMd ? "h4" : "h3"}
            sx={{ pb: { xxs: 4, md: 8 } }}
          >
            {WHY_ARE_DOING.TITLE}
          </Typography>
          <Typography component="article" variant="subtitle1" sx={{ mb: 4, lineHeight: 1.5 }}>{WHY_ARE_DOING.CONTENT_1}</Typography>
          <Typography component="article" variant="subtitle1" sx={{ mb: 4, lineHeight: 1.5 }}>{WHY_ARE_DOING.CONTENT_2}</Typography>
        </Grid>
        <Paper elevation={15} sx={{ p: 6, zIndex: 1 }}>
          <Grid container wrap="nowrap" direction="row" gap={10} justifyContent="center" zIndex={1}>
            <Grid item container gap={8} flexDirection="column" wrap="nowrap" sx={{
              textAlign: 'left',
              pl: 5,
              borderLeft: ({ palette }) => `2px solid ${palette.border.gray}`,
            }}>
              <Grid item xs={9} md={6}>
                <WhoWeAreTitle
                  variant={isDownMd ? "h5" : "h4"}
                  sx={{ pb: { xxs: 2, md: 4 } }}
                >
                  {WHY_ARE_DOING_BLOCQUOTES[0].TITLE}
                </WhoWeAreTitle>
                <Typography component="article" variant="body1" sx={{ mb: 4 }}>
                  {WHY_ARE_DOING_BLOCQUOTES[0].CONTENT}
                </Typography>
              </Grid>
              <Grid item xs={9} md={6}>
                <WhoWeAreTitle
                  variant={isDownMd ? "h5" : "h4"}
                  sx={{ pb: { xxs: 2, md: 4 } }}
                >
                  {WHY_ARE_DOING_BLOCQUOTES[1].TITLE}
                </WhoWeAreTitle>
                <Typography component="article" variant="body1" sx={{ mb: 4 }}>
                  {WHY_ARE_DOING_BLOCQUOTES[1].CONTENT}
                </Typography>
              </Grid>
            </Grid>
            <Grid item container gap={8} flexDirection="column" wrap="nowrap" sx={{
              textAlign: 'left',
              pl: 5,
              borderLeft: ({ palette }) => `2px solid ${palette.border.gray}`,
            }}>
              <Grid item xs={9} md={6}>
                <WhoWeAreTitle
                  variant={isDownMd ? "h5" : "h4"}
                  sx={{ pb: { xxs: 2, md: 4 } }}
                >
                  {WHY_ARE_DOING_BLOCQUOTES[2].TITLE}
                </WhoWeAreTitle>
                <Typography component="article" variant="body1" sx={{ mb: 4 }}>
                  {WHY_ARE_DOING_BLOCQUOTES[2].CONTENT}
                </Typography>
              </Grid>
              <Grid item xs={9} md={6}>
                <WhoWeAreTitle
                  variant={isDownMd ? "h5" : "h4"}
                  sx={{ pb: { xxs: 2, md: 4 } }}
                >
                  {WHY_ARE_DOING_BLOCQUOTES[3].TITLE}
                </WhoWeAreTitle>
                <Typography component="article" variant="body1" sx={{ mb: 4 }}>
                  {WHY_ARE_DOING_BLOCQUOTES[3].CONTENT}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>

      </WhatWeCanStyled>
    </CulumnsStyledSectionStyled>
  );
};

export default WhyAreWeDoingThis;
