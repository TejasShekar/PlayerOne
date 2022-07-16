import React from "react";

export const NavBar = ({theme}) => {
  const {darkTheme, setDarkTheme} = theme;

  return (
    <header className="flex justify-between px-6 w-full h-20 sticky top-0 border-b-2 border-[#eea53f] text-black dark:text-white bg-white dark:bg-[#252525]">
      <h1 className=" font-['Press_Start_2P'] my-auto text-[1.3rem] ">PLAYER ONE</h1>
      <button onClick={() => setDarkTheme(!darkTheme)}>
        <span className="material-icons-outlined text-3xl">
          {darkTheme ? "dark_mode" : "light_mode"}
        </span>
      </button>
    </header>
  );
};
