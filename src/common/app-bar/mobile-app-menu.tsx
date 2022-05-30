import * as React from 'react';
import { useRouter } from 'next/router';

import Image from 'next/image';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';

import Link from 'common/NextLink';

import logo from '../../../assets/logo.svg';
import { PAGES_WEB } from './utils/constants';

const MobileAppMenu = () => {
  const router = useRouter();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleClick = () => router.push('/');

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
        <MenuIcon fontSize="large" />
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
        {PAGES_WEB.map(p => (
          <MenuItem key={p.label} onClick={handleCloseNavMenu}>
            <Link sx={{ textDecoration: 'none' }} href={p.value}>{p.label}</Link>
          </MenuItem>
        ))}
      </Menu>
      <Container
        onClick={handleClick}
        sx={{ cursor: 'pointer' }}
      >
        <Image
          src={logo}
          alt="Hermes Corporate Solutions Logo"
          layout="intrinsic"
          quality={100}
          height={'70px'}
          loading="eager"
        />
      </Container>
    </Box>
  );
};

export default MobileAppMenu;
