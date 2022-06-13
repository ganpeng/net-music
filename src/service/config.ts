import axios from "axios";
import { get } from "lodash";
import { parse, stringify } from "../utils";

let service = axios.create({
  headers: {},
});

// service.defaults.baseURL = `${process.env.VUE_APP_API_ROOT}`;

service.interceptors.request.use(
  (config) => {
    const cookie = window.localStorage.getItem("cookie");
    if (cookie) {
      const splitedUrl = config.url?.split("?");
      const params = parse(get(splitedUrl, "1"));
      params.cookie = cookie;
      const queryString = stringify(params);
      config.url = `${get(splitedUrl, "0")}?${queryString}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use((res) => res);

export default service;
