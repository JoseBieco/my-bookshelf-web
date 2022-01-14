import React from 'react';

import { Grid, Typography } from '@material-ui/core';

import { notFoundStyles } from './NotFound.styles';

const NotFound: React.FC = () => {
  const classes = notFoundStyles();
  return (
    <Grid container className={classes.root}>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        className={`${classes.image} ${classes.flexContent}`}
      >
        <Typography component="h1" variant="h5">
          404 - não achei
        </Typography>
      </Grid>
    </Grid>
  );
};

export default NotFound;
