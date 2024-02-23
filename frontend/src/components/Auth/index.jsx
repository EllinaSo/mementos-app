import React from 'react';
import Grid from '@mui/material/Grid';

import Form from './components/Form';

const Auth = () => (
  <Grid container justifyContent="center">
    <Grid item xs={12} sm={9} md={6} lg={5}>
      <Form />
    </Grid>
  </Grid>
);

export default Auth;
