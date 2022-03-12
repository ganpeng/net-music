import { lazy, ReactNode, Suspense } from "react";
import { RouteObject } from "react-router-dom";

// 切换页面会出现闪屏现象
// 解决思路：公共页面不采用懒加载的方式 并在App.tsx去除Suspense的包裹
import PageLayout from "../page/layout/Layout";

const Home = lazy(() => import("../page/home/Home"));
const About = lazy(() => import("../page/about/About"));
const Goods = lazy(() => import("../page/goods/Goods"));
const GoodsList = lazy(() => import("../page/goods/GoodsList"));
const GoodsDetail = lazy(() => import("../page/goods/GoodsDetail"));
const NotFound = lazy(() => import("../page/error/NotFound"));
const Auth = lazy(() => import("../page/auth/Auth"));

// 实现懒加载的用Suspense包裹 定义函数
const lazyLoad = (children: ReactNode): ReactNode => {
  return <Suspense fallback={<h1>Loading...</h1>}>{children}</Suspense>;
};

const routes: RouteObject[] = [
  {
    path: "/auth",
    element: lazyLoad(<Auth />),
  },
  {
    path: "/about",
    element: lazyLoad(<About />),
  },
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
        path: "goods",
        element: lazyLoad(<Goods />),
        children: [
          {
            path: "list",
            index: true,
            element: lazyLoad(<GoodsList />),
          },
          {
            path: ":id",
            element: lazyLoad(<GoodsDetail />),
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: lazyLoad(<NotFound />),
  },
];

export default routes;
