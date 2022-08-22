import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import { getProfileMeSlice } from "./slice/getProfileMeSlice";
export const store = configureStore({
  reducer: {
    getMe: getProfileMeSlice.reducer,
  },
  middleware: (def) => def({ serializableCheck: false }).concat(createLogger()),
});
