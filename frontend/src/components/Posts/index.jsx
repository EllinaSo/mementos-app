import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

import { setCurrentPost, deletePost, setDeleteError } from '../../actions/post';

import Post from './components/Post';
import Skeleton from './components/Skeleton';

const SKELETONS = [...Array(4).keys()];

const Posts = () => {
  const dispatch = useDispatch();
  const {
    list: posts, loading, error,
  } = useSelector((store) => store.posts);
  const { deleteError } = useSelector((store) => store.post);

  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }
  return (
    <>
      <Grid container spacing={2}>
        {loading
          ? SKELETONS.map((skeleton) => (
            <Grid item xs={12} sm={6} key={skeleton}>
              <Skeleton />
            </Grid>
          ))
          : posts.map((post) => (
            <Grid item xs={12} sm={6} key={post._id}>
              <Post
                data={post}
                onEdit={() => dispatch(setCurrentPost(post._id))}
                onDelete={() => dispatch(deletePost(post._id))}
              />
            </Grid>
          ))}
      </Grid>

      <Snackbar
        open={Boolean(deleteError)}
        onClose={() => dispatch(setDeleteError(null))}
      >
        <Alert severity="error">
          {deleteError}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Posts;
