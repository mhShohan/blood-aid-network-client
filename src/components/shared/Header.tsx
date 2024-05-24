'use client';

import { IUser } from '@/types';
import { config } from '@/utils/config';
import storage from '@/utils/storage';
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
import { usePathname } from 'next/navigation';
import * as React from 'react';
import Logo from '../UI/Logo';
import PersonIcon from '@mui/icons-material/Person';

const pages = ['Donor', 'All Blood Requests', 'Request Blood', 'About Us'];
const settings = ['Dashboard', 'Logout'];

const Header = () => {
  const token = storage.getToken();
  const [user, setUser] = React.useState<IUser | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);

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

  const handleLogout = () => {
    storage.removeToken();
    setAnchorElUser(null);
    handleCloseUserMenu();
    window.location.href = '/';
  };

  React.useEffect(() => {
    (async () => {
      setIsLoading(true);
      const res = await fetch(`${config.baseUrl}/my-profile`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${token}`,
        },
        cache: 'no-store',
      });
      const result = await res.json();
      if (result.success) {
        setUser(result.data);
      } else {
        storage.removeToken();
      }
      setIsLoading(false);
    })();
  }, [token]);

  return (
    <AppBar
      position='fixed'
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        boxShadow: 0,
      }}
    >
      <Container maxWidth='lg'>
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
                  href={`/${page.toLowerCase().split(' ').join('-')}`}
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
                href={`/${page.toLowerCase().split(' ').join('-')}`}
                text={page}
                onClick={handleCloseNavMenu}
              />
            ))}
          </Box>

          {user ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title={user?.name}>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  {user?.userProfile.profilePicture ? (
                    <Avatar alt={user?.name} src={user?.userProfile.profilePicture} />
                  ) : (
                    <Avatar component={PersonIcon} />
                  )}
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
                  <>
                    {setting === 'Logout' ? (
                      <MenuItem key={setting} onClick={handleLogout}>
                        <Typography
                          sx={{
                            textDecoration: 'none',
                            fontSize: '1.2rem',
                            fontWeight: '500',
                          }}
                        >
                          {setting}
                        </Typography>
                      </MenuItem>
                    ) : (
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
                    )}
                  </>
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
        p: 1,
        display: 'block',
        color: !mobile ? 'primary.light' : 'primary.main',
        ...(pathname === href && { color: '#f44669' }),
        textDecoration: 'none',
        fontSize: '1rem',
        textTransform: 'capitalize',
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
