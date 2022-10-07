import React, { useState } from 'react';
import { Alert, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { AuthError, AuthErrorCodes } from 'firebase/auth';
import LogInContainer from '../../components/log-in-container/log-in-container';
import Logo from '../../components/logo/logo.component';
import Form from '../../components/form/form.component';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import { loginModalStyles } from '../../utils/styles/login-modal.styles';

type FormValues = {
  login: string;
  email: string;
  password: string;
};

const SignUpPage = function SignUpPage() {
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const onSubmit = async (data: FormValues) => {
    const { email, password, login } = data;

    try {
      const response = await createAuthUserWithEmailAndPassword(
        email,
        password,
      );

      if (response) {
        await createUserDocumentFromAuth(response.user, {
          displayName: login,
        });

        navigate('sign_in');
      }
    } catch (error) {
      if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
        setErrorMessage('Cannot create user, email already in use');
      } else {
        setErrorMessage('User creation encountered an error');
      }
    }
  };

  return (
    <LogInContainer>
      <Paper sx={loginModalStyles}>
        <Logo />
        <Typography variant="h2" color="primary">
          Sign up
        </Typography>
        <Typography color="primary">Create a new account</Typography>
        <Form onSubmit={onSubmit} types={['login', 'email', 'password']} />
      </Paper>
      {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
    </LogInContainer>
  );
};

export default SignUpPage;
