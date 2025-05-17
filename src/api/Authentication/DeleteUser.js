import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import useDeleteData from "../Default/UseDeleteData";

export const deleteOneUser = createAsyncThunk("user/deleteOne", async (id) => {
  try {
    //  const config = {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   };
    const res = await useDeleteData(`User/delete-user?id=${id}`);
    return res.data;
  } catch (err) {
    return isRejectedWithValue(err.message);
  }
});

export default deleteOneUser;
