import { combineReducers } from '@reduxjs/toolkit';
import posts from './posts';
import post from './post';
import auth from './auth';

export default combineReducers({
  posts,
  post,
  auth,
});
