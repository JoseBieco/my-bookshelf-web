import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { Button, TextField } from '@material-ui/core';

import { Inputs } from './LoginForm.interfaces';
import { loginFromStyles } from './LoginForm.styles';

const LoginForm: React.FC = () => {
  const classes = loginFromStyles();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    alert(JSON.stringify(data));
  };

  //console.log(watch('password'));
  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        id="email"
        label="Email"
        autoComplete="email"
        placeholder="my@email.com"
        autoFocus
        {...register('email', { required: true })}
        error={!!errors.email}
        helperText={errors.email && 'Email is required'}
      />
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        placeholder="********"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        {...register('password', { required: true, minLength: 6 })}
        error={!!errors.password}
        helperText={errors.password && 'Password is required'}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Sign In
      </Button>
    </form>
  );
};

export default LoginForm;
