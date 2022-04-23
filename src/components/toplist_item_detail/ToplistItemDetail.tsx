import React from "react";
import { IPlayListDetail } from "../../constants/type";
import { getMonthDay } from "../../utils";
import "./index.scss";

type ToplistItemDetailPropsType = {
  topItem: IPlayListDetail | undefined;
};

function ToplistItemDetail(props: ToplistItemDetailPropsType) {
  return (
    <div className="toplist-item-detail-container">
      <div className="left-img">
        <div
          className="img"
          style={{ backgroundImage: `url(${props.topItem?.coverImgUrl})` }}
        ></div>
        <div className="mask"></div>
      </div>
      <div className="right-info">
        <p className="name">{props.topItem?.name}</p>
        <div className="update-field">
          <div className="update-title">
            <i className="update-icon"></i>
            最近更新:
          </div>
          <div className="update-date">
            {getMonthDay(props.topItem?.updateTime || new Date().getTime())}
          </div>
          <div className="update-frequency">
            ({props.topItem?.updateFrequency})
          </div>
        </div>
        <div className="btn-field">
          <div className="play-btn-container">
            <div className="play-btn">
              <div className="play-icon">
                <div className="play"></div>
                播放
              </div>
            </div>
            <div className="add-btn"></div>
          </div>
          <div className="store-btn">
            <i>({props.topItem?.subscribedCount})</i>
          </div>
          <div className="share-btn">
            <i>({props.topItem?.shareCount})</i>
          </div>
          <div className="download-btn">
            <i>下载</i>
          </div>
          <div className="comments-btn">
            <i>({props.topItem?.commentCount})</i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToplistItemDetail;
