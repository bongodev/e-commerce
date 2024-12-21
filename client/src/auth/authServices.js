import axios from 'axios';
import { appConfig } from '../common/config';

export const signup = ({ fname, lname, email, password }) =>
  axios.post(`${appConfig.BASE_URL}/api/users/sign-up`, {
    fname,
    lname,
    email,
    password,
  });

