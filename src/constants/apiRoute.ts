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

/**
 * 歌单（网友精选碟）
 * order: 可选值为 'new' 和 'hot', 分别对应最新和最热 , 默认为 'hot'
  cat: tag, 比如 " 华语 "、" 古风 " 、" 欧美 "、" 流行 ", 默认为 "全部",可从歌单分类接口获取(/playlist/catlist)
  limit: 取出歌单数量 , 默认为 50
  offset: 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*50, 其中 50 为 limit 的值
  接口地址 : /top/playlist
  调用例子 : /top/playlist?limit=10&order=new
 */
export const TOP_PLAYLIST = `${apiRoot}/top/playlist`;

/**
 * 获取精选评论
 * id : 资源 id
  type: 数字 , 资源类型 , 对应歌曲 , mv, 专辑 , 歌单 , 电台, 视频对应以下类型
  0: 歌曲 1: mv 2: 歌单 3: 专辑 4: 电台 5: 视频
  可选参数 : limit: 取出评论数量 , 默认为 20
  pageNo:分页参数,第 N 页,默认为 1
  pageSize:分页参数,每页多少条数据,默认 20
  sortType: 排序方式, 1:按推荐排序, 2:按热度排序, 3:按时间排序
  before: 分页参数,取上一页最后一项的 time 获取下一页数据(获取超过 5000 条评论的时候需要用到)
  接口地址 : /comment/hot
  调用例子 : /comment/hot?id=186016&type=0
 *
 */

export const COMMENT_LIST = `${apiRoot}/comment/new`;
/**
 * 歌手分类列表
 *
 * limit : 返回数量 , 默认为 30
  offset : 偏移数量，用于分页 , 如 : 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0 initial: 按首字母索引查找参数,如 /artist/list?type=1&area=96&initial=b 返回内容将以 name 字段开头为 b 或者拼音开头为 b 为顺序排列, 热门传-1,#传 0
  type 取值: -1:全部 1:男歌手 2:女歌手 3:乐队
  area 取值: -1:全部 7华语 96欧美 8:日本 16韩国 0:其他
  调用例子 : /artist/list?type=1&area=96&initial=b /artist/list?type=2&area=2&initial=b
 */
export const ARTIST_LIST = `${apiRoot}/artist/list`;

/**
 * 热门新碟
 * 说明 : 调用此接口 ，获取云音乐首页新碟上架数据
  接口地址 : /album/newest
  调用例子 : /album/newest
 */
export const NEWEST_ALBUM = `${apiRoot}/album/newest`;

/**
 * 电台分类
 * 接口地址 : /dj/catelist
  调用例子 : /dj/catelist
 */
export const DJ_CATELIST = `${apiRoot}/dj/catelist`;

/**
 * 电台节目榜
 *
  limit : 返回数量 , 默认为 100
  offset : 偏移数量，用于分页 , 如 :( 页数 -1)*100, 其中 100 为 limit 的值 , 默认为 0
  接口地址 : /dj/program/toplist
  调用例子 : /dj/program/toplist?limit=1
 */
export const DJ_PROGRAMME_TOPLIST = `${apiRoot}/dj/program/toplist`;

/**
 * 电台推荐节目
 */
export const DJ_PROGRAMME_RECOMMEND = `${apiRoot}/program/recommend`;

/**
 * 获取音乐地址
 * 必选参数 : id : 音乐 id
  可选参数 : br: 码率,默认设置了 999000 即最大码率,如果要 320k 则可设置为 320000,其他类推
  接口地址 : /song/url
  调用例子 : /song/url?id=33894312 /song/url?id=405998841,33894312
 */
export const SONG_URL = `${apiRoot}/song/url`;

/**
 * 获取歌单所有歌曲
 * 必选参数 : id : 歌单 id
  可选参数 : limit : 限制获取歌曲的数量，默认值为当前歌单的歌曲数量
  可选参数 : offset : 默认值为0
  接口地址 : /playlist/track/all
  调用例子 : /playlist/track/all?id=24381616&limit=10&offset=1
 */
export const PLAYLIST_TRACK_ALL = `${apiRoot}/playlist/track/all`;

/**
 *
  歌手热门 50 首歌曲
  id : 歌手 id
  接口地址 : /artist/top/song
  调用例子 : /artist/top/song?id=6452
 *
 */
export const ARTIST_TOP_SONG = `${apiRoot}/artist/top/song`;

/**
 * 歌手全部歌曲
  可选参数 :
  order : hot ,time 按照热门或者时间排序
  limit: 取出歌单数量 , 默认为 50
  offset: 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*50, 其中 50 为 limit 的值
  接口地址 : /artist/songs
  调用例子 : /artist/songs?id=6452
 *
 */
export const ARTIST_SONGS = `${apiRoot}/artist/songs`;

/**
 * 获取歌手描述
  接口地址 : /artist/desc
  调用例子 : /artist/desc?id=6452 ( 周杰伦 )
 *
 */
export const ARTIST_DESC = `${apiRoot}/artist/desc`;

/**
 * 获取歌手详情
  说明 : 调用此接口 , 传入歌手 id, 可获得获取歌手详情
  必选参数 : id: 歌手 id
  接口地址 : /artist/detail
  调用例子 : /artist/detail?id=11972054 (Billie Eilish)
 *
 */
export const ARTIST_DETAIL = `${apiRoot}/artist/detail`;

/**
 * 获取相似歌手
  接口地址 : /simi/artist
  调用例子 : /simi/artist?id=6452 ( 对应和周杰伦相似歌手 )
 *
 */
export const SIMI_ARTIST = `${apiRoot}/simi/artist`;

/**
 * 获取歌手专辑
  可选参数 : limit: 取出数量 , 默认为 50
  offset: 偏移数量 , 用于分页 , 如 :( 页数 -1)*50, 其中 50 为 limit 的值 , 默认 为 0
  接口地址 : /artist/album
  调用例子 : /artist/album?id=6452&limit=30 ( 周杰伦 )
 *
 */
export const ARTIST_ALBUM = `${apiRoot}/artist/album`;

/***
 * 获取歌手 mv
  说明 : 调用此接口 , 传入歌手 id, 可获得歌手 mv 信息 ,
  具体 mv 播放地址可调 用/mv传入此接口获得的 mvid 来拿到 ,
  如 : /artist/mv?id=6452,/mv?mvid=5461064
  接口地址 : /artist/mv
  调用例子 : /artist/mv?id=6452
 *
 */
export const ARTIST_MV = `${apiRoot}/artist/mv`;

/***
 * 获取用户详情
  说明 : 登录后调用此接口 , 传入用户 id, 可以获取用户详情
  必选参数 : uid : 用户 id
  接口地址 : /user/detail
  调用例子 : /user/detail?uid=32953014
 *
 */
export const USER_DETAIL = `${apiRoot}/user/detail`;

/**
 * 获取用户动态
  必选参数 : uid : 用户 id
  可选参数 : limit : 返回数量 , 默认为 30
  lasttime : 返回数据的 lasttime ,默认-1,传入上一次返回结果的 lasttime,将会返回下一页的数据
  接口地址 : /user/event
  调用例子 : /user/event?uid=32953014 /user/event?uid=32953014&limit=1&lasttime=1558011138743
  返回结果的type参数对应:
  18 分享单曲
  19 分享专辑
  17、28 分享电台节目
  22 转发
  39 发布视频
  35、13 分享歌单
  24 分享专栏文章
  41、21 分享视频
 *
 */
export const USER_EVENT = `${apiRoot}/user/event`;
/**
 * 获取用户关注列表
  必选参数 : uid : 用户 id
  可选参数 :
  limit : 返回数量 , 默认为 30
  offset : 偏移数量，用于分页 ,如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
  接口地址 : /user/follows
  调用例子 : /user/follows?uid=32953014
 *
 */
export const USER_FOLLOWS = `${apiRoot}/user/follows`;
/**
 * 获取用户粉丝列表
  必选参数 : uid : 用户 id
  可选参数 : limit : 返回数量 , 默认为 30
  offset : 偏移数量，用于分页 ,如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
  接口地址 : /user/followeds
  调用例子 : /user/followeds?uid=32953014
            /user/followeds?uid=416608258&limit=1
            /user/followeds?uid=416608258&limit=1&offset=1
 *
 */
export const USER_FOLLOWEDS = `${apiRoot}/user/followeds`;
/**
 * 获取用户播放记录
  说明 : 登录后调用此接口 , 传入用户 id, 可获取用户播放记录
  必选参数 : uid : 用户 id
  可选参数 : type : type=1 时只返回 weekData, type=0 时返回 allData
  接口地址 : /user/record
  调用例子 : /user/record?uid=32953014&type=1
 *
 */
export const USER_RECORD = `${apiRoot}/user/record`;
/***
 * 获取用户歌单
  必选参数 : uid : 用户 id
  可选参数 : limit : 返回数量 , 默认为 30
  offset : 偏移数量，用于分页 , 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
  接口地址 : /user/playlist
  调用例子 : /user/playlist?uid=32953014
 *
 */
export const USER_PLAYLIST = `${apiRoot}/user/playlist`;
// 专辑相关
/***
 *
  专辑评论
  说明 : 调用此接口 , 传入音乐 id 和 limit 参数 , 可获得该专辑的所有评论 ( 不需要 登录 )
  必选参数 : id: 专辑 id
  可选参数 : limit: 取出评论数量 , 默认为 20
  offset: 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值
  before: 分页参数,取上一页最后一项的 time 获取下一页数据(获取超过 5000 条评论的时候需要用到)
  接口地址 : /comment/album
  调用例子 : /comment/album?id=32311
 *
 */
export const ALBUM_COMMENTS = `${apiRoot}/comment/album`;
/**
 *
 * 获取专辑内容
  说明 : 调用此接口 , 传入专辑 id, 可获得专辑内容
  必选参数 : id: 专辑 id
  接口地址 : /album
  调用例子 : /album?id=32311
 */
export const ALBUM_DETAIL = `${apiRoot}/album`;

/**
 *
 * 获取歌曲详情
  说明 : 调用此接口 , 传入音乐 id(支持多个 id, 用 , 隔开), 可获得歌曲详情(dt为歌曲时长)
  必选参数 : ids: 音乐 id, 如 ids=347230
  接口地址 : /song/detail
  调用例子 : /song/detail?ids=347230,/song/detail?ids=347230,347231
 */
export const SONG_DETAIL = `${apiRoot}/song/detail`;

/***
 * 获取相似音乐
  说明 : 调用此接口 , 传入歌曲 id, 可获得相似歌曲
  必选参数 : id: 歌曲 id
  接口地址 : /simi/song
  调用例子 : /simi/song?id=347230 ( 对应 ' 光辉岁月 ' 相似歌曲 )
 *
 */
export const SIMI_MUSIC = `${apiRoot}/simi/song`;
/***
 * 获取最近 5 个听了这首歌的用户
  说明 : 调用此接口 , 传入歌曲 id, 最近 5 个听了这首歌的用户
  必选参数 : id: 歌曲 id
  接口地址 : /simi/user
  调用例子 : /simi/user?id=347230 ( 对应 ' 光辉岁月 ' 相似歌曲 )
 *
 */
export const SIMI_USER = `${apiRoot}/simmi/user`;

/***
 * 歌曲评论
  说明 : 调用此接口 , 传入音乐 id 和 limit 参数 , 可获得该音乐的所有评论 ( 不需要登录 )
  必选参数 : id: 音乐 id
  可选参数 : limit: 取出评论数量 , 默认为 20
  offset: 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值
  before: 分页参数,取上一页最后一项的 time 获取下一页数据(获取超过 5000 条评论的时候需要用到)
  接口地址 : /comment/music
  调用例子 : /comment/music?id=186016&limit=1 对应晴天评论
 *
 */
export const COMMENT_MUSIC = `${apiRoot}/comment/music`;
/**
 * 获取歌词
  说明 : 调用此接口 , 传入音乐 id 可获得对应音乐的歌词 ( 不需要登录 )
  必选参数 : id: 音乐 id
  接口地址 : /lyric
  调用例子 : /lyric?id=33894312
 *
 */
export const MUSIC_LYRIC = `${apiRoot}/lyric`;
/***
 * 获取相似歌单
  说明 : 调用此接口 , 传入歌曲 id, 可获得相似歌单
  必选参数 : id: 歌曲 id
  接口地址 : /simi/playlist
  调用例子 : /simi/playlist?id=347230 ( 对应 ' 光辉岁月 ' 相似歌单 )
 */
export const SIMI_PLAYLIST = `${apiRoot}/simi/playlist`;

/****
 * 3. 二维码登录
  说明: 二维码登录涉及到 3 个接口,调用务必带上时间戳,防止缓存
  1. 二维码 key 生成接口
  说明: 调用此接口可生成一个 key
  接口地址 : /login/qr/key
  2. 二维码生成接口
  说明: 调用此接口传入上一个接口生成的 key 可生成二维码图片的 base64 和二维码信息,可使用 base64 展示图片,
  或者使用二维码信息内容自行使用第三方二维码生成库渲染二维码
  必选参数: key,由第一个接口生成
  可选参数: qrimg 传入后会额外返回二维码图片 base64 编码
  接口地址 : /login/qr/create
  调用例子 : /login/qr/create?key=xxx&qrimg=true
  3. 二维码检测扫码状态接口
  说明: 轮询此接口可获取二维码扫码状态,800 为二维码过期,801 为等待扫码,802 为待确认,
  803 为授权登录成功(803 状态码下会返回 cookies)
  必选参数: key,由第一个接口生成
  接口地址 : /login/qr/check
  调用例子 : /login/qr/check?key=xxx
  调用可参考项目文件例子/public/qrlogin.html (访问地址:http://localhost:3000/qrlogin.html)
 *
 */
export const LOGIN_QR_KEY = `${apiRoot}/login/qr/key`;
export const LOGIN_QR_CREATE = `${apiRoot}/login/qr/create`;
export const LOGIN_QR_CHECK = `${apiRoot}/login/qr/check`;

/***
 * 获取账号信息
  说明 : 登录后调用此接口 ,可获取用户账号信息
  接口地址 : /user/account
  调用例子 : /user/account
 *
 */
export const USER_ACCOUNT = `${apiRoot}/user/account`;
/***
 * 获取用户信息 , 歌单，收藏，mv, dj 数量
  说明 : 登录后调用此接口 , 可以获取用户信息
  接口地址 : /user/subcount
  调用例子 : /user/subcount
 */
export const USER_SUBCOUNT = `${apiRoot}/user/subcount`;
/***
 * 退出登录
  说明 : 调用此接口 , 可退出登录
  调用例子 : /logout
 *
 */
export const LOGOUT = `${apiRoot}/logout`;
/***
 * 关注/取消关注用户
  说明 : 登录后调用此接口 , 传入用户 id, 和操作 t,可关注/取消关注用户
  必选参数 :
  id : 用户 id
  t : 1为关注,其他为取消关注
  接口地址 : /follow
  调用例子 : /follow?id=32953014&t=1
 *
 */
export const FOLLOW_USER = `${apiRoot}/follow`;
/***
 * 签到进度
  说明 : 调用此接口 , 可获得签到进度
  可选参数 : moduleId : 模块 id，默认为 '1207signin-1207signin'
  接口地址 : /signin/progress
  调用例子 : /signin/progress?moduleId=1207signin-1207signin
 *
 */
export const SIGNIN_PROGRESS = `${apiRoot}/signin/progress`;

// mv
/***
 * mv 评论
  说明 : 调用此接口 , 传入音乐 id 和 limit 参数 , 可获得该 mv 的所有评论 ( 不需要 登录 )
  必选参数 : id: mv id
  可选参数 : limit: 取出评论数量 , 默认为 20
  offset: 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值
  before: 分页参数,取上一页最后一项的 time 获取下一页数据(获取超过 5000 条评论的时候需要用到)
  接口地址 : /comment/mv
  调用例子 : /comment/mv?id=5436712
 *
 */
export const COMMENT_MV = `${apiRoot}/comment/mv`;
/***
 * 相似 mv
  说明 : 调用此接口 , 传入 mvid 可获取相似 mv
  必选参数 : mvid: mv id
  接口地址 : /simi/mv
  调用例子 : /simi/mv?mvid=5436712
 *
 */
export const SIMI_MV = `${apiRoot}/simi/mv`;
/***
 * 获取 mv 数据
  说明 : 调用此接口 , 传入 mvid ( 在搜索音乐的时候传 type=1004 获得 ) ,
  可获取对应 MV 数据 , 数据包含 mv 名字 , 歌手 , 发布时间 , mv 视频地址等数据 ,
  其中 mv 视频 网易做了防盗链处理 , 可能不能直接播放 , 需要播放的话需要调用 ' mv 地址' 接口
  必选参数 : mvid: mv 的 id
  接口地址 : /mv/detail
  调用例子 : /mv/detail?mvid=5436712
 */
export const MV_DETAIL = `${apiRoot}/mv/detail`;
/***
 * 获取 mv 点赞转发评论数数据
  说明 : 调用此接口 , 传入 mvid ( 在搜索音乐的时候传 type=1004 获得 ) , 可获取对应 MV 点赞转发评论数数据
  必选参数 : mvid: mv 的 id
  接口地址 : /mv/detail/info
  调用例子 : /mv/detail/info?mvid=5436712
 */
export const MV_DETAIL_INFO = `${apiRoot}/mv/detail/info`;
/**
 *
 * mv 地址
  说明 : 调用此接口 , 传入 mv id,可获取 mv 播放地址
  必选参数 : id: mv id
  可选参数 : r: 分辨率,默认 1080,可从 /mv/detail 接口获取分辨率列表
  接口地址 : /mv/url
  调用例子 :
  /mv/url?id=5436712 /mv/url?id=10896407&r=1080
 */
export const MV_URL = `${apiRoot}/mv/url`;

const apiRoute: { [propName: string]: string } = {
  BANNER_LIST,
  HOT_PLAYLIST_CATEGORY,
  CATEGORY_LIST,
  PERSONALIZED,
  BOARD_LIST,
  PLAYLIST_DETAIL,
  TOP_ARTISTS,
  HOT_DJ,
  TOP_PLAYLIST,
  COMMENT_LIST,
  ARTIST_LIST,
  NEWEST_ALBUM,
  DJ_CATELIST,
  DJ_PROGRAMME_TOPLIST,
  DJ_PROGRAMME_RECOMMEND,
  SONG_URL,
  PLAYLIST_TRACK_ALL,
  ARTIST_TOP_SONG,
  ARTIST_SONGS,
  ARTIST_DESC,
  ARTIST_DETAIL,
  SIMI_ARTIST,
  ARTIST_ALBUM,
  ARTIST_MV,
  USER_DETAIL,
  USER_EVENT,
  USER_FOLLOWS,
  USER_FOLLOWEDS,
  USER_RECORD,
  USER_PLAYLIST,
  // 专辑album
  TOP_ALBUM,
  NEW_ALBUM,
  ALBUM_COMMENTS,
  ALBUM_DETAIL,
  // song
  SONG_DETAIL,
  SIMI_MUSIC,
  SIMI_USER,
  COMMENT_MUSIC,
  MUSIC_LYRIC,
  SIMI_PLAYLIST,
  // login
  LOGIN_QR_KEY,
  LOGIN_QR_CREATE,
  LOGIN_QR_CHECK,
  USER_ACCOUNT,
  USER_SUBCOUNT,
  LOGOUT,
  FOLLOW_USER,
  SIGNIN_PROGRESS,
  // mv
  COMMENT_MV,
  SIMI_MV,
  MV_DETAIL,
  MV_DETAIL_INFO,
  MV_URL,
};

export default apiRoute;
