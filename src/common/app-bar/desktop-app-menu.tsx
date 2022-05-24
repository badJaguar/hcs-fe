import * as React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { PAGES } from './utils/constants';
import { MenuItemButtonStyled } from './utils/styled';

const DesktopAppMenu = () => {

  return (
    <Box sx={{
      flexGrow: 1,
      justifyContent: 'flex-end',
      pr: 3,
      display: { xxs: 'none', md: 'flex' }
    }}>
      {PAGES.map((page) => (
        <MenuItemButtonStyled key={page}>
          <Typography variant="subtitle1" textAlign="center">{page}</Typography>
        </MenuItemButtonStyled>
      ))
      }
    </Box >
  );
};

export default DesktopAppMenu;
