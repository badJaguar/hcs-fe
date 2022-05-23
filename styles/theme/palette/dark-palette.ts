import { PaletteOptions } from '@mui/material';
import { PALETTE } from './palette';

export default {
  background: {
    default: PALETTE.BACKGROUND_DARK_MODE,
    paper: PALETTE.LIGHT_GRAY,
  },
  primary: {
    light: PALETTE.WHITE,
    main: PALETTE.WHITE,
    dark: PALETTE.WHITE,
    contrastText: PALETTE.WHITE,
    meduimGray: PALETTE.WHITE,
  },
  text: {
    primary: PALETTE.WHITE,
    secondary: PALETTE.WHITE,
    disabled: PALETTE.WHITE,
    mediumGray: PALETTE.WHITE,
    contrastText: PALETTE.WHITE,
  },
} as PaletteOptions;
