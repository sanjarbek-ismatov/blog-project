import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import { getProfileMeSlice } from "./slice/getProfileMeSlice";
import { getProfileSlice } from "./slice/getProfileSlice";
export const store = configureStore({
  reducer: {
    getMe: getProfileMeSlice.reducer,
    getProfile: getProfileSlice.reducer,
  },
  middleware: (def) => def({ serializableCheck: false }).concat(createLogger()),
});
