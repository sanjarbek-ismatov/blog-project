import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getServerUrl } from "helper/getServerUrl";
export const deletePostThunk = createAsyncThunk("deletePost", async (query) => {
  return await axios.delete(`${getServerUrl()}/api/get/post/delete/${query}`, {
    headers: {
      ["x-token"]: localStorage.token,
    },
  });
});
