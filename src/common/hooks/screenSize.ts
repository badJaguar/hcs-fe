import { useMediaQuery, useTheme } from '@mui/material';
import { Breakpoint } from '@mui/material/styles';
import breakpoints from '../../../styles/theme/breakpoints';

export type OverridenBreakpoint = keyof typeof breakpoints.values;

export const useScreenDown = (breakpoint: OverridenBreakpoint): boolean => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down(breakpoint as Breakpoint));
};

export const useScreenUp = (breakpoint: OverridenBreakpoint): boolean => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.up(breakpoint as Breakpoint));
};
