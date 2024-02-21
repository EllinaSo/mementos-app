import * as api from '../api';
import {
  FETCH_ALL, LOADING_ALL, ERROR_ALL, ADD_POST, REMOVE_POST, EDIT_POST,
} from '../constants/posts';

export const getPosts = () => async (dispatch) => {
  dispatch({ type: LOADING_ALL });

  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch ({ message }) {
    dispatch({ type: ERROR_ALL, payload: message });
  }
};

export const addPost = (post) => ({ type: ADD_POST, payload: post });

export const removePost = (postId) => ({ type: REMOVE_POST, payload: postId });

export const editPost = (post) => ({ type: EDIT_POST, payload: post });
