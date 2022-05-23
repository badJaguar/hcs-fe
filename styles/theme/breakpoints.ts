import { Breakpoints, Theme } from '@mui/material';

declare module '@mui/material/styles' {
  type DefaultTheme = Theme;
  interface BreakpointOverrides {
    xxs: true,
    xxl: true;
  }
}

export default {
  keys: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
  values: {
    xxs: 1,
    xs: 600,
    sm: 960,
    md: 1080,
    lg: 1300,
    xl: 1600,
    xxl: 1920,
  },
} as { unit: string; step: number; } & Breakpoints;
