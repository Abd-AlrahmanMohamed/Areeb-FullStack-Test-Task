import { createAsyncThunk } from "@reduxjs/toolkit";
import { useAddData } from "../Default/useAddData";

const addBooking = createAsyncThunk(
  "booking/addBooking",
  async (data, { rejectWithValue }) => {
    try {
      const res = await useAddData("Booking/add-booking", data);
      console.log(res);
      return res.data;
    } catch (err) {
      // Return the error message if any
      return rejectWithValue(err.response ? err.response.data : err.message);
    }
  }
);

export default addBooking;
