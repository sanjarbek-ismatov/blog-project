import { createSlice } from "@reduxjs/toolkit";
import { createPostThunk } from "../thunks/createPostThunk";
export const createPost = createSlice({
  name: "createPost",
  initialState: { status: false },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createPostThunk.pending, (state) => {
      state.status = false;
    });
    builder.addCase(createPostThunk.fulfilled, (state, action) => {
      state.status = action.payload;
    });
    builder.addCase(createPostThunk.rejected, (state, action) => {
      state.status = action.error;
    });
  },
});
