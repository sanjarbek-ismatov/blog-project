import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getProfileThunk = createAsyncThunk("getprofile", async (query) => {
  return await axios.get(
    `https://blog-project-haoi.onrender.com/api/profile/${query}`
  );
});
