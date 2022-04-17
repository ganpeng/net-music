import React from "react";
import { useQuery } from "react-query";
import take from "lodash/take";
import { getPersonalizedList } from "../../service";
import { music, play, playHover } from "../../constants/svg";
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
                  <img className="view-icon" src={music} alt="" />
                  <span className="count">
                    {numberFormatter(hotRecommend.playCount)}
                  </span>
                </div>
                <div className="play-btn-container">
                  <img className="play-btn" src={play} alt="" />
                  <img className="play-btn active" src={playHover} alt="" />
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
