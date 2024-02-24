import * as apiGoogle from '../api/google';
import * as api from '../api';
import {
  AUTH,
  LOADING_GOOGLE_AUTH,
  ERROR_GOOGLE_AUTH,
  LOGOUT,
  LOADING_AUTH,
  ERROR_AUTH,
} from '../constants/auth';

import { setUserToLocalStorage, removeUserFromLocalStorage } from '../utils/auth';

export const setError = (message) => ({
  type: ERROR_GOOGLE_AUTH, payload: message,
});

export const loginGoogle = (token, callback) => async (dispatch) => {
  dispatch({ type: LOADING_GOOGLE_AUTH });

  try {
    const { data } = await apiGoogle.getUserData(token);
    setUserToLocalStorage(data, token);
    dispatch({ type: AUTH, payload: { profile: data, token } });

    callback();
  } catch ({ message }) {
    dispatch(setError(message));
  }
};

export const logout = () => async (dispatch) => {
  removeUserFromLocalStorage();
  dispatch({ type: LOGOUT });
};

export const setErrorAuth = (message) => ({
  type: ERROR_AUTH, payload: message,
});

export const signIn = (userData, callback) => async (dispatch) => {
  dispatch({ type: LOADING_AUTH });

  try {
    const { data } = await api.signIn(userData);

    setUserToLocalStorage(data.result, data.token);
    dispatch({ type: AUTH, payload: { profile: data.result, token: data.token } });

    callback();
  } catch ({ message }) {
    dispatch(setErrorAuth(message));
  }
};

export const setErrorSignUp = (message) => ({
  type: ERROR_AUTH, payload: message,
});

export const signUp = (userData, callback) => async (dispatch) => {
  dispatch({ type: LOADING_AUTH });

  try {
    const { data } = await api.signUp(userData);

    setUserToLocalStorage(data.result, data.token);
    dispatch({ type: AUTH, payload: { profile: data.result, token: data.token } });

    callback();
  } catch ({ message }) {
    dispatch(setErrorAuth(message));
  }
};
