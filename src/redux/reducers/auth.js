import {createSlice} from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user_data: null,
    is_login: true,
  },
  reducers: {
    userData: (state, action) => {
      state.token = action.payload;
    },
    isLogin: (state, action) => {
      state.is_login = action.payload;
    },
  },
});

export const {isLogin, userData} = authSlice.actions;

export default authSlice.reducer;
