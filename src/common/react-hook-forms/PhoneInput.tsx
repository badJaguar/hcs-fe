import { TextField } from "@mui/material";
import { ForwardedRef, forwardRef } from "react";

const PhoneInput = (props: Record<string, string>, ref: ForwardedRef<HTMLElement>) => {

  return (
    <TextField
      {...props}
      inputRef={ref}
      fullWidth
    />
  );
};

export default forwardRef(PhoneInput);
