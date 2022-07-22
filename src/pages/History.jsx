import {SideBar} from "../components/SideBar";
import {useDocumentTitle} from "../hooks/useDocumentTitle";

export const History = () => {
  useDocumentTitle("History | PLAYERONE");

  return (
    <div className="w-full h-full grid grid-flow-col grid-cols-[15rem,1fr] pt-4 dark:bg-[#252525] dark:text-white">
      <SideBar />
      <main>
        <h1>This page will contain the history of videos watched by user</h1>
      </main>
    </div>
  );
};
