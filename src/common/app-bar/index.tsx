import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CallIcon from '@mui/icons-material/Call';

import { Button, Container, IconButton } from '@mui/material';
import Image from 'next/image';

import { useScreenDown } from 'common/hooks/screenSize';

import logo from '../../../assets/logo.svg';

import MobileAppMenu from './mobile-app-menu';
import DesktopAppMenu from './desktop-app-menu';
import { CALL_BACK, COMPANT_NUMBER } from './utils/constants';

const ResponsiveAppBar = () => {
  const isDownXs = useScreenDown("xs");

  const simulateCall = () => window.open(`tel:${COMPANT_NUMBER}`, '_self');

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
            {
              isDownXs ?
                <IconButton
                  onClick={simulateCall}
                  sx={{
                    p: 3,
                    backgroundColor: 'background.golden',
                    color: 'secondary.light',
                    '&:hover': {
                      backgroundColor: 'background.darkenGolden',
                    }
                  }}>
                  <CallIcon />
                </IconButton>
                : <Button variant="contained" onClick={simulateCall}>
                  {CALL_BACK}
                </Button>
            }
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;
