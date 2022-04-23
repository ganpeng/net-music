import { floor, pickBy } from "lodash";
const querystring = require("querystring");

export const getParamsString = (params: { [propName: string]: any }) => {
  let paramsStr = querystring.stringify(
    pickBy(params, (item) => {
      return item !== "" && item !== undefined;
    })
  );
  return paramsStr;
};

export const numberFormatter = (num: number) => {
  return num < 10000 ? num : `${(num / 10000).toFixed(0)} 万`;
};

export const getMonthDay = (timestamp: number) => {
  const date = new Date(timestamp);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${month <= 9 ? `0${month}` : month}月${day <= 9 ? `0${day}` : day}日`;
};

export const getYearMonthDay = (timestamp: number) => {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}年${month <= 9 ? `0${month}` : month}月${
    day <= 9 ? `0${day}` : day
  }日`;
};

export const timeFormatter = (num: number) => {
  num = num / 1000;
  const h = floor(num / 3600);
  const m = floor((num % 3600) / 60);
  const s = floor(num % 3600) % 60;
  return h !== 0
    ? `${h <= 9 ? `0${h}` : h}:${m <= 9 ? `0${m}` : m}:${s <= 9 ? `0${s}` : s}`
    : `${m <= 9 ? `0${m}` : m}:${s <= 9 ? `0${s}` : s}`;
};
