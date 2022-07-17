import React from "react";

export const ThreeDotMenu = ({openOptions}) => {
  return (
    <div className="flex flex-col gap-4 text-md my-auto bg-white dark:bg-black absolute right-0 top-8 shadow-sm shadow-black rounded p-4">
      <button className="flex center">
        <span className="material-icons-outlined mr-2">playlist_add</span>Add to Playlist
      </button>
      <button className="flex center">
        <span className="material-icons-outlined mr-2">more_time</span>Add to Watch Later
      </button>
    </div>
  );
};
