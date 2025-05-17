import { createSlice } from '@reduxjs/toolkit';
import updateOneUser from '../../../api/Authentication/UpdateUser';

const initialState = {
  updateUser: [],
  isLoading: false,
  error: null,  // Add error state if you want to handle errors
};

const updateUserSlice = createSlice({
  name: 'updateUser',
  initialState,  // Fixed typo here
  extraReducers: (builder) => {  // Use `builder` to handle async actions
    builder
      .addCase(updateOneUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;  // Optional: Reset error when loading starts
      })
      .addCase(updateOneUser.fulfilled, (state, action) => {
        state.updateUser = action.payload || [];
        state.isLoading = false;
      })
      .addCase(updateOneUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;  // Optional: Handle error message
      });
  }
});

export const updateUserReducer = updateUserSlice.reducer;
export default updateUserSlice.reducer;