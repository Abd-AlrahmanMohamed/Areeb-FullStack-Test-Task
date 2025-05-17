import { createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';
import useGetData from '../Default/useGetData';



export const getUserBookings = createAsyncThunk("booking/getOne", async (id) => {
  try {
    const res = await useGetData(`Booking/get-booking-by-id?id=${id}`);
    return res.data;
  } catch (err) {
    return isRejectedWithValue(err.message);
  }
});

export default getUserBookings;