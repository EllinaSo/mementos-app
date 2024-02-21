import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';

import Post from './components/Post';
import Skeleton from './components/Skeleton';
import { setCurrentPost } from '../../actions/post';

const SKELETONS = [...Array(4).keys()];

const Posts = () => {
  const dispatch = useDispatch();
  const { list: posts, loading, error } = useSelector((store) => store.posts);

  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }
  return (
    <Grid container spacing={2}>
      {loading
        ? SKELETONS.map((skeleton) => (
          <Grid item xs={12} sm={6} key={skeleton}>
            <Skeleton />
          </Grid>
        ))

        : posts.map((post) => (
          <Grid item xs={12} sm={6} key={post._id}>
            <Post data={post} onEdit={() => dispatch(setCurrentPost(post._id))} />
          </Grid>
        ))}
    </Grid>
  );
};

export default Posts;
