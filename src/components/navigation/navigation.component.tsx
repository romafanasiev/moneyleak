import React from 'react';
import { AppBar, Toolbar, IconButton, Stack } from '@mui/material';
import { Outlet } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../logo/logo.component';

const Navigation: React.FC = function Navigation() {
  return (
    <>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{ width: '100%' }}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Logo />
          </Stack>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};

export default Navigation;
