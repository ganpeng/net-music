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
 *  /personalized?limit=1 参数limit 默认30
 */
export const HOT_PLAYLIST_CATEGORY = `${apiRoot}/playlist/hot`;

/**
 * 热门推荐歌单
 */
export const PERSONALIZED = `${apiRoot}/personalized`;

const apiRoute: { [propName: string]: string } = {
  BANNER_LIST,
  HOT_PLAYLIST_CATEGORY,
  PERSONALIZED,
};

export default apiRoute;
