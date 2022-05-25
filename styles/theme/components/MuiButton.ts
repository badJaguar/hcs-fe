import { PALETTE } from "../palette/palette";

export default {
  styleOverrides: {
    root: {
      fontSize: "16px",
      fontWeight: "bold",
      lineHeight: 1,
      padding: '14px 32px',
    },
    contained: {
      backgroundColor: '#E3C56C',
      '&:hover': {
        backgroundColor: PALETTE.GOLDEN_HOVER
      }
    }
  },
};
