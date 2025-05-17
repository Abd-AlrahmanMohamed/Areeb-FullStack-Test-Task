import { createSlice } from '@reduxjs/toolkit';
import addEvent from '../../../api/Events/AddEvent';

const initialState = {
  addEvent: [],
  isLoading: false,
  error: null,  // Add error state if you want to handle errors
};

const addEvetSlice = createSlice({
  name: 'addEvent',
  initialState,  // Fixed typo here
  extraReducers: (builder) => {  // Use `builder` to handle async actions
    builder
      .addCase(addEvent.pending, (state) => {
        state.isLoading = true;
        state.error = null;  // Optional: Reset error when loading starts
      })
      .addCase(addEvent.fulfilled, (state, action) => {
        state.addEvent = action.payload || [];
        state.isLoading = false;
      })
      .addCase(addEvent.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;  // Optional: Handle error message
      });
  }
});

export const addEvetReducer = addEvetSlice.reducer;
export default addEvetSlice.reducer;