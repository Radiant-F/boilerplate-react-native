import {createSlice} from '@reduxjs/toolkit';
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
          return {...state, is_login: payload};
        case USER_DATA:
          return {...state, user_data: payload};
        default:
          return state;
      }
    },
  },
  extraReducers: {},
});

export const {authReducers} = authSlice.actions;

export default authSlice.reducer;
