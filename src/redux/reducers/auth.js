import {createSlice} from '@reduxjs/toolkit';
import {login} from '../actions/auth';
import {AUTH_TYPE, USER_DATA} from '../ActionTypes';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    is_login: true,
    user_data: null,
    status: null,
  },
  reducers: {
    authReducers: (state, action) => {
      const {type, payload} = action.payload;
      switch (type) {
        case AUTH_TYPE:
          return {...state, is_login: !state.is_login};
        case USER_DATA:
          return {...state, user_data: payload};
        default:
          return state;
      }
    },
  },
  extraReducers: {
    [login.pending]: state => {
      state.status = 'loading';
    },
    [login.fulfilled]: state => {
      state.status = 'success';
    },
    [login.rejected]: state => {
      state.status = 'error';
    },
  },
});

export const {authReducers} = authSlice.actions;

export default authSlice.reducer;
