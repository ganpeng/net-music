import apiRoute from "../constants/apiRoute";
import service from "./config";
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
  ILoginQrCheckResponse,
  ILoginQrCreateResponse,
  ILoginQrKeyResponse,
  IMusicCommentsSearchParam,
  IMusicLyricResponse,
  IMvCommentsResponse,
  IMvCommentsSearchParam,
  IMvDetailResponse,
  IMvUrlResponse,
  INewAlbumListSearchParams,
  INewAlbumResponse,
  INewestAlbumResponse,
  IPlayListDetailResponse,
  ISigninProgressResponse,
  ISimiMusicResponse,
  ISimiPlaylistResponse,
  ISongDetailResponse,
  ITagsResponse,
  ITopPlayListResponse,
  ITopPlayListSearchParams,
  IUserAccountResponse,
  IUserDetailResponse,
  IUserPlaylistResponse,
  IUserRecordAllDataResponse,
  IUserRecordWeekDataResponse,
} from "../constants/type";
import { getParamsString } from "../utils";

export function getBannerData(): Promise<IBannerListResult> {
  return service
    .get(apiRoute.BANNER_LIST)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function getHotPlayListCategory(): Promise<ITagsResponse> {
  return service
    .get(apiRoute.HOT_PLAYLIST_CATEGORY)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function getPersonalizedList(): Promise<IHotRecommendResponse> {
  return service
    .get(apiRoute.PERSONALIZED)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function getTopAlbumList() {
  return service
    .get(apiRoute.TOP_ALBUM)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function getNewAlbumList(
  searchParams: INewAlbumListSearchParams
): Promise<INewAlbumResponse> {
  return service
    .get(`${apiRoute.NEW_ALBUM}?${getParamsString(searchParams)}`)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function getBoardList(): Promise<IBoardListResponse> {
  return service
    .get(apiRoute.BOARD_LIST)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function getPlaylistDetail(
  id: number
): Promise<IPlayListDetailResponse> {
  return service
    .get(`${apiRoute.PLAYLIST_DETAIL}?id=${id}`)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function getTopArtists(): Promise<IArtistListResponse> {
  return service
    .get(apiRoute.TOP_ARTISTS)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function getHotDjList(): Promise<IDjListResponse> {
  return service
    .get(apiRoute.HOT_DJ)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function getCategoryList(): Promise<ICategoryListResponse> {
  return service
    .get(apiRoute.CATEGORY_LIST)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function getTopPlayList(
  searchParams: ITopPlayListSearchParams
): Promise<ITopPlayListResponse> {
  return service
    .get(`${apiRoute.TOP_PLAYLIST}?${getParamsString(searchParams)}`)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function getCommentList(
  searchParams: ICommentListSearchParams
): Promise<ICommentListResponse> {
  return service
    .get(`${apiRoute.COMMENT_LIST}?${getParamsString(searchParams)}`)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function getArtistList(
  searchParams: IArtistListSearchParams
): Promise<IArtistListResponse> {
  return service
    .get(`${apiRoute.ARTIST_LIST}?${getParamsString(searchParams)}`)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function getNewestAlbum(): Promise<INewestAlbumResponse> {
  return service
    .get(apiRoute.NEWEST_ALBUM)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function getDjCateList(): Promise<IDjCatelistResponse> {
  return service
    .get(apiRoute.DJ_CATELIST)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function getDjProgrammeToplist(): Promise<IDjProgrammeResponse> {
  return service
    .get(apiRoute.DJ_PROGRAMME_TOPLIST)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function getDjProgrammeRecommend(): Promise<IDjProgrammeRecommendResponse> {
  return service
    .get(apiRoute.DJ_PROGRAMME_RECOMMEND)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function getSongUrlById(id: number) {
  return service
    .get(`${apiRoute.SONG_URL}?id=${id}&realIP=116.25.146.177`)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function getPlaylistTrackAllById(id: number | undefined) {
  return service
    .get(`${apiRoute.PLAYLIST_TRACK_ALL}?id=${id}`)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function getArtistDetailById(
  id: number
): Promise<IArtistDetailResponse> {
  return service
    .get(`${apiRoute.ARTIST_DETAIL}?id=${id}`)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function getArtistTopSongById(
  id: number
): Promise<IArtistTopSongResponse> {
  return service
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
  return service
    .get(`${apiRoute.ARTIST_ALBUM}?${getParamsString(searchParams)}`)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function getArtistMvById(id: number): Promise<IArtistMvResponse> {
  return service
    .get(`${apiRoute.ARTIST_MV}?id=${id}`)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function getUserDetailById(
  id: number | undefined
): Promise<IUserDetailResponse> | undefined {
  if (id) {
    return service
      .get(`${apiRoute.USER_DETAIL}?uid=${id}`)
      .then((res) => res.data)
      .catch((err) => {
        throw new Error(err);
      });
  }
}

export function getFollowsById(searchParams: {
  uid: number;
  offset?: number;
  limit?: number;
}): Promise<IFollowsResponse> {
  return service
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
  return service
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
  return service
    .get(`${apiRoute.USER_RECORD}?uid=${id}&type=${type}`)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function getUserPlaylistById(
  id: number
): Promise<IUserPlaylistResponse> {
  return service
    .get(`${apiRoute.USER_PLAYLIST}?uid=${id}&limit=${200}`)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function getAlbumCommentsById(
  searchParams: IAlbumCommmentsSearchParam
): Promise<IAlbumCommentsResponse> {
  return service
    .get(`${apiRoute.ALBUM_COMMENTS}?${getParamsString(searchParams)}`)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function getAlbumDetailById(id: number): Promise<IAlbumDetailResponse> {
  return service
    .get(`${apiRoute.ALBUM_DETAIL}?id=${id}`)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function getSongDetailByIds(
  ids: number[]
): Promise<ISongDetailResponse> {
  return service
    .get(`${apiRoute.SONG_DETAIL}?ids=${ids.join(",")}`)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function getMusicCommentsById(searchParams: IMusicCommentsSearchParam) {
  return service
    .get(`${apiRoute.COMMENT_MUSIC}?${getParamsString(searchParams)}`)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function getMusicLyricById(id: number): Promise<IMusicLyricResponse> {
  return service
    .get(`${apiRoute.MUSIC_LYRIC}?id=${id}`)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function getSimiPlaylistById(
  id: number
): Promise<ISimiPlaylistResponse> {
  return service
    .get(`${apiRoute.SIMI_PLAYLIST}?id=${id}`)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function getSimiMusicById(id: number): Promise<ISimiMusicResponse> {
  return service
    .get(`${apiRoute.SIMI_MUSIC}?id=${id}`)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function getLoginQrkey(): Promise<ILoginQrKeyResponse> {
  return service
    .get(`${apiRoute.LOGIN_QR_KEY}?timestamp=${new Date().getTime()}`)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function loginQrCreate(key: string): Promise<ILoginQrCreateResponse> {
  return service
    .get(
      `${
        apiRoute.LOGIN_QR_CREATE
      }?key=${key}&qrimg=true&timestamp=${new Date().getTime()}`
    )
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function loginQrCheck(key: string): Promise<ILoginQrCheckResponse> {
  return service
    .get(
      `${apiRoute.LOGIN_QR_CHECK}?key=${key}&timestamp=${new Date().getTime()}`
    )
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function getUserAccount(): Promise<IUserAccountResponse> {
  return service
    .get(`${apiRoute.USER_ACCOUNT}`)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}
export function getUserSubcount() {
  return service
    .get(`${apiRoute.USER_SUBCOUNT}`)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function logout(): Promise<{ code: number }> {
  return service
    .get(`${apiRoute.LOGOUT}`)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function followById(id: number, t: number) {
  return service
    .get(`${apiRoute.FOLLOW_USER}?id=${id}&t=${t}`)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function getSigninProgress(): Promise<ISigninProgressResponse> {
  return service
    .get(`${apiRoute.SIGNIN_PROGRESS}`)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function getMvUrlById(id: number): Promise<IMvUrlResponse> {
  return service
    .get(`${apiRoute.MV_URL}?id=${id}`)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function getMvComments(
  searchParams: IMvCommentsSearchParam
): Promise<IMvCommentsResponse> {
  return service
    .get(`${apiRoute.COMMENT_MV}?${getParamsString(searchParams)}`)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function getMvDetailById(id: number): Promise<IMvDetailResponse> {
  return service
    .get(`${apiRoute.MV_DETAIL}?mvid=${id}`)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}
