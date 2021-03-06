import React, { useState } from "react";
import { useQuery } from "react-query";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { CategoryList, Pagination, SectionHeader } from "../../components";
import { PAGE_LIMIT } from "../../constants";
import { ITopPlayListSearchParams } from "../../constants/type";
import { useGetPlaylistTrackSongsUrl } from "../../hooks/useGetPlaylistTrackSongsUrl";
import { getTopPlayList } from "../../service";
import { getParamsString, numberFormatter } from "../../utils";
import { linkToPlaylistDetailPage, linkToUserHomePage } from "../../utils/link";
import "./index.scss";

function Playlist() {
  const [showCatList, setShowCatList] = useState(false);
  const [searchParams] = useSearchParams();
  const offset = Number(searchParams.get("offset")) || 0;
  const cat = searchParams.get("cat") || "全部";
  const topPlayListSearchParams: ITopPlayListSearchParams = {
    offset,
    cat,
    limit: PAGE_LIMIT,
  };

  const navigator = useNavigate();
  const { isFetching, data } = useQuery(["top_playlist", offset, cat], () =>
    getTopPlayList(topPlayListSearchParams)
  );

  const { getSongsUrls } = useGetPlaylistTrackSongsUrl();

  const pageChangeHandler = (num: number) => {
    const params: ITopPlayListSearchParams = {
      offset: (num - 1) * PAGE_LIMIT,
      limit: PAGE_LIMIT,
      cat,
    };
    if (isFetching) {
      return false;
    } else {
      navigator(`/playlist?${getParamsString(params)}`);
    }
  };

  return (
    <div className="playlist-container content-w content-h">
      <SectionHeader title={cat} moreLink="" hasTitleIcon={false}>
        <div
          className="selecte-category-btn"
          onClick={(e) => {
            setShowCatList(!showCatList);
            e.nativeEvent.stopImmediatePropagation();
          }}
        >
          <div className="text">选择分类</div>
          <div className="icon"></div>
        </div>
        {showCatList && (
          <CategoryList
            hideCatList={() => setShowCatList(false)}
          ></CategoryList>
        )}
      </SectionHeader>
      <div className="hot-recommnend-container">
        {data?.playlists.map((hotRecommend) => {
          return (
            <div className="hot-recommend-item" key={hotRecommend.id}>
              <div className="image-field">
                <div
                  className="img"
                  style={{
                    backgroundImage: `url(${hotRecommend.coverImgUrl})`,
                  }}
                >
                  <Link to={linkToPlaylistDetailPage(hotRecommend.id)}></Link>
                </div>
                <div className="meta-info">
                  <div className="view-count">
                    <div className="view-icon"></div>
                    <span className="count">
                      {numberFormatter(hotRecommend.playCount)}
                    </span>
                  </div>
                  <div className="play-btn-container">
                    <div
                      className="play-btn"
                      onClick={() => getSongsUrls(hotRecommend.id)}
                    ></div>
                  </div>
                </div>
              </div>
              <p className="name">
                <Link to={linkToPlaylistDetailPage(hotRecommend.id)}>
                  {hotRecommend.name}
                </Link>
              </p>
              <div className="creator">
                <div className="by">by</div>
                <div className="nickname text-decoration">
                  <Link to={linkToUserHomePage(hotRecommend.creator.userId)}>
                    {hotRecommend.creator.nickname}
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Pagination
        total={data?.total || 0}
        pageLimit={PAGE_LIMIT}
        pageChangeHandler={pageChangeHandler}
        offset={offset}
      ></Pagination>
    </div>
  );
}

export default Playlist;
