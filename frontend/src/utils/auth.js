export const setUserToLocalStorage = (userData, token) => {
  localStorage.setItem('profile', JSON.stringify(userData));
  localStorage.setItem('token', token);
};

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem('profile');
  localStorage.removeItem('token');
};

export const getUserFromLocalStorage = () => ({
  profile: JSON.parse(localStorage.getItem('profile')),
  token: localStorage.getItem('token'),
});
