import React from "react";
import { useQuery } from "react-query";
import take from "lodash/take";
import { getPersonalizedList } from "../../service";
import "./index.scss";
import { numberFormatter } from "../../utils";
import HotRecommendContentLoader from "../my_content_loader/HotRecommendContentLoader";
import { Link } from "react-router-dom";
import { linkToPlaylistDetailPage } from "../../utils/link";
import { useGetPlaylistTrackSongsUrl } from "../../hooks/useGetPlaylistTrackSongsUrl";

function HotRecommend() {
  const { data, isFetching } = useQuery("hot-recomment", getPersonalizedList);
  const { getSongsUrls } = useGetPlaylistTrackSongsUrl();
  return isFetching ? (
    <HotRecommendContentLoader />
  ) : (
    <div className="hot-recommnend-container">
      {take(data?.result, 8).map((hotRecommend) => {
        return (
          <div className="hot-recommend-item" key={hotRecommend.id}>
            <div className="image-field">
              <div
                className="img"
                style={{ backgroundImage: `url(${hotRecommend.picUrl})` }}
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
            <p className="name text-decoration">
              <Link to={linkToPlaylistDetailPage(hotRecommend.id)}>
                {hotRecommend.name}
              </Link>
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default HotRecommend;
