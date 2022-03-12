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
