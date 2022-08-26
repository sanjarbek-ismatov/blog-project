import { configureStore } from "@reduxjs/toolkit";
import { deletePostSlice } from "./slice/deletePostSlice";
import { createPost } from "./slice/createPostSlice";
import { getProfileMeSlice } from "./slice/getProfileMeSlice";
import { getProfileSlice } from "./slice/getProfileSlice";

export const store = configureStore({
  reducer: {
    getMe: getProfileMeSlice.reducer,
    getProfile: getProfileSlice.reducer,
    createPost: createPost.reducer,
    deletePost: deletePostSlice.reducer,
  },
  middleware: (def) => def({ serializableCheck: false }),
});
