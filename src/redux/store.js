import {configureStore} from "@reduxjs/toolkit";
import videosReducer from "./features/videoSlice";
import authReducer from "./features/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    videos: videosReducer,
  },
});
