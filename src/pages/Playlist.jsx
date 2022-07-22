import {SideBar} from "../components/SideBar";
import {useDocumentTitle} from "../hooks/useDocumentTitle";

export const Playlist = () => {
  useDocumentTitle("Playlists | PLAYERONE");

  return (
    <div className="w-full h-full grid grid-flow-col grid-cols-[15rem,1fr] pt-4 dark:bg-[#252525] dark:text-white">
      <SideBar />
      <main>
        <h1>This page contains the user defined Playlists</h1>
      </main>
    </div>
  );
};
