import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import useGetData from "../Default/useGetData";

export const getAllBookings = createAsyncThunk("bookings/getall", async () => {
  try {
    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // };
    const res = await useGetData("Booking/get-all-bookings");
    return res.data;
  } catch (err) {
    return isRejectedWithValue(err.message);
  }
});

export default getAllBookings;
