import { lazy, ReactNode, Suspense } from "react";
import { RouteObject } from "react-router-dom";

// 切换页面会出现闪屏现象
// 解决思路：公共页面不采用懒加载的方式 并在App.tsx去除Suspense的包裹
import PageLayout from "../page/layout/Layout";

const Home = lazy(() => import("../page/home/Home"));
const NotFound = lazy(() => import("../page/error/NotFound"));
const Playlist = lazy(() => import("../page/playlist/Playlist"));
const TopList = lazy(() => import("../page/toplist/TopList"));
const DjradioList = lazy(() => import("../page/djradio_list/DjradioList"));
const ArtistList = lazy(() => import("../page/artist_list/ArtistList"));
// Album
const AlbumList = lazy(() => import("../page/album_list/AlbumList"));
const AlbumDetail = lazy(() => import("../page/album_detail/AlbumDetail"));
const PlaylistDetail = lazy(
  () => import("../page/playlist_detail/PlaylistDetail")
);
// Artist
const ArtistDetail = lazy(() => import("../page/artist_detail/ArtistDetail"));
const ArtistTopSong = lazy(
  () => import("../container/artist_top_song/ArtistTopSong")
);
const ArtistAlbum = lazy(() => import("../container/artist_album/ArtistAlbum"));
const ArtistMv = lazy(() => import("../container/artist_mv/ArtistMv"));
const ArtistDesc = lazy(() => import("../container/artist_desc/ArtistDesc"));
// User
const User = lazy(() => import("../page/user/User"));
const UserHome = lazy(() => import("../container/user_home/UserHome"));
const UserEvent = lazy(() => import("../container/user_event/UserEvent"));
const UserFollows = lazy(() => import("../container/user_follows/UserFollows"));
const UserFans = lazy(() => import("../container/user_fans/UserFans"));
const UserSongsRank = lazy(
  () => import("../page/user_songs_rank/UserSongsRank")
);
// 实现懒加载的用Suspense包裹 定义函数
const lazyLoad = (children: ReactNode): ReactNode => {
  return <Suspense fallback={<></>}>{children}</Suspense>;
};

const routes: RouteObject[] = [
  {
    path: "/",
    element: <PageLayout />,
    children: [
      {
        path: "",
        index: true,
        element: lazyLoad(<Home />),
      },
      {
        path: "playlist",
        element: lazyLoad(<Playlist />),
      },
      {
        path: "toplist",
        element: lazyLoad(<TopList />),
      },
      {
        path: "djradiolist",
        element: lazyLoad(<DjradioList />),
      },
      {
        path: "artistlist",
        element: lazyLoad(<ArtistList />),
      },
      {
        path: "albumlist",
        element: lazyLoad(<AlbumList />),
      },
      {
        path: "album-detail",
        element: lazyLoad(<AlbumDetail />),
      },
      {
        path: "playlist-detail",
        element: lazyLoad(<PlaylistDetail />),
      },
      {
        path: "artist",
        element: lazyLoad(<ArtistDetail />),
        children: [
          {
            path: "",
            element: lazyLoad(<ArtistTopSong />),
          },
          {
            path: "album",
            element: lazyLoad(<ArtistAlbum />),
          },
          {
            path: "mv",
            element: lazyLoad(<ArtistMv />),
          },
          {
            path: "desc",
            element: lazyLoad(<ArtistDesc />),
          },
        ],
      },
      {
        path: "user",
        element: lazyLoad(<User />),
        children: [
          {
            path: "home",
            element: lazyLoad(<UserHome />),
          },
          {
            path: "event",
            element: lazyLoad(<UserEvent />),
          },
          {
            path: "follows",
            element: lazyLoad(<UserFollows />),
          },
          {
            path: "fans",
            element: lazyLoad(<UserFans />),
          },
        ],
      },
      {
        path: "/user/songs/rank",
        element: lazyLoad(<UserSongsRank />),
      },
    ],
  },
  {
    path: "*",
    element: lazyLoad(<NotFound />),
  },
];

export default routes;
