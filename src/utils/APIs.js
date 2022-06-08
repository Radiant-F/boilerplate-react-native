import axios from 'axios';

const url = 'https://memories-saya.herokuapp.com';
const tokenConfig = token => ({
  headers: {
    Authentication: `Bearer ${token}`,
  },
});

export const fetchLogin = formData =>
  axios.post(`${url}/user/signin`, formData);
