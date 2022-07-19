import {useEffect, useRef, useState} from "react";
import {getFormattedViewCount} from "../utils/getFormattedViewCount";
import {ThreeDotMenu} from "./ThreeDotMenu";

export const VideoCard = ({videoProps}) => {
  const [error, setError] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const videoCardRef = useRef(null);
  const {_id, title, creator, creatorID, views, uploadDate} = videoProps;
  const mainImgSrc = `https://yt3.ggpht.com/ytc/${creatorID}=s88-c-k-c0x00ffffff-no-rj`;
  const fallbackSrc = `https://yt3.ggpht.com/${creatorID}=s88-c-k-c0x00ffffff-no-rj`;

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (
        openOptions &&
        videoCardRef.current &&
        !videoCardRef.current.contains(e.target)
      ) {
        setOpenOptions(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => document.removeEventListener("mousedown", checkIfClickedOutside);
  }, [openOptions]);

  return (
    <div ref={videoCardRef}>
      <img src={`https://i.ytimg.com/vi/${_id}/hqdefault.jpg`} alt={title} />
      <div className="flex justify-between items-start my-2 relative">
        <div className="flex">
          <img
            src={error ? fallbackSrc : mainImgSrc}
            alt="Creator Logo"
            className=" rounded-full w-10 h-10  mr-2"
            onError={() => setError(true)}
          />
          <div className="flex flex-col gap-1">
            <p>{title}</p>
            <p className="text-[0.8rem] text-gray-600 dark:text-gray-400">{creator}</p>
            <div className="flex text-[0.9rem] text-gray-600 dark:text-gray-300">
              <p>{getFormattedViewCount(views)} views</p>
              <span className="mx-2">•</span>
              <p>{uploadDate}</p>
            </div>
          </div>
        </div>
        <button className="ml-1" onClick={() => setOpenOptions((prev) => !prev)}>
          <span className="material-icons-outlined">more_vert</span>
        </button>
        {openOptions && <ThreeDotMenu />}
      </div>
    </div>
  );
};
