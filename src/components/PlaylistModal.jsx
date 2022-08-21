import React, {useEffect, useRef, useState} from "react";
import ReactDOM from "react-dom";
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import {
  addVideoToPlaylist,
  createPlaylist,
  removeVideoFromPlaylist,
  setIsModalOpen,
} from "../redux/features/playlistSlice";
import {isVideoInPlaylist} from "../utils/videoActionHelps";

export const PlaylistModal = ({videoData}) => {
  const [openCreatePlaylist, setOpenCreatePlaylist] = useState(false);
  const [playlistName, setPlaylistName] = useState("");
  const {playlists} = useSelector((state) => state.playlist);
  const dispatch = useDispatch();
  const playlistDialog = useRef();
  const {pathname} = useLocation();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (playlistDialog.current && !playlistDialog.current.contains(e.target)) {
        dispatch(setIsModalOpen(false));
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => document.removeEventListener("mousedown", checkIfClickedOutside);
  });

  const createPlaylistHandler = (e) => {
    e.preventDefault();
    if (playlistName.trim().length !== 0) {
      setOpenCreatePlaylist(false);
      dispatch(createPlaylist(playlistName.trim()));
      setPlaylistName("");
    } else {
      setPlaylistName("");
    }
  };

  const handleVideoInPlaylist = (playlistID, videoID) => {
    if (!isVideoInPlaylist(playlists, playlistID, videoID)) {
      dispatch(addVideoToPlaylist({id: playlistID, video: videoData}));
    } else {
      dispatch(removeVideoFromPlaylist({videoId: videoID, playlistId: playlistID}));
    }
  };

  return ReactDOM.createPortal(
    <div className="top-0 bottom-0 left-0 right-0 fixed flex items-center justify-center bg-black/[0.6] z-[999] text-lg">
      <div ref={playlistDialog} className=" bg-[#f0f0f0] w-96 py-4 rounded-lg">
        <div className="w-full text-center px-4">
          {pathname === "/playlist" ? (
            <p className=" font-bold text-2xl my-2">Create new playlist</p>
          ) : (
            <>
              <p className=" font-bold text-2xl my-2">Save To</p>
              <div className=" border-t-2 border-t-black"></div>
            </>
          )}
        </div>
        {pathname !== "/playlist" && (
          <ul className=" w-full my-4 max-h-48 overflow-auto">
            {playlists.length === 0 ? (
              <p className="text-center">No saved playlists. Create one now !</p>
            ) : (
              playlists.map(({title, _id}) => {
                return (
                  <li key={_id} className="flex hover:bg-[#dedede] px-4 py-1">
                    <input
                      type="checkbox"
                      value={title}
                      id={_id}
                      checked={isVideoInPlaylist(playlists, _id, videoData._id)}
                      onChange={() => handleVideoInPlaylist(_id, videoData._id)}
                    />
                    <label htmlFor={_id} className="px-2 w-full ">
                      {title.length > 16 ? `${title.substring(0, 16)}.....` : title}
                    </label>
                  </li>
                );
              })
            )}
          </ul>
        )}
        <div className="w-full px-4">
          {openCreatePlaylist || pathname === "/playlist" ? (
            <form onSubmit={createPlaylistHandler}>
              <input
                type="text"
                placeholder="Type your new playlist name here"
                className="w-full rounded p-1 my-2"
                value={playlistName}
                onChange={(e) => setPlaylistName(e.target.value)}
                autoFocus
              />
              <button
                type="submit"
                onClick={(e) => e.stopPropagation()}
                className="font-bold mt-2 bg-[#ec8d08] w-full rounded-md p-1 hover:bg-[#eea53f]"
              >
                Create Playlist
              </button>
            </form>
          ) : (
            <>
              <div className=" border-t-2 w-full border-t-black my-1"></div>
              <button
                className="flex items-center justify-center font-bold mt-2 bg-[#ec8d08] w-full rounded-md p-1 hover:bg-[#eea53f]"
                onClick={() => setOpenCreatePlaylist(true)}
              >
                <span className="material-icons-outlined mr-2 ">add</span>
                Create a new playlist
              </button>
            </>
          )}
        </div>
      </div>
    </div>,
    document.querySelector("#portal")
  );
};
