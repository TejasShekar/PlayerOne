import {SideBar} from "../components/SideBar";
import {useParams} from "react-router-dom";
import {SingleVideoPlayer} from "../components/SingleVideoPlayer";
import {useSelector} from "react-redux";

export const SingleVideo = () => {
  const {videoId} = useParams();
  const {videosData, isLoading} = useSelector((state) => state.videos);

  const currentVideo = videosData?.find(({_id}) => _id === videoId);

  return (
    <div className="w-full h-full grid grid-flow-col grid-cols-[15rem,1fr] gap-4 pt-4 dark:bg-[#252525] dark:text-white">
      <SideBar />
      {isLoading ? (
        <h1 className="font-['Press_Start_2P'] text-2xl text-center">LOADING...</h1>
      ) : (
        <SingleVideoPlayer video={currentVideo} />
      )}
    </div>
  );
};
