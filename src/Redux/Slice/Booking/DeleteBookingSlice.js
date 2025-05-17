import { createSlice } from "@reduxjs/toolkit";
import deleteBooking from "../../../api/Bookings/DeleteBooking";

const initialState = {
  deleteBooking: null,
  isLoading: false,
  error: null,
};

const deleteBookingSlice = createSlice({
  name: "deleteBooking",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(deleteBooking.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteBooking.fulfilled, (state, action) => {
        state.deleteOneBooking = action.payload;
        state.isLoading = false;
      })
      .addCase(deleteBooking.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const deleteBookingReducer = deleteBookingSlice.reducer;
export default deleteBookingReducer;
