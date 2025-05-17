import { createSlice } from "@reduxjs/toolkit";
import deleteOneUser from "../../../api/Authentication/DeleteUser";

const initialState = {
  deleteUser: null,
  isLoading: false,
  error: null,
};

const deleteUserSlice = createSlice({
  name: "deleteUser",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(deleteOneUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteOneUser.fulfilled, (state, action) => {
        state.deleteUser = action.payload;
        state.isLoading = false;
      })
      .addCase(deleteOneUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const deleteUserReducer = deleteUserSlice.reducer;
export default deleteUserReducer;
