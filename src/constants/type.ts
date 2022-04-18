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
  name: string;
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
