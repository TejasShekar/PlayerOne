import {configureStore} from "@reduxjs/toolkit";
import videosReducer from "./features/videoSlice";
import authReducer from "./features/authSlice";
import watchLaterReducer from "./features/watchLaterSlice";
import historyReducer from "./features/historySlice";
import likedReducer from "./features/likedSlice";
import playlistReducer from "./features/playlistSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    videos: videosReducer,
    watchLater: watchLaterReducer,
    history: historyReducer,
    liked: likedReducer,
    playlist: playlistReducer,
  },
});
