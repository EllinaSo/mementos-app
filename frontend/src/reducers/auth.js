import {
  AUTH,
  ERROR_GOOGLE_AUTH,
  LOADING_GOOGLE_AUTH,
  LOGOUT,
  LOADING_AUTH,
  ERROR_AUTH,
} from '../constants/auth';
import {
  getUserFromLocalStorage,
} from '../utils/auth';

const { profile, token } = getUserFromLocalStorage();

const STORE = {
  profile,
  token,
  loading: false,
  error: null,
  loadingAuth: false,
  errorAuth: false,
};

export default (store = STORE, action) => {
  switch (action.type) {
    case LOADING_GOOGLE_AUTH:
      return { ...store, loading: true, error: null };
    case ERROR_GOOGLE_AUTH:
      return { ...store, loading: false, error: action.payload };
    case AUTH:
      return {
        ...STORE, profile: action.payload.profile, token: action.payload.token,
      };
    case LOGOUT:
      return { ...store, profile: null, token: null };
    case LOADING_AUTH:
      return { ...store, loadingAuth: true, errorAuth: null };
    case ERROR_AUTH:
      return { ...store, loadingAuth: false, errorAuth: action.payload };
    default:
      return store;
  }
};
