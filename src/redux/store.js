import {configureStore} from "@reduxjs/toolkit";
import videosReducer from "./features/videoSlice";
import authReducer from "./features/authSlice";
import watchLaterReducer from "./features/watchLaterSlice";
import historyReducer from "./features/historySlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    videos: videosReducer,
    watchLater: watchLaterReducer,
    history: historyReducer,
  },
});
