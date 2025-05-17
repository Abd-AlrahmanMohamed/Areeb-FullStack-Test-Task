import { createAsyncThunk } from "@reduxjs/toolkit";
import { useAddData } from "../Default/useAddData";

const Login = createAsyncThunk(
  "login",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await useAddData("User/login", userData);
      console.log(res.data);
      console.log(res);
      return res.data;
    } catch (err) {
      // Return the error message if any
      return rejectWithValue(err.response ? err.response.data : err.message);
    }
  }
);

export default Login;
