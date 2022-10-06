import React from 'react';
import { Typography, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../../components/logo/logo.component';
import LogInContainer from '../../components/log-in-container/log-in-container';

const HomePage = function HomePage() {
  return (
    <LogInContainer>
      <Logo />
      <Typography variant="h1" sx={{ mt: 4 }}>
        Once you click your money leak
      </Typography>
      <Stack direction="row" spacing={1} sx={{ mt: 4 }}>
        <Link to="sign_in" className="link link__main-page">
          Sign in
        </Link>
        <Typography sx={{ fontWeight: '700' }}>/</Typography>
        <Link to="sign_up" className="link link__main-page">
          Sign up
        </Link>
      </Stack>
    </LogInContainer>
  );
};

export default HomePage;
