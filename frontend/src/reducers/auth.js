import {
  GOOGLE_AUTH, ERROR_GOOGLE_AUTH, LOADING_GOOGLE_AUTH, LOGOUT,
} from '../constants/auth';

const STORE = {
  profile: JSON.parse(localStorage.getItem('profile')),
  token: localStorage.getItem('profile'),
  loading: false,
  error: null,
};

export default (store = STORE, action) => {
  switch (action.type) {
    case LOADING_GOOGLE_AUTH:
      return { ...store, loading: true, error: null };
    case ERROR_GOOGLE_AUTH:
      return { ...store, loading: false, error: action.payload };
    case GOOGLE_AUTH:
      return {
        ...store, profile: action.payload.profile, token: action.payload.token, loading: false,
      };
    case LOGOUT:
      return { ...store, profile: null, token: null };
    default:
      return store;
  }
};
