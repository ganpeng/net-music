import axios from "axios";
import { reject } from "lodash";
import apiRoute from "../constants/apiRoute";
import {
  IArtistListResponse,
  IBannerListResult,
  IBoardListResponse,
  IDjListResponse,
  IHotRecommendResponse,
  INewAlbumResponse,
  IPlayListDetailResponse,
  ITagsResponse,
} from "../constants/type";

export function getBannerData(): Promise<IBannerListResult> {
  return axios
    .get(apiRoute.BANNER_LIST)
    .then((res) => res.data)
    .catch((err) => reject(err));
}

export function getHotPlayListCategory(): Promise<ITagsResponse> {
  return axios
    .get(apiRoute.HOT_PLAYLIST_CATEGORY)
    .then((res) => res.data)
    .catch((err) => reject(err));
}

export function getPersonalizedList(): Promise<IHotRecommendResponse> {
  return axios
    .get(apiRoute.PERSONALIZED)
    .then((res) => res.data)
    .catch((err) => reject(err));
}

export function getTopAlbumList() {
  return axios
    .get(apiRoute.TOP_ALBUM)
    .then((res) => res.data)
    .catch((err) => reject(err));
}

export function getNewAlbumList(): Promise<INewAlbumResponse> {
  return axios
    .get(apiRoute.NEW_ALBUM)
    .then((res) => res.data)
    .catch((err) => reject(err));
}

export function getBoardList(): Promise<IBoardListResponse> {
  return axios
    .get(apiRoute.BOARD_LIST)
    .then((res) => res.data)
    .catch((err) => reject(err));
}

export function getPlaylistDetail(
  id: number
): Promise<IPlayListDetailResponse> {
  return axios
    .get(`${apiRoute.PLAYLIST_DETAIL}?id=${id}`)
    .then((res) => res.data)
    .catch((err) => reject(err));
}

export function getTopArtists(): Promise<IArtistListResponse> {
  return axios
    .get(apiRoute.TOP_ARTISTS)
    .then((res) => res.data)
    .catch((err) => reject(err));
}

export function getHotDjList(): Promise<IDjListResponse> {
  return axios
    .get(apiRoute.HOT_DJ)
    .then((res) => res.data)
    .catch((err) => reject(err));
}
