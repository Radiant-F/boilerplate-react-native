import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {userData} from '../reducers/auth';

const url = 'http://restful-api-laravel-7.herokuapp.com/api';
const urlConfig = token => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const fetchLogin = createAsyncThunk(
  'fetchLogin/auth',
  async ({formData, navigate}, {dispatch}) => {
    const data = await axios.post(`${url}/login`, formData);
    dispatch(userData(data));
  },
);
