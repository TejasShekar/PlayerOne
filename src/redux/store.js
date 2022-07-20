import {configureStore} from "@reduxjs/toolkit";
import videosReducer from "./features/videoSlice";
import authReducer from "./features/authSlice";
import watchLaterReducer from "./features/watchLaterSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    videos: videosReducer,
    watchLater: watchLaterReducer,
  },
});
