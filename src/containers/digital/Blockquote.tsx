import { Typography } from "@mui/material";

import { BLOCKQUOTE } from "./utils/constants";
import { BlockquoteContainerStyled, BlockquoteStyled } from "./utils/styled";

const Blockquote = (
  <BlockquoteContainerStyled>
    <BlockquoteStyled component="span">
      {BLOCKQUOTE.TEXT_1}
      <Typography sx={{ pt: 4 }} fontWeight={500} component="p">
        {BLOCKQUOTE.FACT}
      </Typography>
      <Typography component="p">
        {BLOCKQUOTE.TEXT_2}
      </Typography>
      <Typography
        component="p"
        fontWeight={500}
        sx={{ my: 5 }}
      >{BLOCKQUOTE.BOLD}</Typography>
    </BlockquoteStyled>
  </BlockquoteContainerStyled>
);

export default Blockquote;
