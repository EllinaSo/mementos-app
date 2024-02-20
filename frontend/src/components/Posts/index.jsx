import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';

import { getPosts } from '../../actions/posts';

import Post from './components/Post';

const Posts = () => {
  const posts = useSelector((store) => store.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <Grid container spacing={2}>

      {posts.map((post) => (
        <Grid item xs={12} sm={6} key={post._id}>
          <Post data={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
