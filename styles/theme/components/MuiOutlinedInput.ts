import { PALETTE } from "../palette/palette";

export default {
  styleOverrides: {
    root: {
      minHeight: 48,

      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: PALETTE.TEXT_BLUE,
        bordrWidth: 1,
      },

      input: {
        height: '100%',
      },

      '&:hover fieldset': {
        borderColor: `${PALETTE.TEXT_BLUE} !important`,
      },
      '& .Mui-disabled': {
        opacity: 1,
      },
    },
  },
};
