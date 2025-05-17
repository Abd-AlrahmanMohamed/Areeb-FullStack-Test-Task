import { createSlice } from '@reduxjs/toolkit';
import getAllEvents from '../../../api/Events/GetAllEvents';


const initialState = {
  getAllEvents: [],
  isLoading: false,
  error: null, 
};

const getAllEventsSlice = createSlice({
  name: "getAllEvents",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllEvents.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllEvents.fulfilled, (state, action) => {
        // Assuming response should be an object, not an array.
        state.getEvents = action.payload || [];
        console.log(action.payload);
        state.isLoading = false;
      })
      .addCase(getAllEvents.rejected, (state, action) => {
        state.isLoading = false;
        // Safely check for action.error.message
        state.error = action.error?.message || "An error occurred";
        console.log(action.error);
      });
  },
});

export const getAllEventsReducer = getAllEventsSlice.reducer;  
export default getAllEventsReducer;