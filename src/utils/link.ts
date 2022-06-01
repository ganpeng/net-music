// artist
export const linkToArtistDetailPage = (id: number) => {
  return `/artist?id=${id}`;
};
export const linkToArtistListPage = () => {
  return `/artistlist`;
};
export const linkToArtistAlbumPage = (id: number | undefined) => {
  if (id) {
    return `/artist/album?id=${id}`;
  } else {
    return "";
  }
};

// playlist
export const linkToPlaylistDetailPage = (id: number) => {
  return `/playlist-detail?id=${id}`;
};

// user
export const linkToUserHomePage = (id: number) => {
  return `/user/home?id=${id}`;
};
export const linkToUserEventPage = (id: number) => {
  return `/user/event?id=${id}`;
};
export const linkToUserFollowsPage = (id: number) => {
  return `/user/follows?id=${id}`;
};
export const linkToUserFansPage = (id: number) => {
  return `/user/fans?id=${id}`;
};
export const linkToUserSongsRankPage = (id: number) => {
  return `/user/songs/rank?id=${id}`;
};

// album
export const linkToAlbumDetailPage = (id: number) => {
  return `/album-detail?id=${id}`;
};
