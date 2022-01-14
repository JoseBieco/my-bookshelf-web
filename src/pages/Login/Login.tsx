import React from 'react';

import { Grid, Paper, Typography } from '@material-ui/core';

import LoginForm from '../../components/LoginForm/LoginForm';

import { loginStyles } from './Login.styles';

const Login: React.FC = () => {
  const classes = loginStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={false} sm={4} md={9} className={classes.image} />
      <Grid item xs={12} sm={8} md={3} component={Paper} elevation={8}>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <LoginForm />
        </div>
      </Grid>
    </Grid>
  );
};

export default Login;
