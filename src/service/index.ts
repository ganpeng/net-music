import axios from "axios";
import apiRoute from "../constants/apiRoute";
import {
  IArtistListResponse,
  IArtistListSearchParams,
  IBannerListResult,
  IBoardListResponse,
  ICategoryListResponse,
  ICommentListResponse,
  ICommentListSearchParams,
  IDjCatelistResponse,
  IDjListResponse,
  IDjProgrammeRecommendResponse,
  IDjProgrammeResponse,
  IHotRecommendResponse,
  INewAlbumListSearchParams,
  INewAlbumResponse,
  INewestAlbumResponse,
  IPlayListDetailResponse,
  ITagsResponse,
  ITopPlayListResponse,
  ITopPlayListSearchParams,
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
