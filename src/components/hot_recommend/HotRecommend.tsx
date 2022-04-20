import React from "react";
import { useQuery } from "react-query";
import take from "lodash/take";
import { getPersonalizedList } from "../../service";
import "./index.scss";
import { numberFormatter } from "../../utils";

function HotRecommend() {
  let { data } = useQuery("hot-recomment", getPersonalizedList);

  return (
    <div className="hot-recommnend-container">
      {take(data?.result, 8).map((hotRecommend) => {
        return (
          <div className="hot-recommend-item" key={hotRecommend.id}>
            <div className="image-field">
              <div
                className="img"
                style={{ backgroundImage: `url(${hotRecommend.picUrl})` }}
              ></div>
              <div className="meta-info">
                <div className="view-count">
                  <div className="view-icon"></div>
                  <span className="count">
                    {numberFormatter(hotRecommend.playCount)}
                  </span>
                </div>
                <div className="play-btn-container">
                  <div className="play-btn"></div>
                </div>
              </div>
            </div>
            <p className="name">{hotRecommend.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default HotRecommend;
