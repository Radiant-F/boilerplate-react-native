import {createAsyncThunk} from '@reduxjs/toolkit';
import {fetchLogin} from '../../utils/APIs';

export const login = createAsyncThunk(
  'auth/login',
  async ({formData, navigation}, {dispatch}) => {
    const {data} = await fetchLogin(formData);
  },
);
