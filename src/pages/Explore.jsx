import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {VideoCard} from "../components/VideoCard";
import {fetchVideos} from "../redux/features/videoSlice";

export const Explore = () => {
  const dispatch = useDispatch();
  const {videosData} = useSelector((state) => state.videos);
  useEffect(() => {
    dispatch(fetchVideos());
  }, [dispatch]);

  return (
    <main className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] mx-4 gap-4">
      {videosData.map((video) => (
        <VideoCard key={video._id} videoProps={video} />
      ))}
    </main>
  );
};
