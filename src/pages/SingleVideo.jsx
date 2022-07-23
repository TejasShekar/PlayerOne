import {useEffect, useState} from "react";
import {SideBar} from "../components/SideBar";
import {useParams} from "react-router-dom";
import axios from "axios";
import {SingleVideoPlayer} from "../components/SingleVideoPlayer";

export const SingleVideo = () => {
  const [currentVideo, setCurrentVideo] = useState(null);
  const {videoId} = useParams();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`/api/video/${videoId}`);
        setCurrentVideo(response.data.video);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [videoId]);

  return (
    <div className="w-full h-full grid grid-flow-col grid-cols-[15rem,1fr] gap-4 pt-4 dark:bg-[#252525] dark:text-white">
      <SideBar />
      {!currentVideo ? (
        <h1 className="font-['Press_Start_2P'] text-2xl text-center">LOADING...</h1>
      ) : (
        <SingleVideoPlayer video={currentVideo} />
      )}
    </div>
  );
};
