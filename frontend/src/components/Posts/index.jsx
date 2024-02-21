import React from 'react';
import { useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';

import Post from './components/Post';

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((store) => store.posts);

  return (
    <Grid container spacing={2}>
      {posts.length ? posts.map((post) => (
        <Grid item xs={12} sm={6} key={post._id}>
          <Post data={post} onEdit={() => setCurrentId(post._id)} />
        </Grid>
      )) : <CircularProgress />}
    </Grid>
  );
};

export default Posts;
