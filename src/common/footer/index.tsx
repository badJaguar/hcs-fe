import { Typography } from "@mui/material";
import dayjs from "dayjs";

import { StyledFooter } from "./styled";

const Footer = () => {
  const currentYear = dayjs().year();
  return (
    <StyledFooter>
      <Typography variant="body2">
        ©Lorem Ipsum {currentYear}. All rights reserved
      </Typography>
    </StyledFooter>
  );
};

export default Footer;
