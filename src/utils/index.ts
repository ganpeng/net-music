import { pickBy } from "lodash";
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
