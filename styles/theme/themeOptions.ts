import { ThemeOptions } from '@mui/material/styles';

import breakpoints from './breakpoints';
import components from './components';
import defaultTheme from './defaultTheme';
import lightPalette from './palette/light-palette';
import shape from './shape';
import typography from './typography';
import shadows from './shadows';

const themeOptions: ThemeOptions = {
  components,
  shape,
  typography,
  breakpoints,
  spacing: defaultTheme.spacing,
  palette: lightPalette,
  shadows
};

export default themeOptions;
