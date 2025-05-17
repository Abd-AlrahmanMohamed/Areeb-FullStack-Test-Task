import { createSlice } from '@reduxjs/toolkit';
import RegisteringApi from '../../../api/Authentication/RegestringApi';

const initialState = {
  register: [], 
  isLoading: false,
  error: null, 
};

const registeringSlice = createSlice({
  name: 'register',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(RegisteringApi.pending, (state) => {
        state.isLoading = true;
        state.error = null;  
      })
      .addCase(RegisteringApi.fulfilled, (state, action) => {
        // Assuming response should be an object, not an array.
        state.register = action.payload || []; 
        console.log(action.payload); 
        state.isLoading = false;
      })
      .addCase(RegisteringApi.rejected, (state, action) => {
        state.isLoading = false;
        // Safely check for action.error.message
        state.error = action.error?.message || 'An error occurred'; 
        console.log(action.error); 
      });
  }, 
});

export const registeringReducer = registeringSlice.reducer;  
export default registeringReducer;