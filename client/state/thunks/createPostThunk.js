import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";
export const createPostThunk = createAsyncThunk("createPost", async (body) => {
  return await Axios.post(
    `http://localhost:4000/api/get/post/create`,
    {
      title: body.title,
      content: body.content,
      image: body.image,
    },
    {
      headers: {
        ["x-token"]: localStorage.token,
      },
    }
  );
});
