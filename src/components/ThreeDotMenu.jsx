import React from "react";
import {useSelector, useDispatch} from "react-redux/es/exports";
import {useLocation, useNavigate} from "react-router-dom";
import {removeFromHistory} from "../redux/features/historySlice";
import {removeFromLikedVideos} from "../redux/features/likedSlice";
import {addToWatchLater, removeFromWatchLater} from "../redux/features/watchLaterSlice";
import {isVideoInWatchLater} from "../utils/videoActionHelps";

export const ThreeDotMenu = ({data}) => {
  const {watchLaterVideos} = useSelector((state) => state.watchLater);
  const {token} = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const foundInWatchLater = isVideoInWatchLater(data._id, watchLaterVideos);
  const {pathname} = useLocation();

  return (
    <div className="flex flex-col gap-4 text-md my-auto bg-[#f9f9f9] dark:bg-black absolute right-6 shadow-sm shadow-black rounded p-2">
      <button className="flex center">
        <span className="material-icons-outlined mr-2">playlist_add</span>Add to Playlist
      </button>
      <button
        className="flex center"
        onClick={(e) => {
          e.stopPropagation();
          token
            ? foundInWatchLater
              ? dispatch(removeFromWatchLater(data._id))
              : dispatch(addToWatchLater(data))
            : navigate("/login");
        }}
      >
        <span
          className={`${
            foundInWatchLater ? "material-icons" : "material-icons-outlined"
          } mr-2`}
        >
          {foundInWatchLater ? "watch_later" : "more_time"}
        </span>
        {foundInWatchLater ? "Remove from" : "Add to"} Watch Later
      </button>
      {token && pathname === "/history" ? (
        <button
          className="flex center"
          onClick={(e) => {
            e.stopPropagation();
            dispatch(removeFromHistory(data._id));
          }}
        >
          <span className="material-icons-outlined mr-2">block</span>Remove From History
        </button>
      ) : null}
      {token && pathname === "/liked" ? (
        <button
          className="flex center"
          onClick={(e) => {
            e.stopPropagation();
            dispatch(removeFromLikedVideos(data._id));
          }}
        >
          <span className="material-icons-outlined mr-2">block</span>Remove From Liked
          Videos
        </button>
      ) : null}
    </div>
  );
};
