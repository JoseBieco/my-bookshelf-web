import React from 'react';

import { loginStyles } from './login.styles';

const Login: React.FC = () => {
  const classes = loginStyles();
  return <div className={classes.root}>Login</div>;
};

export default Login;
