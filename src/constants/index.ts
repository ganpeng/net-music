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

// 服务条款| 隐私政策| 儿童隐私政策| 版权投诉| 投资者关系| 广告合作 | 廉正举报| 联系我们

export const PAGE_FOOTER_LINKS = [
  {
    title: "服务条款",
    url: "https://st.music.163.com/official-terms/service",
  },
  {
    title: "隐私政策",
    url: "https://st.music.163.com/official-terms/privacy",
  },
  {
    title: "儿童隐私政策",
    url: "https://st.music.163.com/official-terms/children",
  },
  {
    title: "版权投诉",
    url: "https://music.163.com/st/staticdeal/complaints.html",
  },
  {
    title: "投资者关系",
    url: "http://ir.music.163.com/en/index.php",
  },
  {
    title: "广告合作",
    url: "https://music.163.com/ui/resource",
  },
  {
    title: "廉正举报",
    url: "https://jubao.163.com/",
  },
  {
    title: "联系我们",
    url: "https://mp.music.163.com/600948c936c13f4d09752e73/contact-us-web/index.html?source=Music-Main-Station",
  },
];

export const FOOTER_IMAGE_LINKS = [
  "https://web-amped.music.163.com/",
  "https://music.163.com/st/userbasic#/auth",
  "https://music.163.com/st/musician",
  "https://music.163.com/web/reward",
  "https://music.163.com/st/ncreator/revenue-plan",
];
