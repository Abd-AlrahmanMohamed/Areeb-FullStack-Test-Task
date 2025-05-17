import { createSlice } from '@reduxjs/toolkit';
import getOneUser from '../../../api/Authentication/GetUserById';

const initialState = {
  oneUser: [],
  isLoading: false,
  error: null,  // Add error state if you want to handle errors
};

const getOneUserSlice = createSlice({
  name: 'oneUser',
  initialState,  // Fixed typo here
  extraReducers: (builder) => {  // Use `builder` to handle async actions
    builder
      .addCase(getOneUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;  // Optional: Reset error when loading starts
      })
      .addCase(getOneUser.fulfilled, (state, action) => {
        state.user = action.payload || [];
        state.isLoading = false;
      })
      .addCase(getOneUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;  // Optional: Handle error message
      });
  }
});

export const getOneUserReducer = getOneUserSlice.reducer;
export default getOneUserSlice.reducer;