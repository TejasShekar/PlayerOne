import React from "react";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {SideBar} from "../components/SideBar";
import {VideoCard} from "../components/VideoCard";

export const SinglePlaylist = () => {
  const {playlistId} = useParams();
  const {playlists} = useSelector((state) => state.playlist);
  const currentPlaylist = playlists?.find((playlist) => playlist._id === playlistId);

  return (
    <div className="w-full h-full grid grid-flow-col grid-cols-[15rem,1fr] pt-4 dark:bg-[#252525] dark:text-white">
      <SideBar />
      <main className="mx-4">
        <h1 className="text-3xl">{currentPlaylist?.title}</h1>
        {currentPlaylist?.videos.length === 0 && (
          <p>You have not added any videos to this playlist yet !</p>
        )}
        <div className="grid grid-cols-[repeat(auto-fill,minmax(18rem,1fr))] gap-4 mt-6">
          {currentPlaylist?.videos.map((video) => (
            <VideoCard key={video._id} videoProps={video} />
          ))}
        </div>
      </main>
    </div>
  );
};
