import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DoneIcon from '@mui/icons-material/Done';

import { createPost, updatePost } from '../../actions/posts';

import { VisuallyHiddenInput } from './styles';

const STATE = {
  creator: '',
  title: '',
  message: '',
  tags: '',
  selectedFile: '',
};

const Form = ({ currentId, setCurrentId }) => {
  const fileInputRef = useRef();
  const dispatch = useDispatch();
  const post = useSelector(
    ({ posts }) => (currentId ? posts.find((storePost) => storePost._id === currentId) : null),
  );

  const [postData, setPostData] = useState(STATE);
  const {
    creator, title, message, tags, selectedFile,
  } = postData;

  useEffect(() => {
    if (post) {
      fileInputRef.current.value = '';
      setPostData({ ...STATE, ...post });
    }
  }, [post]);

  const clear = () => {
    fileInputRef.current.value = '';
    setPostData(STATE);
    setCurrentId(null);
  };

  const submitHandle = async (e) => {
    e.preventDefault();
    if (currentId) {
      await dispatch(updatePost(currentId, postData));
    } else {
      await dispatch(createPost(postData));
    }
    clear();
  };

  const changeHandle = ({ target: { name, value } }) => {
    setPostData((prev) => ({ ...prev, [name]: value }));
  };

  const getBase64 = (file) => new Promise((resolve) => {
    let baseURL = '';
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      baseURL = reader.result;
      resolve(baseURL);
    };
  });

  const resetInputFile = () => {
    fileInputRef.current.value = '';
    setPostData((prev) => ({ ...prev, selectedFile: '' }));
  };

  const fileLoadHandle = ({ target }) => {
    const file = target.files[0];
    if (file.type.startsWith('image/')) {
      getBase64(file)
        .then((base64) => {
          setPostData((prev) => ({ ...prev, selectedFile: base64 }));
        })
        .catch(() => {
          resetInputFile();
        });
    } else {
      resetInputFile();
    }
  };

  return (
    <Card>
      <Box sx={{ p: 2 }} as="form" onSubmit={submitHandle}>
        <Typography component="div" variant="h6">
          {currentId ? 'Edit' : 'Create'}
          {' '}
          a Memento
        </Typography>

        <Box sx={{ py: 2 }}>

          <Grid container spacing={2} fullWidth>
            <Grid item xs={12} sm={6} md={12}>
              <TextField fullWidth name="creator" label="Creator" variant="outlined" size="small" value={creator} onChange={changeHandle} />
            </Grid>
            <Grid item xs={12} sm={6} md={12}>
              <TextField fullWidth name="title" label="Title" variant="outlined" size="small" value={title} onChange={changeHandle} />
            </Grid>
            <Grid item xs={12} sm={6} md={12}>
              <TextField fullWidth name="message" label="Message" variant="outlined" size="small" multiline rows={2} value={message} onChange={changeHandle} />
            </Grid>
            <Grid item xs={12} sm={6} md={12}>
              <TextField fullWidth name="tags" label="Tags" variant="outlined" size="small" multiline rows={2} value={tags} onChange={changeHandle} placeholder="tag1, tag2, tag3, ... " />
            </Grid>
            <Grid item xs={12}>
              <Stack alignItems="center" direction="row" spacing={2} flexWrap="wrap">
                {selectedFile && <DoneIcon color="success" />}
                <Button
                  component="label"
                  role={undefined}
                  variant="text"
                  tabIndex={-1}
                  startIcon={<CloudUploadIcon />}
                >
                  Upload file
                  <VisuallyHiddenInput type="file" accept="image/*" onChange={fileLoadHandle} ref={fileInputRef} />
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Box>

        <Stack spacing={2} direction="row">
          <Button variant="contained" fullWidth type="submit" onClick={submitHandle}>Submit</Button>
          <Button variant="outlined" fullWidth onClick={clear}>Clear</Button>
        </Stack>
      </Box>
    </Card>
  );
};

export default Form;
