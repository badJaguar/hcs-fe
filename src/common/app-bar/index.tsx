import * as React from 'react';
import { useRouter } from 'next/router';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import CallIcon from '@mui/icons-material/Call';

import { Button, Container, IconButton } from '@mui/material';
import Image from 'next/image';

import { useScreenDown } from 'common/hooks/screenSize';

import logo from '../../../assets/logo.svg';

import MobileAppMenu from './mobile-app-menu';
import DesktopAppMenu from './desktop-app-menu';
import { CALL_BACK } from './utils/constants';
import { COMPANY_NUMBER } from 'utils/constants';

const ResponsiveAppBar = () => {
  const router = useRouter();
  const isDownXs = useScreenDown("xs");

  const simulateCall = () => window.open(`tel:${COMPANY_NUMBER}`, '_self');

  const handleClick = () => router.push('/');

  return (
    <AppBar
      elevation={6}
      position="sticky"
      sx={{
        width: 'auto',
        backgroundColor: "secondary.light"
      }}
    >
      <Container maxWidth="lg" sx={{ margin: 'auto' }}>
        <Toolbar disableGutters>
          <Container
            onClick={handleClick}
            sx={{
              ml: 4,
              display: { xxs: 'none', md: 'flex' },
              width: 'auto',
              cursor: 'pointer'
            }}
          >
            <Image src={logo} alt="Vercel Logo" height={70} />
          </Container>

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
