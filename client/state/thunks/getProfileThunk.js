import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getServerUrl } from "helper/getServerUrl";
export const getProfileThunk = createAsyncThunk("getprofile", async (query) => {
  return await axios.get(`${getServerUrl()}/api/profile/${query}`);
});
