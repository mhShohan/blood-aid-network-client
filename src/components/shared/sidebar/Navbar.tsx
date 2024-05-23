import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { MouseEventHandler } from 'react';
import Logo from '@/components/UI/Logo';

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
        <Logo />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
