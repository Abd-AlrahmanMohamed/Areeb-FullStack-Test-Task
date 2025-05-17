import { createSlice } from "@reduxjs/toolkit";
import Login from "../../../api/Authentication/Login";

const initialState = {
  login: {}, 
  isLoading: false,
  error: null, 
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(Login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(Login.fulfilled, (state, action) => {
        state.login = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(Login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.message || "Login failed";
      });
  },
});

export const loginReducer = loginSlice.reducer;
export default loginReducer;
