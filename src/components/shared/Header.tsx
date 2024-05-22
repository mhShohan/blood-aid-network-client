'use client';

import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import * as React from 'react';
import Logo from '../UI/Logo';
import { usePathname } from 'next/navigation';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Header = () => {
  const token = false;

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position='fixed'
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        boxShadow: 0,
      }}
    >
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Logo />

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
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
              {pages.map((page) => (
                <LinkTypography
                  key={page}
                  href={`/${page.toLowerCase()}`}
                  text={page}
                  onClick={handleCloseNavMenu}
                  mobile={true}
                />
              ))}
            </Menu>
            <Logo mobile={true} />
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
            }}
          >
            {pages.map((page) => (
              <LinkTypography
                key={page}
                href={`/${page.toLowerCase()}`}
                text={page}
                onClick={handleCloseNavMenu}
              />
            ))}
          </Box>

          {token ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title='Open settings'>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt='Remy Sharp' src='/static/images/avatar/2.jpg' />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id='menu-appbar'
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography
                      component={Link}
                      href={`/${setting.toLowerCase()}`}
                      sx={{
                        textDecoration: 'none',
                        fontSize: '1.2rem',
                        fontWeight: '500',
                      }}
                    >
                      {setting}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : (
            <Box sx={{ flexGrow: 0, display: 'flex' }}>
              <LinkTypography href='/login' text='Login' />
              <LinkTypography href='/register' text='Register' />
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;

const LinkTypography = ({
  href,
  text,
  onClick = () => {},
  mobile = false,
}: {
  href: string;
  text: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  mobile?: boolean;
}) => {
  const pathname = usePathname();

  return (
    <Typography
      component={Link}
      href={href}
      onClick={onClick}
      sx={{
        px: !mobile ? 2 : 0,
        py: 1,
        display: 'block',
        color: !mobile ? 'primary.light' : 'primary.main',
        ...(pathname === href && { color: '#f44669' }),
        textDecoration: 'none',
        fontSize: '1rem',
        textTransform: 'uppercase',
        fontWeight: '600',
        transition: 'all 0.2s',
        '&:hover': {
          color: '#f44669',
        },
      }}
    >
      {text}
    </Typography>
  );
};
