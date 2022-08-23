import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getProfileThunk = createAsyncThunk("getprofile", async (query) => {
  return await axios.get(
    `https://blog-api-uz.herokuapp.com/api/profile/${query}`
  );
});
