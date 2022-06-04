import { memo } from "react";
import { PaperProps } from "@mui/material";

import { PaperStyled } from "./styled";

const PaperBlured = ({ children, props }: { children: React.ReactNode; props?: PaperProps; }) => {
  return (
    <PaperStyled {...props}>
      {children}
    </PaperStyled>
  );
};

export default memo(PaperBlured);
