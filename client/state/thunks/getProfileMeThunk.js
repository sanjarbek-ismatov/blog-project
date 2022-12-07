import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";
export const getProfileMeThunk = createAsyncThunk(
  "userthunk",
  async (token) => {
    return await Axios.get(`https://blog-project-haoi.onrender.com/api/profile/me`, {
      headers: {
        ["x-token"]: token,
      },
    }).then((data) => data);
  }
);
