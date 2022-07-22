import React from "react";
import {useSelector, useDispatch} from "react-redux/es/exports";
import {addToWatchLater, removeFromWatchLater} from "../redux/features/watchLaterSlice";
import {isVideoInWatchLater} from "../utils/isVideoInWatchLater";

export const ThreeDotMenu = ({data}) => {
  const {watchLaterVideos} = useSelector((state) => state.watchLater);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-4 text-md my-auto bg-[#f9f9f9] dark:bg-black absolute right-6 shadow-sm shadow-black rounded p-2">
      <button className="flex center">
        <span className="material-icons-outlined mr-2">playlist_add</span>Add to Playlist
      </button>
      {isVideoInWatchLater(data._id, watchLaterVideos) ? (
        <button
          className="flex center"
          onClick={() => dispatch(removeFromWatchLater(data._id, watchLaterVideos))}
        >
          <span className="material-icons mr-2">watch_later</span>Remove from Watch Later
        </button>
      ) : (
        <button className="flex center" onClick={() => dispatch(addToWatchLater(data))}>
          <span className="material-icons-outlined mr-2">more_time</span>Add to Watch
          Later
        </button>
      )}
    </div>
  );
};
