import { combineReducers } from '@reduxjs/toolkit';
import posts from './posts';
import post from './post';

export default combineReducers({
  posts,
  post,
});
