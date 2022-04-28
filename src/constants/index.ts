import { INavBar } from "./type";

export const PAGE_LIMIT = 35;
export const COMMENT_PAGE_LIST = 20;
export const ARTIST_LIST_LIMIT = 100;

export const QUERY_CLIENT_OPTIONS = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
};

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
    path: "/",
  },
  {
    text: "排行榜",
    isActive: false,
    path: "/toplist",
  },
  {
    text: "歌单",
    isActive: false,
    path: "/playlist",
    isSup: true,
  },
  {
    text: "主播电台",
    path: "/djradiolist",
    isActive: false,
  },
  {
    text: "歌手",
    path: "/artistlist",
    isActive: false,
  },
  {
    text: "新碟上架",
    path: "/albumlist",
    isActive: false,
  },
];

export const ARTIST_CATEGORY_LIST = [
  {
    title: "推荐",
  },
  {
    title: "华语",
    area: 7,
  },
  {
    title: "欧美",
    area: 96,
  },
  {
    title: "日本",
    area: 8,
  },
  {
    title: "韩国",
    area: 16,
  },
  {
    title: "其他",
    area: 0,
  },
].map((item) => {
  if (item.title === "推荐") {
    return {
      title: item.title,
      children: [
        {
          title: `${item.title}歌手`,
          type: 0,
          area: 0,
        },
      ],
    };
  } else {
    return {
      title: item.title,
      children: [
        {
          title: `${item.title}男歌手`,
          type: 1,
          area: item.area,
        },
        {
          title: `${item.title}女歌手`,
          type: 2,
          area: item.area,
        },
        {
          title: `${item.title}组合/乐队`,
          type: 3,
          area: item.area,
        },
      ],
    };
  }
});

export const ARTIST_NAME_SEARCH_LIST = [
  "热门",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "其他",
];

export const ALBUM_AREA_LIST = [
  {
    title: "全部",
    area: "ALL",
  },
  {
    title: "华语",
    area: "ZH",
  },
  {
    title: "欧美",
    area: "EA",
  },
  {
    title: "韩国",
    area: "KR",
  },
  {
    title: "日本",
    area: "JP",
  },
];
