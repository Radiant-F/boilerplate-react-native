import axios from 'axios';

const url = 'https://your-host.com';
const tokenConfig = token => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const fetchLogin = formData =>
  axios.post(`${url}/user/signin`, formData);
export const fetchTodo = token => axios.get(`${url}/todos`, tokenConfig(token));
