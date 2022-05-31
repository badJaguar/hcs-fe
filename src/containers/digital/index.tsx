import { Grid } from "@mui/material";

import Blockquote from "./Blockquote";
import MainBanner from "./MainBanner";
import Seo from "./Seo";
import SeoAdvantages from "./SeoAdvantages";
import SeoGive from "./SeoGive";

export const Digital = () => {
  return (
    <Grid container>
      {MainBanner}
      {Blockquote}
      {Seo}
      {SeoAdvantages}
      {SeoGive}
    </Grid>
  );
};
