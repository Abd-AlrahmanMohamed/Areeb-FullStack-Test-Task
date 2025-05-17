import { createSlice } from '@reduxjs/toolkit';
import getOneEvent from '../../../api/Events/GetOneEvent';
import getUserBookings from '../../../api/Bookings/GetUserBookings';

const initialState = {
  userBookings: [],
  isLoading: false,
  error: null,  
};

const userBookingsSlice = createSlice({
  name: 'userBookings',
  initialState,  // Fixed typo here
  extraReducers: (builder) => {  // Use `builder` to handle async actions
    builder
      .addCase(getUserBookings.pending, (state) => {
        state.isLoading = true;
        state.error = null;  // Optional: Reset error when loading starts
      })
      .addCase(getUserBookings.fulfilled, (state, action) => {
        state.userBookings = action.payload || [];
        state.isLoading = false;
      })
      .addCase(getUserBookings.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;  // Optional: Handle error message
      });
  }
});

export const userBookingsReducer = userBookingsSlice.reducer;
export default userBookingsSlice.reducer;