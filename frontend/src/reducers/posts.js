import {
  FETCH_ALL, LOADING_ALL, ERROR_ALL, ADD_POST, REMOVE_POST, EDIT_POST,
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
    case ADD_POST:
      return { ...store, list: [...store.list, action.payload] };
    case REMOVE_POST:
      return { ...store, list: store.list.filter(({ _id: id }) => id !== action.payload) };
    case EDIT_POST:
      return {
        ...store,
        list: store.list.map(
          (post) => (post._id === action.payload._id ? { ...post, ...action.payload } : post),
        ),
      };
    default:
      return store;
  }
};
