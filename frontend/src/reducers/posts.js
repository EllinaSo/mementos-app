import {
  FETCH_ALL, LOADING_ALL, ERROR_ALL,
} from '../constants/posts';

const STORE = {
  list: [],
  loading: false,
  error: null,
};

export default (store = STORE, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return { ...store, list: action.payload, loading: false };
    case LOADING_ALL:
      return { ...store, loading: true, error: null };
    case ERROR_ALL:
      return { ...store, loading: false, error: action.payload };
    default:
      return store;
  }
};
