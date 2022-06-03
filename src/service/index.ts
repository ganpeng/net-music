import axios from "axios";
import apiRoute from "../constants/apiRoute";
import {
  IAlbumCommentsResponse,
  IAlbumCommmentsSearchParam,
  IAlbumDetailResponse,
  IArtistAlbumListResponse,
  IArtistDetailResponse,
  IArtistListResponse,
  IArtistListSearchParams,
  IArtistMvResponse,
  IArtistTopSongResponse,
  IBannerListResult,
  IBoardListResponse,
  ICategoryListResponse,
  ICommentListResponse,
  ICommentListSearchParams,
  IDjCatelistResponse,
  IDjListResponse,
  IDjProgrammeRecommendResponse,
  IDjProgrammeResponse,
  IFollowedsResponse,
  IFollowsResponse,
  IHotRecommendResponse,
  IMusicCommentsSearchParam,
  IMusicLyricResponse,
  INewAlbumListSearchParams,
  INewAlbumResponse,
  INewestAlbumResponse,
  IPlayListDetailResponse,
  ISimiPlaylistResponse,
  ISongDetailResponse,
  ITagsResponse,
  ITopPlayListResponse,
  ITopPlayListSearchParams,
  IUserDetailResponse,
  IUserPlaylistResponse,
  IUserRecordAllDataResponse,
  IUserRecordWeekDataResponse,
} from "../constants/type";
import { getParamsString } from "../utils";

export function getBannerData(): Promise<IBannerListResult> {
  return axios
    .get(apiRoute.BANNER_LIST)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function getHotPlayListCategory(): Promise<ITagsResponse> {
  return axios
    .get(apiRoute.HOT_PLAYLIST_CATEGORY)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function getPersonalizedList(): Promise<IHotRecommendResponse> {
  return axios
    .get(apiRoute.PERSONALIZED)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function getTopAlbumList() {
  return axios
    .get(apiRoute.TOP_ALBUM)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function getNewAlbumList(
  searchParams: INewAlbumListSearchParams
): Promise<INewAlbumResponse> {
  return axios
    .get(`${apiRoute.NEW_ALBUM}?${getParamsString(searchParams)}`)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function getBoardList(): Promise<IBoardListResponse> {
  return axios
    .get(apiRoute.BOARD_LIST)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function getPlaylistDetail(
  id: number
): Promise<IPlayListDetailResponse> {
  return axios
    .get(`${apiRoute.PLAYLIST_DETAIL}?id=${id}`)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function getTopArtists(): Promise<IArtistListResponse> {
  return axios
    .get(apiRoute.TOP_ARTISTS)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function getHotDjList(): Promise<IDjListResponse> {
  return axios
    .get(apiRoute.HOT_DJ)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function getCategoryList(): Promise<ICategoryListResponse> {
  return axios
    .get(apiRoute.CATEGORY_LIST)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function getTopPlayList(
  searchParams: ITopPlayListSearchParams
): Promise<ITopPlayListResponse> {
  return axios
    .get(`${apiRoute.TOP_PLAYLIST}?${getParamsString(searchParams)}`)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function getCommentList(
  searchParams: ICommentListSearchParams
): Promise<ICommentListResponse> {
  return axios
    .get(`${apiRoute.COMMENT_LIST}?${getParamsString(searchParams)}`)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function getArtistList(
  searchParams: IArtistListSearchParams
): Promise<IArtistListResponse> {
  return axios
    .get(`${apiRoute.ARTIST_LIST}?${getParamsString(searchParams)}`)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function getNewestAlbum(): Promise<INewestAlbumResponse> {
  return axios
    .get(apiRoute.NEWEST_ALBUM)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function getDjCateList(): Promise<IDjCatelistResponse> {
  return axios
    .get(apiRoute.DJ_CATELIST)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function getDjProgrammeToplist(): Promise<IDjProgrammeResponse> {
  return axios
    .get(apiRoute.DJ_PROGRAMME_TOPLIST)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function getDjProgrammeRecommend(): Promise<IDjProgrammeRecommendResponse> {
  return axios
    .get(apiRoute.DJ_PROGRAMME_RECOMMEND)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function getSongUrlById(id: number) {
  return axios
    .get(`${apiRoute.SONG_URL}?id=${id}`)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function getPlaylistTrackAllById(id: number | undefined) {
  return axios
    .get(`${apiRoute.PLAYLIST_TRACK_ALL}?id=${id}`)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function getArtistDetailById(
  id: number
): Promise<IArtistDetailResponse> {
  return axios
    .get(`${apiRoute.ARTIST_DETAIL}?id=${id}`)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function getArtistTopSongById(
  id: number
): Promise<IArtistTopSongResponse> {
  return axios
    .get(`${apiRoute.ARTIST_TOP_SONG}?id=${id}`)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function getArtistAlbumList(searchParams: {
  id?: number;
  offset?: number;
  limit?: number;
}): Promise<IArtistAlbumListResponse> {
  return axios
    .get(`${apiRoute.ARTIST_ALBUM}?${getParamsString(searchParams)}`)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function getArtistMvById(id: number): Promise<IArtistMvResponse> {
  return axios
    .get(`${apiRoute.ARTIST_MV}?id=${id}`)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function getUserDetailById(id: number): Promise<IUserDetailResponse> {
  return axios
    .get(`${apiRoute.USER_DETAIL}?uid=${id}`)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function getFollowsById(searchParams: {
  uid: number;
  offset?: number;
  limit?: number;
}): Promise<IFollowsResponse> {
  return axios
    .get(`${apiRoute.USER_FOLLOWS}?${getParamsString(searchParams)}`)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function getFollowedsById(searchParams: {
  uid: number;
  offset?: number;
  limit?: number;
}): Promise<IFollowedsResponse> {
  return axios
    .get(`${apiRoute.USER_FOLLOWEDS}?${getParamsString(searchParams)}`)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function getUserRecordById(
  id: number,
  type: number
): Promise<IUserRecordWeekDataResponse | IUserRecordAllDataResponse> {
  return axios
    .get(`${apiRoute.USER_RECORD}?uid=${id}&type=${type}`)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function getUserPlaylistById(
  id: number
): Promise<IUserPlaylistResponse> {
  return axios
    .get(`${apiRoute.USER_PLAYLIST}?uid=${id}&limit=${200}`)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function getAlbumCommentsById(
  searchParams: IAlbumCommmentsSearchParam
): Promise<IAlbumCommentsResponse> {
  return axios
    .get(`${apiRoute.ALBUM_COMMENTS}?${getParamsString(searchParams)}`)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function getAlbumDetailById(id: number): Promise<IAlbumDetailResponse> {
  return axios
    .get(`${apiRoute.ALBUM_DETAIL}?id=${id}`)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function getSongDetailByIds(
  ids: number[]
): Promise<ISongDetailResponse> {
  return axios
    .get(`${apiRoute.SONG_DETAIL}?ids=${ids.join(",")}`)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function getMusicCommentsById(searchParams: IMusicCommentsSearchParam) {
  return axios
    .get(`${apiRoute.COMMENT_MUSIC}?${getParamsString(searchParams)}`)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function getMusicLyricById(id: number): Promise<IMusicLyricResponse> {
  return axios
    .get(`${apiRoute.MUSIC_LYRIC}?id=${id}`)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function getSimiPlaylistById(
  id: number
): Promise<ISimiPlaylistResponse> {
  return axios
    .get(`${apiRoute.SIMI_PLAYLIST}?id=${id}`)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}
