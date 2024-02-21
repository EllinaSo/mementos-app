import {
  CREATE_POST, UPDATE_POST, SET_CURRENT_POST, LOADING_POST, ERROR_POST, SET_DELETE_ERROR,
} from '../constants/post';

const STORE = {
  currentPost: null,
  loading: false,
  error: null,
  deleteError: null,
};

export default (store = STORE, action) => {
  switch (action.type) {
    case LOADING_POST:
      return { ...store, loading: true, error: null };
    case ERROR_POST:
      return { ...store, loading: false, error: action.payload };
    case SET_CURRENT_POST:
      return { ...store, currentPost: action.payload, error: null };
    case CREATE_POST:
    case UPDATE_POST:
      return { ...store, currentPost: null, loading: false };
    case SET_DELETE_ERROR:
      return { ...store, deleteError: action.payload };
    default:
      return store;
  }
};
