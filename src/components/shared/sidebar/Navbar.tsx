import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { MouseEventHandler } from 'react';
import Logo from '@/components/UI/Logo';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const Navbar = ({
  handleDrawerToggle,
}: {
  handleDrawerToggle: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <AppBar
      position='fixed'
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, bgcolor: 'primary.main' }}
    >
      <Toolbar>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          edge='start'
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>

        {/* Top bar content */}
        <Box display='flex' justifyContent='space-between' alignItems='center' width='100%'>
          <Logo />
          <Button
            color='info'
            sx={{ padding: '.4rem 1.5rem', display: 'flex', gap: '4px', alignItems: 'center' }}
          >
            Logout <PowerSettingsNewIcon />
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
