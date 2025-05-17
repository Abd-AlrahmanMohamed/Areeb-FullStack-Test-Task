import { createSlice } from '@reduxjs/toolkit';
import updateEvent from '../../../api/Events/UpdateEvent';

const initialState = {
  updateEvent: [],
  isLoading: false,
  error: null,  // Add error state if you want to handle errors
};

const updateEventSlice = createSlice({
  name: 'updateEvent',
  initialState,  // Fixed typo here
  extraReducers: (builder) => {  // Use `builder` to handle async actions
    builder
      .addCase(updateEvent.pending, (state) => {
        state.isLoading = true;
        state.error = null;  // Optional: Reset error when loading starts
      })
      .addCase(updateEvent.fulfilled, (state, action) => {
        state.updateEvent = action.payload || [];
        state.isLoading = false;
      })
      .addCase(updateEvent.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;  // Optional: Handle error message
      });
  }
});

export const updateEventReducer = updateEventSlice.reducer;
export default updateEventSlice.reducer;