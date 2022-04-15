const apiRoot = process.env.REACT_APP_API_ROOT;

/**
 * type:资源类型,对应以下类型,默认为 0 即 PC
0: pc
1: android
2: iphone
3: ipad
 * 
 */
export const BANNER_LIST = `${apiRoot}/banner`;

/**
 *
 *  热门歌单分类
 */
export const HOT_PLAYLIST_CATEGORY = `${apiRoot}/playlist/hot`;

const apiRoute: { [propName: string]: string } = {
  BANNER_LIST,
  HOT_PLAYLIST_CATEGORY,
};

export default apiRoute;
