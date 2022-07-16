import {useState} from "react";
import {getFormattedViewCount} from "../utils/getFormattedViewCount";

export const VideoCard = ({videoProps}) => {
  const [error, setError] = useState(false);
  const {_id, title, creator, creatorID, views, uploadDate} = videoProps;
  const mainImgSrc = `https://yt3.ggpht.com/ytc/${creatorID}=s88-c-k-c0x00ffffff-no-rj`;
  const fallbackSrc = `https://yt3.ggpht.com/${creatorID}=s88-c-k-c0x00ffffff-no-rj`;
  return (
    <div className="">
      <img src={`https://i.ytimg.com/vi/${_id}/hq720.jpg`} alt={title} />
      <div className="flex justify-between mx-2 mb-2">
        <div className="flex mt-2">
          <img
            src={error ? fallbackSrc : mainImgSrc}
            alt="Creator Logo"
            className=" rounded-full w-10 h-10  mr-2"
            onError={() => setError(true)}
          />
          <div className="flex flex-col gap-1">
            <p>{title}</p>
            <p className="text-[0.8rem] text-gray-600">{creator}</p>
            <div className="flex text-[0.9rem] text-gray-300">
              <p>{getFormattedViewCount(views)} views</p>
              <span className="mx-2">•</span>
              <p>{uploadDate}</p>
            </div>
          </div>
        </div>
        <button>
          <i className="fa-solid fa-ellipsis-vertical text-xl"></i>
        </button>
      </div>
    </div>
  );
};
