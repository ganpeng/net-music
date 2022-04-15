import axios from "axios";
import { reject } from "lodash";
import apiRoute from "../constants/apiRoute";
import { IBannerListResult } from "../constants/type";

export function getBannerData(): Promise<IBannerListResult> {
  return axios
    .get(apiRoute.BANNER_LIST)
    .then((res) => res.data)
    .catch((err) => reject(err));
}

export function getHotPlayListCategory() {
  return axios
    .get(apiRoute.HOT_PLAYLIST_CATEGORY)
    .then((res) => res.data)
    .catch((err) => reject(err));
}
