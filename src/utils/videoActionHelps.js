export const isVideoInWatchLater = (id, watchLater) =>
  watchLater.find(({_id}) => _id === id);

export const isVideoInHistory = (id, history) => history.find(({_id}) => _id === id);

export const isVideoInLikedVideos = (id, likedVideos) =>
  likedVideos.find(({_id}) => _id === id);

export const isVideoInPlaylist = (playlists, playlistId, videoId) =>
  playlists.find(({_id}) => _id === playlistId)?.videos.some(({_id}) => _id === videoId);
