import { createSlice } from "@reduxjs/toolkit";
import { deletePostThunk } from "../thunks/deletePostThunk";
export const deletePostSlice = createSlice({
  name: "deletePost",
  initialState: { status: false },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(deletePostThunk.pending, (state) => {
      state.status = false;
    });
    builder.addCase(deletePostThunk.fulfilled, (state, action) => {
      state.status = action.payload;
    });
    builder.addCase(deletePostThunk.rejected, (state, action) => {
      state.status = action.error;
    });
  },
});
