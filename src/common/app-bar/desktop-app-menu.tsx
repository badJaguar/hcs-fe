import * as React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { PAGES } from './constants';

const DesktopAppMenu = () => {

  return (
    <Box sx={{
      flexGrow: 1,
      justifyContent: 'flex-end',
      pr: 3,
      display: { xxs: 'none', md: 'flex' }
    }}>
      {PAGES.map((page) => (
        <Button
          key={page}
          sx={{ my: 2, mx: 1, color: 'primary.dark', display: 'block' }}
        >
          <Typography variant="subtitle1" textAlign="center">{page}</Typography>
        </Button>
      ))}
    </Box>
  );
};

export default DesktopAppMenu;
