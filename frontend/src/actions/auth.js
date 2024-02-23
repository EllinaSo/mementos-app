import * as api from '../api/auth';
import {
  GOOGLE_AUTH, LOADING_GOOGLE_AUTH, ERROR_GOOGLE_AUTH, LOGOUT,
} from '../constants/auth';

export const setError = (message) => ({
  type: ERROR_GOOGLE_AUTH, payload: message,
});

export const loginGoogle = (token) => async (dispatch) => {
  dispatch({ type: LOADING_GOOGLE_AUTH });

  try {
    const { data } = await api.getUserData(token);

    localStorage.setItem('profile', JSON.stringify(data));
    localStorage.setItem('token', token);
    dispatch({ type: GOOGLE_AUTH, payload: { profile: data, token } });

    return Promise.resolve();
  } catch ({ message }) {
    dispatch(setError(message));
    return Promise.reject();
  }
};

export const logout = () => async (dispatch) => {
  localStorage.removeItem('profile');
  localStorage.removeItem('token');
  dispatch({ type: LOGOUT });
};
