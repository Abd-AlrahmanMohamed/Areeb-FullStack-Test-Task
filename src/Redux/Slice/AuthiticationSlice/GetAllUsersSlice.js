import { createSlice } from '@reduxjs/toolkit';
import getAllUsers from '../../../api/Authentication/GetAllUsers';


const initialState = {
  getAllUsers: [],
  isLoading: false,
  error: null, 
};

const getAllUsersSlice = createSlice({
  name: "getAllUsers",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        // Assuming response should be an object, not an array.
        state.getAllUsers = action.payload || [];
        console.log(action.payload);
        state.isLoading = false;
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.isLoading = false;
        // Safely check for action.error.message
        state.error = action.error?.message || "An error occurred";
        console.log(action.error);
      });
  },
});

export const getAllUsersReducer = getAllUsersSlice.reducer;  
export default getAllUsersReducer;