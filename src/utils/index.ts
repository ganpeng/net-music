import { floor, isUndefined, pickBy } from "lodash";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/zh-cn"; // 导入本地化语言
const querystring = require("querystring");
dayjs.extend(relativeTime);
dayjs.locale("zh-cn"); // 使用本地化语言

export const getParamsString = (params: { [propName: string]: any }) => {
  let paramsStr = querystring.stringify(
    pickBy(params, (item) => {
      return item !== "" && item !== undefined;
    })
  );
  return paramsStr;
};

export const numberFormatter = (num: number | undefined) => {
  if (isUndefined(num)) return 0;
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
  const _num = num / 1000;
  const h = floor(_num / 3600);
  const m = floor((_num % 3600) / 60);
  const s = floor(_num % 3600) % 60;
  return h !== 0
    ? `${h <= 9 ? `0${h}` : h}:${m <= 9 ? `0${m}` : m}:${s <= 9 ? `0${s}` : s}`
    : `${m <= 9 ? `0${m}` : m}:${s <= 9 ? `0${s}` : s}`;
};

export const fromNow = (timeStamp: number) => {
  return dayjs(timeStamp).fromNow();
};

export const dateFormatter = (timeStamp: number, formatter: string) => {
  return dayjs(timeStamp).format(formatter);
  // dayjs('2019-01-25').format('YYYY-MM-DD HH:mm:ss')
};
