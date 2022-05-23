/* eslint-disable max-len */
import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

const useStyles = makeStyles((theme: Theme) => createStyles({
  '@global': {
    '*::-webkit-scrollbar-track': {
      borderRadius: '10px',
      backgroundColor: theme.palette.background.gray,
    },
    '*::-webkit-scrollbar': {
      width: '8px',
      height: '8px',
      backgroundColor: theme.palette.background.gray,
    },

    '*::-webkit-scrollbar-thumb': {
      borderRadius: '50px',
      backgroundColor: theme.palette.background.border,
    },

    'input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active': {
      '-webkit-box-shadow': '0 0 0 30px white inset !important',
      height: 0,
    },
    'html, body, #__next': {
      height: '100vh',
      width: '100vw',
      letterSpacing: '0.5px',
      color: theme.palette.primary.dark,
      overflow: 'hidden',
      overflowY: 'auto',
      backgroundColor: theme.palette.background.lightGray,
    },
    body: {
      margin: 0,
      paddingRight: '0 !important', // more info https://github.com/mui-org/material-ui/issues/10000,
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
    },
    '#__next': {
      display: 'flex',
      flexDirection: 'column',
    },
  },
}));

const GlobalStyles = (): null => {
  useStyles();

  return null;
};

export default GlobalStyles;
