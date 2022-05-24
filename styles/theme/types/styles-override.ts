import { PaletteMode } from "@mui/material";
import { Spacing } from "@mui/system";

export type PaletteOptionsOverriden = {
  primary: {
    light: string;
    main: string;
    dark: string;
    contrastText: string;
    meduimGray: string;
  };
  secondary: {
    light: string;
    main: string;
    dark: string;
    contrastText: string;
  };
  success: {
    main: string;
    dark: string;
    light: string;
  };
  blue: {
    light: string;
    main: string;
    dark: string;
  };
  error: {
    main: string;
    light: string;
    dark: string;
  };
  text: {
    primary: string;
    secondary: string;
    disabled: string;
    mediumGray: string;
  };
  background: {
    blue: string;
    darkBlue: string;
    white: string;
    border: string;
    borderLight: string;
    gray: string;
    lightGray: string;
    darkGray: string;
    turquoiseGreen: string;
    darkerGreen: string;
  };
  mode: PaletteMode;
};

declare module '@mui/material/styles' {
  interface Theme {
    palette: PaletteOptionsOverriden;
  }

  type PaletteOptions = PaletteOptionsOverriden;
}

declare module '@mui/styles/defaultTheme' {
  interface DefaultTheme {
    palette: PaletteOptionsOverriden;
  }

  type PaletteOptions = PaletteOptionsOverriden;
}

declare module '@emotion/react' {
  export interface Theme {
    palette: PaletteOptionsOverriden;
    spacing: Spacing;
  }
}
