import {useEffect, useState} from "react";
import {SideBar} from "../components/SideBar";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useDocumentTitle} from "../hooks/useDocumentTitle";
import {VideoPlayer} from "../components/VideoPlayer";
import {getFormattedViewCount} from "../utils/getFormattedViewCount";
import {addToWatchLater, removeFromWatchLater} from "../redux/features/watchLaterSlice";
import {
  isVideoInHistory,
  isVideoInWatchLater,
  isVideoInLikedVideos,
} from "../utils/videoActionHelps";
import {addToHistory} from "../redux/features/historySlice";
import {addToLikedVideos, removeFromLikedVideos} from "../redux/features/likedSlice";


export const SingleVideo = () => {
  const {videoId} = useParams();
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const {videosData, isLoading} = useSelector((state) => state.videos);
  const {watchLaterVideos} = useSelector((state) => state.watchLater);
  const {history} = useSelector((state) => state.history);
  const {likedVideos} = useSelector((state) => state.liked);
  const currentVideo = videosData.find((video) => video._id === videoId);
  const {_id, title, creator, creatorID, views, uploadDate, description} = currentVideo;
  const mainImgSrc = `https://yt3.ggpht.com/ytc/${creatorID}=s88-c-k-c0x00ffffff-no-rj`;
  const fallbackSrc = `https://yt3.ggpht.com/${creatorID}=s88-c-k-c0x00ffffff-no-rj`;
  const {token} = useSelector((state) => state.auth);
  const foundInWatchLater = isVideoInWatchLater(_id, watchLaterVideos);
  const foundInLikedVideos = isVideoInLikedVideos(_id, likedVideos);
  const navigate = useNavigate();

  useDocumentTitle(`${title} | PLAYERONE`);
  useEffect(() => {
    if (!isVideoInHistory(_id, history)) {
      dispatch(addToHistory(currentVideo));
    }
  }, [_id, currentVideo, dispatch, history]);

  return (
    <div className="w-full h-full grid grid-flow-col grid-cols-[15rem,1fr] gap-4 pt-4 dark:bg-[#252525] dark:text-white">
      <SideBar />
      {isLoading ? (
        <h1 className="font-['Press_Start_2P'] text-2xl text-center">LOADING...</h1>
      ) : (
        <div className=" w-[53rem]">
          <VideoPlayer id={videoId} />
          <div className="flex flex-col gap-2 mt-2">
            <p className="text-2xl">{title}</p>
            {/* Views and Upload Date */}
            <div className="flex text-[0.9rem] text-gray-600 dark:text-gray-300">
              <p>{getFormattedViewCount(views)} views</p>
              <span className="mx-2">•</span>
              <p>{uploadDate}</p>
            </div>
            {/* Action buttons */}
            <div>
              <div className="flex flex-row gap-4 text-md my-auto mt-2">
                <button
                  className="flex center"
                  onClick={(e) => {
                    e.stopPropagation();
                    token
                      ? foundInLikedVideos
                        ? dispatch(removeFromLikedVideos(_id))
                        : dispatch(addToLikedVideos(currentVideo))
                      : navigate("/login");
                  }}
                >
                  <span
                    className={`${
                      foundInLikedVideos ? "material-icons" : "material-icons-outlined"
                    } mr-2`}
                  >
                    thumb_up
                  </span>
                  {foundInLikedVideos ? "Liked" : "Like"}
                </button>
                <button className="flex center">
                  <span className="material-icons-outlined mr-2">playlist_add</span>Add to
                  Playlist
                </button>
                <button
                  className="flex center"
                  onClick={(e) => {
                    e.stopPropagation();
                    token
                      ? foundInWatchLater
                        ? dispatch(removeFromWatchLater(_id))
                        : dispatch(addToWatchLater(currentVideo))
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
              </div>
            </div>

            {/* Creator Info */}
            <div className="flex">
              <img
                src={error ? fallbackSrc : mainImgSrc}
                alt="Creator Logo"
                className=" rounded-full w-12 h-12 mr-2"
                onError={() => setError(true)}
              />
              <p className=" text-gray-600 dark:text-gray-400 my-auto">{creator}</p>
            </div>
            <p className=" leading-[1.7] text-justify">{description}</p>
          </div>
        </div>
      )}
    </div>
  );
};
