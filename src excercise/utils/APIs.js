import axios from 'axios';

const url = 'https://lalala.com';
const tokenConfig = token => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const fetchLogin = formData =>
  axios.post(`${url}/user/signin`, formData);
