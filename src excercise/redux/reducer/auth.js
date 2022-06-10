import {createSlice} from '@reduxjs/toolkit';
import {login} from '../actions/auth';
import {AUTH_TYPE, USER_DATA} from '../ActionTypes';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    is_login: false,
    user_data: null,
    status: null,
  },
  reducers: {
    authReducer: (state, action) => {
      const {type, payload} = action;
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
    [login.fulfilled]: (state, action) => {
      state.status = 'success';
    },
    [login.pending]: (state, action) => {
      state.status = 'loading';
    },
    [login.rejected]: (state, action) => {
      state.status = 'error';
    },
  },
});

export const {authReducer} = authSlice.actions;

export default authSlice.reducer;
