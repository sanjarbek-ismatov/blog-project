import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";
import { getServerUrl } from "helper/getServerUrl";
export const createPostThunk = createAsyncThunk("createPost", async (body) => {
  return await Axios.post(`${getServerUrl()}/api/get/post/create`, body, {
    headers: {
      ["x-token"]: localStorage.token,
    },
  });
});
