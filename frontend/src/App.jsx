import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { getPosts } from './actions/posts';
import NavBar from './components/NavBar';
import Form from './components/Form';
import Posts from './components/Posts';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <>
      <NavBar />

      <Container maxWidth="lg">
        <Box sx={{ py: 4 }}>
          <Grid container spacing={2} direction={{ xs: 'column-reverse', md: 'row' }}>
            <Grid item xs={12} md={8} lg={9}>
              <Posts />
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Form />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default App;
