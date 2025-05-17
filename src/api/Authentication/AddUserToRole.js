import { createAsyncThunk } from "@reduxjs/toolkit";
import useAddData from "../Default/useAddData";

const AddUserToRole = createAsyncThunk(
  "role/addToRole",
  async (userData, { rejectWithValue }) => {
    try {
      //    const config = {
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   },
      // };
      const res = await useAddData("User/add-user-to-role", userData);

      return res.data;
    } catch (err) {
      // Return the error message if any
      return rejectWithValue(err.response ? err.response.data : err.message);
    }
  }
);

export default AddUserToRole;
