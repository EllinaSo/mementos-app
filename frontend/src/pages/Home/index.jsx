import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Grid from '@mui/material/Grid';

import { getPosts } from '../../actions/posts';
import Form from './components/Form';
import Posts from './components/Posts';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <Grid container spacing={2} direction={{ xs: 'column-reverse', md: 'row' }}>
      <Grid item xs={12} md={8} lg={9}>
        <Posts />
      </Grid>
      <Grid item xs={12} md={4} lg={3}>
        <Form />
      </Grid>
    </Grid>
  );
};

export default Home;
