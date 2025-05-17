import { createSlice } from "@reduxjs/toolkit";
import deleteEvent from "../../../api/Events/DeleteEvent";

const initialState = {
  deleteEvent: null,
  isLoading: false,
  error: null,
};

const deleteEventSlice = createSlice({
  name: "deleteEvent",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(deleteEvent.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteEvent.fulfilled, (state, action) => {
        state.deleteEvent = action.payload;
        state.isLoading = false;
      })
      .addCase(deleteEvent.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const deleteEventReducer = deleteEventSlice.reducer;
export default deleteEventReducer;
