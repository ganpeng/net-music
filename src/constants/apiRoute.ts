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

/**
 * 新碟上架
 * 
  可选参数 :
  limit: 取出数量 , 默认为 50
  offset: 偏移数量 , 用于分页 , 如 :( 页数 -1)*50, 其中 50 为 limit 的值 , 默认 为 0
  area: ALL:全部,ZH:华语,EA:欧美,KR:韩国,JP:日本
  type : new:全部 hot:热门,默认为 new
  year : 年,默认本年
  month : 月,默认本月 
  调用例子 : /top/album?offset=0&limit=30&year=2019&month=6
 * 
 */
export const TOP_ALBUM = `${apiRoot}/top/album`;

/**
 * 全部新碟
  limit : 返回数量 , 默认为 30
  offset : 偏移数量，用于分页 , 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
  area : ALL:全部,ZH:华语,EA:欧美,KR:韩国,JP:日本
  调用例子 : /album/new?area=KR&limit=10
 */
export const NEW_ALBUM = `${apiRoot}/album/new`;

const apiRoute: { [propName: string]: string } = {
  BANNER_LIST,
  HOT_PLAYLIST_CATEGORY,
  PERSONALIZED,
  TOP_ALBUM,
  NEW_ALBUM,
};

export default apiRoute;
