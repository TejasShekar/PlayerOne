import {SideBar} from "../components/SideBar";
import {useSelector} from "react-redux";
import {VideoCard} from "../components/VideoCard";
import {useDocumentTitle} from "../hooks/useDocumentTitle";

export const WatchLater = () => {
  const {watchLaterVideos} = useSelector((state) => state.watchLater);
  useDocumentTitle("Watch Later | PLAYERONE");

  return (
    <div className="w-full h-full grid grid-flow-col grid-cols-[15rem,1fr] pt-4 dark:bg-[#252525] dark:text-white">
      <SideBar />
      <main className="mx-4">
        {watchLaterVideos.length === 0 ? (
          <h2>No videos in Watch Later</h2>
        ) : (
          <div className="grid grid-cols-[repeat(auto-fill,minmax(18rem,1fr))]  gap-4">
            {watchLaterVideos.map((video) => (
              <VideoCard key={video._id} videoProps={video} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};
