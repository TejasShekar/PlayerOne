import {Link} from "react-router-dom";
import {Categories} from "../components/Categories";

export const HomePage = () => {
  return (
    <main className="dark:bg-[#252525] dark:text-white h-[calc(100vh-5rem)] grid place-content-center">
      <div className="flex flex-col items-center w-2/3 mx-auto">
        <h1 className=" font-['Press_Start_2P'] text-2xl text-center leading-10">
          THE <span className="text-[#eea53f] font-['Press_Start_2P']">ULTIMATE </span>
          COLLECTION OF HANDFULLY SELECTED CONTENT ON GAMEPLAYS AND MORE
        </h1>
        <Link
          to="/explore"
          className="m-6 p-2 px-4 font-bold text-black text-xl bg-[#eea53f] rounded-full"
        >
          Explore Videos
        </Link>
      </div>
      <div className="mx-auto">
        <Categories />
      </div>
    </main>
  );
};
