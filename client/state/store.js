import { configureStore } from "@reduxjs/toolkit";

import { createPost } from "./slice/createPostSlice";
import { getProfileMeSlice } from "./slice/getProfileMeSlice";
import { getProfileSlice } from "./slice/getProfileSlice";
export const store = configureStore({
  reducer: {
    getMe: getProfileMeSlice.reducer,
    getProfile: getProfileSlice.reducer,
    createPost: createPost.reducer,
  },
  middleware: (def) => def({ serializableCheck: false }),
});
