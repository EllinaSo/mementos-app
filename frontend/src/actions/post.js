import * as api from '../api';
import {
  CREATE_POST, UPDATE_POST, SET_CURRENT_POST, LOADING_POST, ERROR_POST, SET_DELETE_ERROR,
} from '../constants/post';
import { getPosts } from './posts';

export const setCurrentPost = (postId) => async (dispatch, getState) => dispatch({
  type: SET_CURRENT_POST,
  payload: postId ? getState().posts.list.find((post) => post._id === postId) || null : null,
});

export const createPost = (post) => async (dispatch) => {
  dispatch({ type: LOADING_POST });

  try {
    await api.createPost(post);
    dispatch({ type: CREATE_POST });
    dispatch(getPosts());
  } catch ({ message }) {
    dispatch({ type: ERROR_POST, payload: message });
  }
};

export const updatePost = (post) => async (dispatch) => {
  dispatch({ type: LOADING_POST });

  try {
    await api.updatePost(post._id, post);
    dispatch({ type: UPDATE_POST });
    dispatch(getPosts());
  } catch ({ message }) {
    dispatch({ type: ERROR_POST, payload: message });
  }
};

export const setDeleteError = (message) => ({
  type: SET_DELETE_ERROR, payload: message,
});

export const deletePost = (postId) => async (dispatch, getState) => {
  try {
    await api.deletePost(postId);

    if (getState().post.currentPost._id === postId) {
      dispatch(setCurrentPost(null));
    }

    dispatch(getPosts());
  } catch ({ message }) {
    dispatch(setDeleteError(message));
  }
};
