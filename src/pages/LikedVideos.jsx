import {SideBar} from "../components/SideBar";

export const LikedVideos = () => {
  return (
    <div className="w-full h-full grid grid-flow-col grid-cols-[15rem,1fr] pt-4 dark:bg-[#252525] dark:text-white">
      <SideBar />
      <main>
        <h1>This page will contain the liked videos by the user</h1>
      </main>
    </div>
  );
};
