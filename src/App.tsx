import React from 'react';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Montserrat from './assets/fonts/montserrat.ttf';
import HomePage from './routes/home/home-page.component';
import Navigation from './components/navigation/navigation.component';
import SignInPage from './routes/sign-in/sign-in.component';
import SignUpPage from './routes/sign-up/sign-up.component';
import OutlayPage from './routes/outlay/outlay.component';

const theme = createTheme({
  palette: {
    primary: {
      light: '#faff9e',
      main: '#c5fb6c',
      dark: '#92c83a',
      contrastText: '#0e0e0f',
    },
    secondary: {
      light: '#353535',
      main: '#0e0e0f',
      dark: '#000000',
      contrastText: '#c5fb6c',
    },
    error: {
      light: '#ff5a36',
      main: '#ff0000',
      dark: '#c20000',
    },
    text: {
      primary: '#0e0e0f',
      secondary: '#a2a1a2',
    },
    background: {
      default: '#fdfdfd',
      paper: '#0e0e0f',
    },
  },
  typography: {
    fontFamily: 'Montserrat, sans-serif',
    h1: {
      fontWeight: '700',
      letterSpacing: '0.4px',
      fontSize: '4rem',
    },
    h2: {
      fontWeight: '700',
      letterSpacing: '0.4px',
      fontSize: '24px',
    },
    h3: {
      letterSpacing: '0.4px',
      fontWeight: '700',
      fontSize: '19px',
    },
    h4: {
      letterSpacing: '0.2px',
      fontWeight: '600',
      fontSize: '14px',
    },
    body1: {
      fontSize: '14px',
      letterSpacing: '0.3px',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 400;
          src: url(${Montserrat}) format('woff2');
        },
      `,
    },
    MuiButton: {
      styleOverrides: {
        root: {
          height: '48px',
          borderRadius: '8px',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          height: '48px',
          borderRadius: '8px',
          color: 'primary',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
        },
      },
    },
  },
});

const App = function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="outlay" element={<Navigation />}>
          <Route index element={<OutlayPage />} />
        </Route>
        <Route path="sign_in" element={<SignInPage />} />
        <Route path="sign_up" element={<SignUpPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
