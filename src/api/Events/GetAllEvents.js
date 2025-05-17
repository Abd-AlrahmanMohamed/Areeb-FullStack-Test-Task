import { createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';
import useGetData from '../Default/useGetData';



export const getAllEvents = createAsyncThunk("events/getall", async () => {
  try {
    const res = await useGetData("Event/get-all-events");
    return res.data;
  } catch (err) {
    return isRejectedWithValue(err.message);
  }
});

export default getAllEvents;