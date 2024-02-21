import axios from 'axios';

const URL = process.env.NODE_ENV === 'production' ? 'https://mementos-app-production.up.railway.app/' : 'http://localhost:5000';
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
