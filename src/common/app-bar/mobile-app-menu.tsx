import * as React from 'react';

import Image from 'next/image';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';

import logo from '../../../assets/logo.svg';
import { PAGES } from './constants';

const MobileAppMenu = () => {

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (

    <Box sx={{ flexGrow: 1, display: { xxs: 'flex', md: 'none' } }}>
      <IconButton
        size="large"
        aria-label="main menu"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
        sx={{
          color: 'primary.dark', height: 52,
          width: 52,
          margin: 'auto'
        }}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: 'block', md: 'none' },
        }}
      >
        {PAGES.map((page) => (
          <MenuItem key={page} onClick={handleCloseNavMenu}>
            <Typography color="primary.dark" textAlign="center">{page}</Typography>
          </MenuItem>
        ))}
      </Menu>
      <Container sx={{ ml: 4 }}>
        <Image src={logo} alt="Vercel Logo" height={70} />
      </Container>
    </Box>
  );
};

export default MobileAppMenu;
