import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { Container } from '@mui/material';
import Image from 'next/image';

import logo from '../../../assets/logo.svg';
import MobileAppMenu from './mobile-app-menu';
import DesktopAppMenu from './desktop-app-menu';
import { CALL_BACK } from './constants';

const ResponsiveAppBar = () => {

  return (
    <AppBar
      elevation={0}
      position="static"
      sx={{ width: 'auto', backgroundColor: "secondary.light" }}
    >
      <Container maxWidth="lg" sx={{ margin: 'auto' }}>
        <Toolbar disableGutters>
          <Typography
            noWrap
            component="a"
            href="/"
            sx={{ display: { xxs: 'none', md: 'flex' } }}
          >
            <Container sx={{ ml: 4 }}>
              <Image src={logo} alt="Vercel Logo" height={70} />
            </Container>
          </Typography>

          <MobileAppMenu />
          <DesktopAppMenu />

          <Box sx={{ flexGrow: 0 }}>
            <Button variant="contained" sx={{ py: 3.5, px: 8, backgroundColor: '#E3C56C' }}>
              <Typography textAlign="center">{CALL_BACK}</Typography>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
