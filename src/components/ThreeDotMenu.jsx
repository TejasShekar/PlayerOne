import React from "react";

export const ThreeDotMenu = ({openOptions}) => {
  return (
    <div className="flex flex-col gap-4 text-md my-auto bg-[#f9f9f9] dark:bg-black absolute right-6 shadow-sm shadow-black rounded p-2">
      <button className="flex center">
        <span className="material-icons-outlined mr-2">playlist_add</span>Add to Playlist
      </button>
      <button className="flex center">
        <span className="material-icons-outlined mr-2">more_time</span>Add to Watch Later
      </button>
    </div>
  );
};
