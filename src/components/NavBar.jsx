import React from "react";
import {Link} from "react-router-dom";
import fallback_DP from "../assets/fallback_DP.jpg";

export const NavBar = ({theme}) => {
  const {darkTheme, setDarkTheme} = theme;

  return (
    <header className="flex justify-between p-4 w-full h-20 sticky top-0 border-b-2 border-[#eea53f] text-black dark:text-white bg-[#f9f9f9] dark:bg-[#252525] z-10">
      <Link to="/" className=" font-['Press_Start_2P'] my-auto text-[1.3rem] ">
        PLAYER
        <span className="text-[#eea53f] font-['Press_Start_2P']">ONE</span>
      </Link>
      <div className="flex items-center gap-4">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setDarkTheme(!darkTheme);
          }}
        >
          <span className="material-icons-outlined text-3xl">
            {darkTheme ? "light_mode" : "dark_mode"}
          </span>
        </button>
        <div className="flex items-center cursor-pointer">
          <figure className="w-14 mx-2">
            <img
              className="rounded-[50%] border-[1px] border-black"
              src={fallback_DP}
              alt="profile_img"
            />
          </figure>
        </div>
      </div>
    </header>
  );
};
