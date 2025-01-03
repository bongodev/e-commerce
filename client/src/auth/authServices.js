import axios from 'axios';
import { appConfig } from '../common/config';

const saveAuthUser = (authUser) =>
  localStorage.setItem(appConfig.CURRENT_USER_KEY, JSON.stringify(authUser));

const getAuthUser = () =>
  JSON.parse(localStorage.getItem(appConfig.CURRENT_USER_KEY));

export const isUserLoggedIn = () => Boolean(getAuthUser());

export const getAccessToken = () => getAuthUser()?.accessToken;

export const getRefreshToken = () => getAuthUser()?.refreshToken;

export const signup = ({ fname, lname, email, password }) =>
  axios.post(`${appConfig.BASE_URL}/api/users/sign-up`, {
    fname,
    lname,
    email,
    password,
  });

export const login = async ({ type, email, password, refreshToken }) => {
  const authUser = (
    await axios.post(`${appConfig.BASE_URL}/api/users/login`, {
      type,
      email,
      password,
      refreshToken,
    })
  ).data;

  saveAuthUser(authUser);
  return authUser;
};

export const logout = () => {
  localStorage.removeItem(appConfig.CURRENT_USER_KEY);
};
