import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import useDeleteData from "../Default/UseDeleteData";

const deleteEvent = createAsyncThunk("deleteEvent", async (id) => {
  try {
    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // };
    const res = useDeleteData(`Event/delete-event?id=${id}`);

    console.log(res.data);
    console.log(res);
    return res.data;
  } catch (err) {
    // Return the error message if any
    return isRejectedWithValue(err.response ? err.response.data : err.message);
  }
});

export default deleteEvent;
