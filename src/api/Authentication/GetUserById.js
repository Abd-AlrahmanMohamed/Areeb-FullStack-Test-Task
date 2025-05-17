import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import useGetData from "../Default/useGetData";

export const getOneUser = createAsyncThunk("user/getOne", async (id) => {
  try {
    const res = await useGetData(`User/get-user-by-id?id=${id}`);
    console.log(res.data);
    console.log(res);
    return res.data;
  } catch (err) {
    return isRejectedWithValue(err.message);
  }
});

export default getOneUser;
