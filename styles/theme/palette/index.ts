import { PaletteMode } from '@mui/material';
import darkPalette from './dark-palette';
import lightPalette from './light-palette';

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode, ...(mode === 'light' ? { ...lightPalette } : { ...darkPalette }),
  },
});
