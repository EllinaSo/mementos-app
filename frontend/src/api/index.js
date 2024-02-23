import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? 'https://mementos-app-production.up.railway.app/' : 'http://localhost:5000',
});

export const fetchPosts = () => instance({
  method: 'GET',
  url: 'posts',
});

export const createPost = (newPost) => instance({
  method: 'POST',
  url: 'posts',
  data: newPost,
});

export const updatePost = (id, updatedPost) => instance({
  method: 'PATCH',
  url: `posts/${id}`,
  data: updatedPost,
});

export const likePost = (id) => instance({
  method: 'PATCH',
  url: `posts/${id}/like`,
});

export const deletePost = (id) => instance({
  method: 'DELETE',
  url: `posts/${id}`,
});
