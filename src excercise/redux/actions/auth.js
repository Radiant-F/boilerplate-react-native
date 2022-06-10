import {createAsyncThunk} from '@reduxjs/toolkit';
import {fetchLogin} from '../../utils/APIs';
import {USER_DATA} from '../ActionTypes';
import {authReducer} from '../reducer/auth';

export const login = createAsyncThunk(
  'auth/login',
  async ({formData, navigation}, {dispatch}) => {
    const {data} = await fetchLogin(formData);
    dispatch(authReducer({type: USER_DATA, payload: data}));
    navigation.navigate('Dashboard');
  },
);
