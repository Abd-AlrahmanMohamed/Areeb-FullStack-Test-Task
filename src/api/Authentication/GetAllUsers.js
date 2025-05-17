import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import useGetData from "../Default/useGetData";

export const getAllUsers = createAsyncThunk("user/getall", async () => {
  try {
    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // };
    const res = await useGetData("User/get-all-users");
    return res.data;
  } catch (err) {
    return isRejectedWithValue(err.message);
  }
});

export default getAllUsers;
