import { createAsyncThunk } from "@reduxjs/toolkit";
import { useAddData } from "../Default/useAddData";

const RegisteringApi = createAsyncThunk(
  "register",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await useAddData("User/add-user", userData);
      console.log(res);
      return res;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export default RegisteringApi;
