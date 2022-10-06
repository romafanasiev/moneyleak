import React from 'react';
import { Box } from '@mui/material';
import background from '../../assets/background.png';

type Props = {
  children: React.ReactNode;
};

const LogInContainer: React.FC<Props> = function LogInContainer({ children }) {
  return (
    <Box
      sx={{
        position: 'relative',

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',

        padding: 3,

        minHeight: '100vh',

        backgroundColor: 'primary.main',
        overflow: 'hidden',
        '&::after': {
          content: '""',
          position: 'absolute',
          top: '200px',
          right: '-400px',

          display: 'block',
          width: '812px',
          height: '375px',

          backgroundImage: `url(${background})`,
          transform: 'rotate(270deg)',
        },
      }}
    >
      {children}
    </Box>
  );
};

export default LogInContainer;
