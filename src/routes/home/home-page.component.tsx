import React from 'react';
import { Typography, Box, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../../components/logo/logo.component';
import background from '../../assets/background.png';

const HomePage = function HomePage() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        position: 'relative',
        backgroundColor: 'primary.main',
        overflow: 'hidden',
        '&::after': {
          content: '""',
          position: 'absolute',
          right: '-400px',
          display: 'block',
          width: '812px',
          height: '375px',
          top: '0',
          backgroundImage: `url(${background})`,
          backgroundRepeat: 'no-repeat',
          transform: 'rotate(270deg)',
        },
      }}
    >
      <Stack
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        sx={{ padding: 4, minHeight: '100vh' }}
      >
        <Logo />
        <Typography variant="h1" sx={{ mt: 4 }}>
          Once you click your money leak
        </Typography>
        <Stack direction="row" spacing={1} sx={{ mt: 4 }}>
          <Link to="/sign-in" className="link">
            Sign in
          </Link>
          <Typography>/</Typography>
          <Link to="/sign-up" className="link">
            Sign up
          </Link>
        </Stack>
      </Stack>
    </Box>
  );
};

export default HomePage;
