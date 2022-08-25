import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const deletePostThunk = createAsyncThunk("deletePost", async (query) => {
  return await axios.delete(
    `https://blog-api-uz.herokuapp.com/api/get/post/delete/${query}`,
    {
      headers: {
        ["x-token"]: localStorage.token,
      },
    }
  );
});
