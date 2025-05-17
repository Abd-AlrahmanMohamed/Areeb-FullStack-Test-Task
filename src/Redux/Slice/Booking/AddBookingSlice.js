import { createSlice } from '@reduxjs/toolkit';
import addBooking from '../../../api/Bookings/AddBooking';

const initialState = {
  addBooking: [],
  isLoading: false,
  error: null,  // Add error state if you want to handle errors
};

const addBookingSlice = createSlice({
  name: 'addBooking',
  initialState,  // Fixed typo here
  extraReducers: (builder) => {  // Use `builder` to handle async actions
    builder
      .addCase(addBooking.pending, (state) => {
        state.isLoading = true;
        state.error = null;  // Optional: Reset error when loading starts
      })
      .addCase(addBooking.fulfilled, (state, action) => {
        state.booking = action.payload || [];
        state.isLoading = false;
      })
      .addCase(addBooking.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;  // Optional: Handle error message
      });
  }
});

export const addBookingReducer = addBookingSlice.reducer;
export default addBookingSlice.reducer;