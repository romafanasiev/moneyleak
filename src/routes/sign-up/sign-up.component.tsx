import React from 'react';
import { Paper, Typography } from '@mui/material';
import LogInContainer from '../../components/log-in-container/log-in-container';
import Logo from '../../components/logo/logo.component';
import Form from '../../components/form/form.component';

// const initialState = {
//   textInput: '123',
// };

const SignUpPage = function SignUpPage() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const methods = useForm({ defaultValues: initialState });

  const onSubmit = (data: any) => console.log(data);

  return (
    <LogInContainer>
      <Paper
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '32px',

          margin: 'auto',
          padding: 3,

          width: { xs: '270px', sm: '380px' },

          textAlign: 'center',
        }}
      >
        <Logo />
        <Typography variant="h2" color="primary">
          Sign up
        </Typography>
        <Typography color="primary">Create a new account</Typography>
        <Form onSubmit={onSubmit} types={['login', 'email', 'password']} />
      </Paper>
    </LogInContainer>
  );
};

export default SignUpPage;
