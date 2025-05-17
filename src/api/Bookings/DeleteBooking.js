import { createAsyncThunk } from "@reduxjs/toolkit";
import useDeleteData from "../Default/UseDeleteData";

const deleteBooking = createAsyncThunk(
  "deleteBooking",
  async (id, { rejectWithValue }) => {
    try {
      const res = await useDeleteData(`Booking/delete-booking?id=${id}`);
      console.log(res.data);
      console.log(res);
      return res.data;
    } catch (err) {
      // Return the error message if any
      return rejectWithValue(err.response ? err.response.data : err.message);
    }
  }
);

export default deleteBooking;
