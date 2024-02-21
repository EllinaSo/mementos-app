import * as api from '../api';
import {
  FETCH_ALL, LOADING_ALL, ERROR_ALL,
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
