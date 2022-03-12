import axios from "axios";
import { reject } from "lodash";
import apiRoute from "../constants/apiRoute";
import { IBannerListResult } from "../constants/type";

export function getBannerData(): Promise<IBannerListResult> {
  return axios
    .get(apiRoute.bannerList)
    .then((res) => res.data)
    .catch((err) => reject(err));
}
