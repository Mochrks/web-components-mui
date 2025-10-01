import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./slices/appSlice.js";

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
});
