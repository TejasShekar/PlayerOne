export const isVideoInWatchLater = (id, watchLater) =>
  watchLater.find(({_id}) => _id === id);

export const isVideoInHistory = (id, history) => {
  return history.find(({_id}) => _id === id);
};
