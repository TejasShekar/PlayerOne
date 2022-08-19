import React from "react";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {removePlaylist} from "../redux/features/playlistSlice";

export const PlayListCard = ({data}) => {
  const {title, videos, _id} = data;
  const dispatch = useDispatch();

  return (
    <div className=" text-lg border-2 border-[#eeaf53] rounded">
      <Link to={`/playlist/${_id}`} className="relative">
        <img
          src={
            videos?.length !== 0
              ? `https://i.ytimg.com/vi/${videos[0]?._id}/hq720.jpg`
              : "https://i.ytimg.com/img/no_thumbnail.jpg"
          }
          alt={videos[0]?.title}
          className=" aspect-video w-full"
          role="button"
        />
        <div className="absolute top-0 right-0 h-full w-1/2 bg-black/[0.7] flex items-center justify-center">
          {videos?.length} {videos?.length === 1 ? "Video" : "Videos"}
        </div>
      </Link>
      <div className="flex justify-between p-2">
        <h2>{title.length > 16 ? `${title.substring(0, 16)}.....` : title}</h2>
        <button
          onClick={() => dispatch(removePlaylist(_id))}
          className="opacity-70 hover:opacity-100 text-red-500"
        >
          <span className="material-icons-outlined">delete_outline</span>
        </button>
      </div>
    </div>
  );
};
