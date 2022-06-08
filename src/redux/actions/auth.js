import {createAsyncThunk} from '@reduxjs/toolkit';
import {fetchLogin} from '../../utils/APIs';
import {USER_DATA} from '../ActionTypes';
import {authReducers} from '../reducers/auth';

export const login = createAsyncThunk(
  'auth/login',
  async ({formData, navigation}, {dispatch}) => {
    const {data} = await fetchLogin(formData);
    dispatch(authReducers({type: USER_DATA, payload: data}));
    // navigation.navigate('Dashboard');
  },
);
