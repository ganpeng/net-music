import { INavBar } from "./type";

export const PAGE_LIMIT = 35;
export const COMMENT_PAGE_LIST = 20;

export const DEFAULT_NAV_BAR_LIST: INavBar[] = [
  {
    text: "发现音乐",
    isActive: true,
  },
  {
    text: "我的音乐",
    isActive: false,
  },
  {
    text: "关注",
    isActive: false,
  },
  {
    text: "商城",
    isActive: false,
  },
  {
    text: "音乐人",
    isActive: false,
  },
  {
    text: "下载客户端",
    isActive: false,
    isLast: true,
  },
];

export const DEFAULT_SUB_NAV_BAR_LIST: INavBar[] = [
  {
    text: "推荐",
    isActive: true,
  },
  {
    text: "排行榜",
    isActive: false,
  },
  {
    text: "歌单",
    isActive: false,
    isSup: true,
  },
  {
    text: "主播电台",
    isActive: false,
  },
  {
    text: "歌手",
    isActive: false,
  },
  {
    text: "新碟上架",
    isActive: false,
  },
];
