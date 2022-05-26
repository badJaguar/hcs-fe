import { PaletteOptions } from '@mui/material';
import { PALETTE } from './palette';

export default {
  primary: {
    light: PALETTE.LIGHT_GRAY,
    main: PALETTE.BLACK,
    dark: PALETTE.BLACK,
    contrastText: '#fff',
    meduimGray: PALETTE.MEDIUM_GRAY,
  },
  secondary: {
    light: PALETTE.WHITE,
    main: PALETTE.WHITE,
    dark: PALETTE.BLACK,
    contrastText: PALETTE.WHITE,
  },
  success: {
    main: PALETTE.SUCCESS,
    dark: PALETTE.DARKER_GREEN,
    light: PALETTE.PIN_GREEN,
  },
  error: {
    main: PALETTE.ERROR,
    light: PALETTE.ERROR_LIGHT,
    dark: PALETTE.ERROR,
    contrastText: PALETTE.WHITE,
  },
  text: {
    primary: PALETTE.BLACK,
    blue: PALETTE.TEXT_BLUE,
    disabled: PALETTE.TEXT_DISABLED,
    mediumGray: PALETTE.MEDIUM_GRAY,
    contrastText: PALETTE.WHITE,
  },
  border: {
    gray: PALETTE.GRAY,
    lightGray: PALETTE.LIGHT_GRAY,
  },
  background: {
    white: PALETTE.WHITE,
    border: PALETTE.GRAY,
    borderLight: PALETTE.LIGHT_GRAY,
    gray: PALETTE.BACKGROUND_GRAY,
    lightGray: PALETTE.BACKGROUND_LIGHT_GRAY,
    lighterGray: PALETTE.BACKGROUND_LIGHT_GRAY,
    darkGray: PALETTE.DARKER_GRAY,
    turquoiseGreen: PALETTE.TURQUOISE,
    darkerGreen: PALETTE.DARKER_GREEN,
    golden: PALETTE.GOLDEN,
    darkenGolden: PALETTE.GOLDEN_HOVER,
    blue: PALETTE.TEXT_BLUE,
  },
} as PaletteOptions;
