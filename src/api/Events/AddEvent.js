import { createAsyncThunk } from "@reduxjs/toolkit";
import { useAddData } from "../Default/useAddData";

const addEvent = createAsyncThunk(
  "addEvent",
  async ({userData}, { rejectWithValue }) => {
    try {
      //    const config = {
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   },
      // };
      const res = await useAddData("Event/add-event", userData);
      console.log(res.data);
      console.log(res);
      return res.data;
    } catch (err) {
      // Return the error message if any
      return rejectWithValue(err.response ? err.response.data : err.message);
    }
  }
);

export default addEvent;