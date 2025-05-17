import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import useUpdateData from "../Default/UseUpdateData";

export const updateEvent = createAsyncThunk(
  "event/updateOne",
  async ({ id, data }) => {
    try {
      //      const config = {
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   },
      // };
      const res = await useUpdateData(`User/update-event?id=${id}`, data);
      console.log(res.data);
      console.log(res);
      return res.data;
    } catch (err) {
      return isRejectedWithValue(err.message);
    }
  }
);

export default updateEvent;
