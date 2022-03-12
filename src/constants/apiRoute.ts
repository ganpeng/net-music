const apiRoot = process.env.REACT_APP_API_ROOT;

/**
 * type:资源类型,对应以下类型,默认为 0 即 PC
0: pc
1: android
2: iphone
3: ipad
 * 
 */
export const bannerList = `${apiRoot}/banner`;

const apiRoute: { [propName: string]: string } = {
  bannerList,
};

export default apiRoute;
