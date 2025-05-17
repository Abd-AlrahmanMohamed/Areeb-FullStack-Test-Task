import { createSlice } from '@reduxjs/toolkit';
import getOneEvent from '../../../api/Events/GetOneEvent';

const initialState = {
  oneEvent: [],
  isLoading: false,
  error: null,  
};

const getOneEventSlice = createSlice({
  name: 'oneEvent',
  initialState,  // Fixed typo here
  extraReducers: (builder) => {  // Use `builder` to handle async actions
    builder
      .addCase(getOneEvent.pending, (state) => {
        state.isLoading = true;
        state.error = null;  // Optional: Reset error when loading starts
      })
      .addCase(getOneEvent.fulfilled, (state, action) => {
        state.event = action.payload || [];
        state.isLoading = false;
      })
      .addCase(getOneEvent.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;  // Optional: Handle error message
      });
  }
});

export const getOneEventReducer = getOneEventSlice.reducer;
export default getOneEventSlice.reducer;