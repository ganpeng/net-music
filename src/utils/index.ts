import { floor, isArray, isUndefined, pickBy } from "lodash";
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
};

export const isParent = (obj: any, parentObj: any) => {
  while (
    obj !== undefined &&
    obj !== null &&
    obj.tagName.toUpperCase() !== "BODY"
  ) {
    if (obj === parentObj) {
      return true;
    }
    obj = obj.parentNode;
  }
  return false;
};
/**
 * 对字符串做编码
 *
 * @param {any} str
 * @returns
 */
function encode(str: string) {
  try {
    return encodeURIComponent(str);
  } catch (e) {
    return str;
  }
}

/**
 * 对编码后的字符串解码
 *
 * @param {String} str
 * @return {String}
 */
function decode(str: string) {
  try {
    return decodeURIComponent(str.replace(/\+/g, " "));
  } catch (e) {
    return str;
  }
}

/**
 * 将url中的查询字符串序列化成对象
 *
 * @param {any} str
 * @returns
 */
export function parse(str: string) {
  var pattern = /(\w+)\[(\d+)\]/;
  if ("string" != typeof str) return {};

  str = str.trim();
  if ("" === str) return {};
  if ("?" === str.charAt(0)) str = str.slice(1);

  let obj: {
    [propName: string]: any;
  } = {};
  let pairs = str.split("&");
  for (var i = 0; i < pairs.length; i++) {
    var parts = pairs[i].split("=");
    var key = decode(parts[0]);
    var m;

    if ((m = pattern.exec(key))) {
      obj[m[1]] = obj[m[1]] || [];
      obj[m[1]][m[2]] = decode(parts[1]);
      continue;
    }

    obj[parts[0]] = null == parts[1] ? "" : decode(parts[1]);
  }

  return obj;
}

/**
 * 将对象序列化成查询字符串
 *
 * @param {any} obj
 * @returns
 */
export function stringify(obj: { [propName: string]: any }) {
  if (!obj) return "";
  let pairs = [];

  for (let key in obj) {
    let value = obj[key];

    if (isArray(value)) {
      for (let i = 0; i < value.length; ++i) {
        pairs.push(encode(key + "[" + i + "]") + "=" + encode(value[i]));
      }
      continue;
    }

    pairs.push(encode(key) + "=" + encode(obj[key]));
  }

  return pairs.join("&");
}

export function blankLink(path: string) {
  const oa = document.createElement("a");
  oa.href = path;
  oa.target = "_blank";
  oa.click();
}
