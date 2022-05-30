// artist
export const linkToArtistDetailPage = (id: number) => {
  return `/artist?id=${id}`;
};
export const linkToArtistListPage = () => {
  return `/artistlist`;
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
