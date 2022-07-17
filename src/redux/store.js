import {configureStore} from "@reduxjs/toolkit";
import videosReducer from "./features/videoSlice";

export const store = configureStore({
  reducer: {
    videos: videosReducer,
  },
});
