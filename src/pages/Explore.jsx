import {useSelector} from "react-redux";
import {Categories} from "../components/Categories";
import {SideBar} from "../components/SideBar";
import {VideoCard} from "../components/VideoCard";
import {useDocumentTitle} from "../hooks/useDocumentTitle";

const filterVideosByCategory = (data, category) => {
  if (category.toLowerCase() === "all") return data;
  return data.filter((video) => category.toLowerCase() === video.category);
};

export const Explore = () => {
  const {videosData, isLoading, selectedCategory} = useSelector((state) => state.videos);
  useDocumentTitle("Explore | PLAYERONE");

  const filteredVideos = filterVideosByCategory(videosData, selectedCategory);

  return (
    <div className="w-full h-full grid grid-flow-col grid-cols-[15rem,1fr] pt-4 dark:bg-[#252525] dark:text-white">
      <SideBar />
      {isLoading ? (
        <h1 className="font-['Press_Start_2P'] text-2xl text-center">LOADING...</h1>
      ) : (
        <main className="mx-4">
          <Categories currentCategory={selectedCategory} />
          <div className="grid grid-cols-[repeat(auto-fill,minmax(18rem,1fr))] gap-4 mt-6">
            {filteredVideos.map((video) => (
              <VideoCard key={video._id} videoProps={video} />
            ))}
          </div>
        </main>
      )}
    </div>
  );
};
