import axios from 'axios';

const url = 'https://localhost:3000';
const config = token => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const fetchLogin = formData => axios.post(url, formData);
