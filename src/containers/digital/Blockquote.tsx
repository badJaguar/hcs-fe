import { Typography } from "@mui/material";

import { BLOCKQUOTE } from "./utils/constants";
import { BlockquoteContainerStyled, BlockquoteStyled } from "./utils/styled";

const Blockquote = (
  <BlockquoteContainerStyled>
    <BlockquoteStyled component="span">
      {BLOCKQUOTE.TEXT}
      <Typography
        component="p"
        fontWeight={500}
        sx={{ my: 5 }}
      >{BLOCKQUOTE.BOLD}</Typography>
    </BlockquoteStyled>
  </BlockquoteContainerStyled>
);

export default Blockquote;
