import React from "react";
import {Link} from "react-router-dom";

export const NavBar = ({theme}) => {
  const {darkTheme, setDarkTheme} = theme;

  return (
    <header className="flex justify-between px-4 w-full h-20 sticky top-0 border-b-2 border-[#eea53f] text-black dark:text-white bg-white dark:bg-[#252525] z-10">
      <Link to="/" className=" font-['Press_Start_2P'] my-auto text-[1.3rem] ">
        PLAYER ONE
      </Link>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setDarkTheme(!darkTheme);
        }}
      >
        <span className="material-icons-outlined text-3xl">
          {darkTheme ? "dark_mode" : "light_mode"}
        </span>
      </button>
    </header>
  );
};
