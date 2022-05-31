import { memo } from "react";

import { PaperStyled } from "./styled";

const PaperBlured = ({ children }: { children: React.ReactNode; }) => {
  return (
    <PaperStyled>
      {children}
    </PaperStyled>
  );
};

export default memo(PaperBlured);
