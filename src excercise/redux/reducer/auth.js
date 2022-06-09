import {createSlice} from '@reduxjs/toolkit';
import {AUTH_TYPE} from '../ActionTypes';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    is_login: true,
    user_data: null,
    status: null,
  },
  reducers: {
    authReducer: (state, payload) => {
      const {type, payload} = payload;
      switch (type) {
        case AUTH_TYPE:
          return {...state, is_login: !state.is_login};
        default:
          return state;
      }
    },
  },
  extraReducers: {},
});

export const {authReducer} = authSlice.actions;

export default authSlice.reducer;
