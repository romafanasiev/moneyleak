import React from 'react';
import { Typography, Stack, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Logo from '../../components/logo/logo.component';
import LogInContainer from '../../components/log-in-container/log-in-container';

const HomePage = function HomePage() {
  const linkStyles = { color: 'secondary.main', fontWeight: 700 };
  return (
    <LogInContainer>
      <Logo />
      <Typography variant="h1" sx={{ mt: 4 }}>
        Once you click your money leak
      </Typography>
      <Stack direction="row" spacing={1} sx={{ mt: 4 }}>
        <Link
          to="sign_in"
          component={RouterLink}
          color="secondary"
          sx={linkStyles}
        >
          Sign in
        </Link>
        <Typography sx={linkStyles}>/</Typography>
        <Link to="sign_up" component={RouterLink} sx={linkStyles}>
          Sign up
        </Link>
      </Stack>
    </LogInContainer>
  );
};

export default HomePage;
