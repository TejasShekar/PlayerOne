export const isVideoInWatchLater = (id, watchLater) =>
  watchLater.find((video) => video._id === id);
