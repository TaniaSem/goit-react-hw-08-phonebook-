import { logIn, logOut, refreshUser, register } from './authOperatoins';
import { toast } from 'react-hot-toast';

const { createSlice } = require('@reduxjs/toolkit');

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: builder =>
    builder
      .addCase(register.pending, (state, action) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        toast.success(`Success! You are logged in `, {
          duration: 4000,
          position: 'top-center',
        });
      })
      .addCase(register.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
        toast.error(`Sorry, wrong data!`, {
          duration: 4000,
          position: 'top-center',
        });
      })
      .addCase(logIn.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        toast.success(`You are logged in `);
      })
      .addCase(logIn.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
        toast.error(`Sorry, try again `, {
          duration: 4000,
          position: 'top-center',
        });
      })
      .addCase(logOut.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        toast.success(`You are logged out `, {
          duration: 4000,
          position: 'top-center',
        });
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      }),
});

export const authReducer = authSlice.reducer;
