import { createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';
import useGetData from '../Default/useGetData';



export const getOneEvent = createAsyncThunk("event/getOne", async (id) => {
  try {
    const res = await useGetData(`Event/get-event-by-id?id=${id}`);
    console.log(res.data);
    console.log(res);
    return res.data;
  } catch (err) {
    return isRejectedWithValue(err.message);
  }
});

export default getOneEvent;