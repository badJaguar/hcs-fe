import { Typography } from "@mui/material";

import { BLOCKQUOTE } from "./utils/constants";
import { BlockquoteContainerStyled, BlockquoteStyled } from "./utils/styled";

const Blockquote = (
  <BlockquoteContainerStyled>
    <BlockquoteStyled component="span">
      {BLOCKQUOTE.TEXT_1}
      <Typography
        component="p"
        fontWeight={500}
        sx={{ my: 5 }}
      >{BLOCKQUOTE.BOLD}</Typography>
      {BLOCKQUOTE.TEXT_2}
    </BlockquoteStyled>
  </BlockquoteContainerStyled>
);

export default Blockquote;
