export const numberFormatter = (num: number) => {
  return num < 10000 ? num : `${(num / 10000).toFixed(0)} 万`;
};
