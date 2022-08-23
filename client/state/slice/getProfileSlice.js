import { createSlice } from "@reduxjs/toolkit";
import { getProfileThunk } from "../thunks/getProfileThunk";
export const getProfileSlice = createSlice({
  name: "getProfile",
  initialState: { profile: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProfileThunk.pending, (state) => {
      state.profile = [];
    });
    builder.addCase(getProfileThunk.fulfilled, (state, action) => {
      state.profile = action.payload;
    });
    builder.addCase(getProfileThunk.rejected, (state, action) => {
      state.profile = action.error;
    });
  },
});
