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
 * 歌单全部分类
 */
export const CATEGORY_LIST = `${apiRoot}/playlist/catlist`;

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

/**
 * 
 * 所有榜单
  说明 : 调用此接口,可获取所有榜单 接口地址 : /toplist
  调用例子 : /toplist
 */
export const BOARD_LIST = `${apiRoot}/toplist`;

/**
 * 歌单详情
  必选参数 : id : 歌单 id
  可选参数 : s : 歌单最近的 s 个收藏者,默认为 8
  接口地址 : /playlist/detail
  调用例子 : /playlist/detail?id=24381616
 */
export const PLAYLIST_DETAIL = `${apiRoot}/playlist/detail`;

/**
 * 说明 : 调用此接口 , 可获取热门歌手数据
  可选参数 : limit: 取出数量 , 默认为 50
  offset: 偏移数量 , 用于分页 , 如 :( 页数 -1)*50, 其中 50 为 limit 的值 , 默认 为 0
  接口地址 : /top/artists
  调用例子 : /top/artists?offset=0&limit=30
 * 
 */
export const TOP_ARTISTS = `${apiRoot}/top/artists`;

/**
 * limit : 返回数量 , 默认为 100 (不支持 offset)
  接口地址 : /dj/toplist/popular
  调用例子 : /dj/toplist/popular?limit=30
 * 
 */
export const HOT_DJ = `${apiRoot}/dj/toplist/popular`;

const apiRoute: { [propName: string]: string } = {
  BANNER_LIST,
  HOT_PLAYLIST_CATEGORY,
  CATEGORY_LIST,
  PERSONALIZED,
  TOP_ALBUM,
  NEW_ALBUM,
  BOARD_LIST,
  PLAYLIST_DETAIL,
  TOP_ARTISTS,
  HOT_DJ,
};

export default apiRoute;
