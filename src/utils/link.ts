// artist
export const linkToArtistDetailPage = (id: number) => {
  return `/artist?id=${id}`;
};
export const linkToArtistListPage = () => {
  return `/artistlist`;
};
export const linkToArtistAlbumPage = (id: number | undefined) => {
  return id ? `/artist/album?id=${id}` : "";
};

// playlist
export const linkToPlaylistDetailPage = (id: number | undefined) => {
  return id ? `/playlist-detail?id=${id}` : "";
};
export const linkToPlaylistPageByCat = (cat: string) => {
  return `/playlist?cat=${cat}`;
};

// user
export const linkToUserHomePage = (id: number | undefined) => {
  return id ? `/user/home?id=${id}` : "";
};
export const linkToUserEventPage = (id: number | undefined) => {
  return id ? `/user/event?id=${id}` : "";
};
export const linkToUserFollowsPage = (id: number | undefined) => {
  return id ? `/user/follows?id=${id}` : "";
};
export const linkToUserFansPage = (id: number | undefined) => {
  return id ? `/user/fans?id=${id}` : "";
};
export const linkToUserSongsRankPage = (id: number) => {
  return `/user/songs/rank?id=${id}`;
};

// album
export const linkToAlbumDetailPage = (id: number | undefined) => {
  return id ? `/album-detail?id=${id}` : "";
};

// song
export const linkToSongDetailPage = (id: number | undefined) => {
  return id ? `/song-detail?id=${id}` : "";
};

// toplist
export const linkToToplistPage = (id: number | undefined) => {
  return id ? `/toplist?id=${id}` : "";
};

// mv
export const linkToMvDetailPage = (id: number | undefined) => {
  return id ? `/mv-detail?id=${id}` : "";
};
