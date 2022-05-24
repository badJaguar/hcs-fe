import { PALETTE } from "../palette/palette";

export default {
  styleOverrides: {
    root: {
      marginTop: 20,
      background: PALETTE.TRANSPARENT,
    },
    flexContainer: {
      '&:after': {
        content: '"before"',
        fontSize: 0,
        display: 'block',
        position: 'absolute',
        width: '100%',
        height: 2,
        bottom: 0,
        left: 0,
        borderRadius: 4,
        background: PALETTE.TRANSPARENT,
      },
    },
    indicator: {
      height: 6,
      borderRadius: 4,
      background: PALETTE.GOLDEN,
    },
  },
};
