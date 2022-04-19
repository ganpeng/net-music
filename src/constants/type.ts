export interface ITodo {
  readonly id?: number;
  text: string;
  isActive: boolean;
  isEdit: boolean;
}

export interface ITodosResponse {}

export interface INavBar {
  text: string;
  isActive: boolean;
  isLast?: boolean;
  isSup?: boolean;
}

// 轮播图
export interface IBannerItem {
  imageUrl: string;
  titleColor: string;
  typeTitle: string;
  [propName: string]: any;
}

export interface IBannerListResult {
  banners: IBannerItem[];
  code: number;
}

// 热门推荐分类
export interface ITag {
  activity: boolean;
  category: number;
  hot: boolean;
  id: number;
  name: string;
  position: number;
  type: number;
  usedCount: number;
  [propName: string]: any;
}

export interface ITagsResponse {
  code: number;
  tags: ITag[];
}

// 热门推荐
export interface IHotRecommendResultItem {
  alg: string;
  canDislike: boolean;
  copywriter: string;
  highQuality: boolean;
  id: number;
  name: string;
  picUrl: string;
  playCount: number;
  trackCount: number;
  trackNumberUpdateTime: number;
  type: number;
}

export interface IHotRecommendResponse {
  category: number;
  code: number;
  hasTaste: boolean;
  result: IHotRecommendResultItem[];
}

// 新碟
export interface IArtist {
  id: number;
  name: string;
  picUrl: string;
  [propName: string]: any;
}

export interface IAlbum {
  blurPicUrl: string;
  id: number;
  name: string;
  picUrl: string;
  artist: IArtist;
  [propName: string]: any;
}

export interface INewAlbumResponse {
  code: number;
  total: number;
  albums: IAlbum[];
}

//  榜单
export interface IBoard {
  id: number;
  name: string;
  coverImgUrl: string;
  [propName: string]: any;
}

export interface IBoardListResponse {
  code: number;
  list: IBoard[];
  [propName: string]: any;
}

// 榜单详情
export interface ITrack {
  id: number;
  name: string;
  [propName: string]: any;
}

export interface IPlayListDetail {
  id: number;
  name: string;
  tracks: ITrack[];
  [propName: string]: any;
}

export interface IPlayListDetailResponse {
  code: number;
  playlist: IPlayListDetail;
  [propName: string]: any;
}

// 歌手
export interface IArtistListResponse {
  code: number;
  more: boolean;
  artists: IArtist[];
}

// 主播
export interface IDj {
  id: null;
  nickName: string;
  avatarUrl: string;
  [propName: string]: any;
}

export interface IDjListResponse {
  code: number;
  msg: string | null;
  data: {
    total: number;
    list: IDj[];
    [propName: string]: any;
  };
}
