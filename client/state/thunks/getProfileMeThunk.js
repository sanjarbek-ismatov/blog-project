import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";
import { getServerUrl } from "helper/getServerUrl";
export const getProfileMeThunk = createAsyncThunk(
  "userthunk",
  async (token) => {
    return await Axios.get(`${getServerUrl()}/api/profile/me`, {
      headers: {
        ["x-token"]: token,
      },
    }).then((data) => data);
  }
);
