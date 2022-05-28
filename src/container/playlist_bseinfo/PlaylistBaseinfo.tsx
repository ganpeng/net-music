import React from "react";
import { IPlayListDetail } from "../../constants/type";
import { dateFormatter } from "../../utils";
import "./index.scss";

type PlaylistBaseinfoPropsType = {
  playlistBaseinfo: IPlayListDetail | undefined;
};

function PlaylistBaseinfo(props: PlaylistBaseinfoPropsType) {
  const { playlistBaseinfo } = props;
  return (
    <div className="playlist-baseinfo-container">
      <div className="playlist-img">
        <div
          className="img"
          style={{ backgroundImage: `url(${playlistBaseinfo?.coverImgUrl})` }}
        ></div>
        <div className="mask"></div>
      </div>
      <div className="info-field">
        <div className="title">
          <div className="icon"></div>
          <div className="text">{playlistBaseinfo?.name}</div>
        </div>
        <div className="creator-date">
          <div className="creator">
            <div
              className="avatar"
              style={{
                backgroundImage: `url(${playlistBaseinfo?.creator.avatarUrl})`,
              }}
            ></div>
            <div className="name text-decoration">
              {playlistBaseinfo?.creator.nickname}
            </div>
          </div>
          <div className="date">
            {dateFormatter(playlistBaseinfo?.createTime, "YYYY-MM-DD")}
            <span>创建</span>
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
            <i>({playlistBaseinfo?.subscribedCount})</i>
          </div>
          <div className="share-btn">
            <i>({playlistBaseinfo?.shareCount})</i>
          </div>
          <div className="download-btn">
            <i>下载</i>
          </div>
          <div className="comments-btn">
            <i>({playlistBaseinfo?.commentCount})</i>
          </div>
        </div>
        <div className="tags-container">
          <div className="label">标签: </div>
          <div className="tag-list">
            {playlistBaseinfo?.tags.map((tag: string, index: number) => (
              <div className="tag-item" key={index}>
                <span>{tag}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="description">
          <div className="label">介绍: </div>
          <div className="text">{playlistBaseinfo?.description}</div>
        </div>
      </div>
    </div>
  );
}

export default PlaylistBaseinfo;
