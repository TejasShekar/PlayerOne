export const VideoPlayer = ({id}) => {
  return (
    <div className=" w-[53rem] h-[30rem]">
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${id}`}
        title="Video Player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};
