import React, { useState } from 'react';
import { Paper, Typography, Link, Stack, Alert } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { AuthError, AuthErrorCodes } from 'firebase/auth';
import LogInContainer from '../../components/log-in-container/log-in-container';
import Logo from '../../components/logo/logo.component';
import Form from '../../components/form/form.component';
import loginModalStyles from '../../utils/styles/login-modal.styles';
import { useAppDispatch } from '../../store/store';
import { signIn } from '../../store/user/user.reducer';

type FormValues = {
  email: string;
  password: string;
};

const SignInPage = function SignInPage() {
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit = async (data: FormValues) => {
    const { email, password } = data;
    try {
      if (email !== undefined && password !== undefined) {
        await dispatch(signIn({ email, password })).unwrap();
        navigate('/outlay');
      }
    } catch (error) {
      switch ((error as AuthError).code) {
        case AuthErrorCodes.INVALID_PASSWORD:
          setErrorMessage('Incorrect password for email');
          break;
        case AuthErrorCodes.USER_DELETED:
          setErrorMessage('Incorrect email');
          break;
        default:
          setErrorMessage('Error occured');
      }
    }
  };

  return (
    <LogInContainer>
      <Paper sx={loginModalStyles}>
        <Logo />
        <Typography variant="h2" color="primary">
          Sign in
        </Typography>
        <Typography color="primary">Enter your email and password</Typography>
        <Form onSubmit={onSubmit} types={['email', 'password']} />
        <Stack flexDirection="row">
          <Typography color="primary">
            Don’t have an account ? /&nbsp;
          </Typography>
          <Link component={RouterLink} color="primary" to="/sign_up">
            Sign up
          </Link>
        </Stack>
      </Paper>
      {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
    </LogInContainer>
  );
};

export default SignInPage;
