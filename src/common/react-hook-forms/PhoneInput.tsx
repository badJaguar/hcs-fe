import { ForwardedRef, forwardRef } from "react";

import { TextFieldStyled } from "./utils/styled";

const PhoneInput = (props: Record<string, string>, ref: ForwardedRef<HTMLElement>) => {

  return (
    <TextFieldStyled
      {...props}
      inputRef={ref}
      fullWidth
    />
  );
};

export default forwardRef(PhoneInput);
