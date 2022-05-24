import { PALETTE } from '../palette/palette';

export default {
  styleOverrides: {
    root: {
      fontSize: 18,
      fontWeight: 400,
      color: PALETTE.BLACK,
      padding: '0 16px',
      marginBottom: '12px !important',
      "&.Mui-selected": {
        "fontWeight": 600
      }
    },
    textColorInherit: {
      color: PALETTE.BLACK,
      opacity: 1,
    },
    wrapper: {
      flexDirection: 'row',
      alignItems: 'flex-end',
    },
    labelIcon: {
      minHeight: '48px',
    },
  },
};
