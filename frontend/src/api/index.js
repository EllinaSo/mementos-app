import axios from 'axios';

const URL = 'http://localhost:5000';
axios.defaults.baseURL = URL;

export const fetchPosts = () => axios({
  method: 'GET',
  url: 'posts',
});

export const createPost = (newPost) => axios({
  method: 'POST',
  url: 'posts',
  data: newPost,
});

export const updatePost = (id, updatedPost) => axios({
  method: 'PATCH',
  url: `posts/${id}`,
  data: updatedPost,
});

export const likePost = (id) => axios({
  method: 'PATCH',
  url: `posts/${id}/like`,
});

export const deletePost = (id) => axios({
  method: 'DELETE',
  url: `posts/${id}`,
});