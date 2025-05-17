import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import useUpdateData from "../Default/UseUpdateData";

export const updateOneUser = createAsyncThunk(
  "user/updateOne",
  async ({ id, data }) => {
    try {
      //      const config = {
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   },
      // };
      const res = await useUpdateData(`User/update-user?id=${id}`, data);
      return res.data;
    } catch (err) {
      return isRejectedWithValue(err.message);
    }
  }
);

export default updateOneUser;
