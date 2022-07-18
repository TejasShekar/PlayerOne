import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {SideBar} from "../components/SideBar";
import {VideoCard} from "../components/VideoCard";
import {fetchVideos} from "../redux/features/videoSlice";

export const Explore = () => {
  const dispatch = useDispatch();
  const {videosData, isLoading} = useSelector((state) => state.videos);
  useEffect(() => {
    dispatch(fetchVideos());
  }, [dispatch]);

  return (
    <div className="w-full h-full grid grid-flow-col grid-cols-[15rem,1fr] pt-4 dark:bg-[#252525] dark:text-white">
      <SideBar />
      {isLoading ? (
        <h1 className="font-['Press_Start_2P'] text-2xl text-center">
          LOADING...
        </h1>
      ) : (
        <main className="grid grid-cols-[repeat(auto-fill,minmax(18rem,1fr))] mx-4 gap-4">
          {videosData.map((video) => (
            <VideoCard key={video._id} videoProps={video} />
          ))}
        </main>
      )}
    </div>
  );
};
