import axios from "axios";
import { reject } from "lodash";
import apiRoute from "../constants/apiRoute";
import {
  IBannerListResult,
  IHotRecommendResponse,
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
