import { memo } from "react";
import { PaperProps } from "@mui/material";

import { PaperStyled } from "./styled";

interface PaperBluredProps extends PaperProps {
  children: React.ReactNode;
}

const PaperBlured = ({ children, ...rest }: PaperBluredProps) => {
  return (
    <PaperStyled {...rest}>
      {children}
    </PaperStyled>
  );
};

export default memo(PaperBlured);
