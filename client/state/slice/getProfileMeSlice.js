import { createSlice } from "@reduxjs/toolkit";
import { getProfileMeThunk } from "../thunks/getProfileMeThunk";

export const getProfileMeSlice = createSlice({
  name: "getProfile",
  initialState: { profile: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProfileMeThunk.pending, (state) => {
      state.profile = [];
    });
    builder.addCase(getProfileMeThunk.fulfilled, (state, action) => {
      state.profile = action.payload;
    });
    builder.addCase(getProfileMeThunk.rejected, (state, action) => {
      state.profile = action.error;
    });
  },
});
