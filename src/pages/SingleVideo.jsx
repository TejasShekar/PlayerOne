import {useEffect, useState} from "react";
import {SideBar} from "../components/SideBar";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useDocumentTitle} from "../hooks/useDocumentTitle";
import {VideoPlayer} from "../components/VideoPlayer";
import {getFormattedViewCount} from "../utils/getFormattedViewCount";
import {addToWatchLater, removeFromWatchLater} from "../redux/features/watchLaterSlice";
import {isVideoInHistory, isVideoInWatchLater} from "../utils/videoActionHelps";
import {addToHistory} from "../redux/features/historySlice";


export const SingleVideo = () => {
  const {videoId} = useParams();
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const {videosData, isLoading} = useSelector((state) => state.videos);
  const {watchLaterVideos} = useSelector((state) => state.watchLater);
  const {history} = useSelector((state) => state.history);
  const currentVideo = videosData.find((video) => video._id === videoId);
  const {_id, title, creator, creatorID, views, uploadDate, description} = currentVideo;
  const mainImgSrc = `https://yt3.ggpht.com/ytc/${creatorID}=s88-c-k-c0x00ffffff-no-rj`;
  const fallbackSrc = `https://yt3.ggpht.com/${creatorID}=s88-c-k-c0x00ffffff-no-rj`;

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
                <button className="flex center">
                  <span className="material-icons-outlined mr-2">thumb_up</span> Like
                </button>
                <button className="flex center">
                  <span className="material-icons-outlined mr-2">playlist_add</span>Add to
                  Playlist
                </button>
                {isVideoInWatchLater(_id, watchLaterVideos) ? (
                  <button
                    className="flex center"
                    onClick={() => dispatch(removeFromWatchLater(_id))}
                  >
                    <span className="material-icons mr-2">watch_later</span>Remove from
                    Watch Later
                  </button>
                ) : (
                  <button
                    className="flex center"
                    onClick={() => dispatch(addToWatchLater(currentVideo))}
                  >
                    <span className="material-icons-outlined mr-2">more_time</span>Add to
                    Watch Later
                  </button>
                )}
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
