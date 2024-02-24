import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://www.googleapis.com',
});

export const getUserData = (token) => instance({
  method: 'GET',
  url: 'oauth2/v1/userinfo',
  params: { access_token: token },
});
