import React from "react";
import { Link } from "react-router-dom";
import { IPlayListDetail } from "../../constants/type";
import { useGetPlaylistTrackSongsUrl } from "../../hooks/useGetPlaylistTrackSongsUrl";
import { dateFormatter, numberFormatter } from "../../utils";
import { linkToUserHomePage } from "../../utils/link";
import "./index.scss";

type PlaylistBaseinfoPropsType = {
  playlistBaseinfo: IPlayListDetail | undefined;
};

function PlaylistBaseinfo(props: PlaylistBaseinfoPropsType) {
  const { playlistBaseinfo } = props;
  const { getSongsUrls } = useGetPlaylistTrackSongsUrl();
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
            >
              <Link
                className="block-a"
                to={linkToUserHomePage(playlistBaseinfo?.creator?.userId)}
              ></Link>
            </div>
            <div className="name text-decoration">
              <Link to={linkToUserHomePage(playlistBaseinfo?.creator?.userId)}>
                {playlistBaseinfo?.creator.nickname}
              </Link>
            </div>
          </div>
          <div className="date">
            {dateFormatter(playlistBaseinfo?.createTime, "YYYY-MM-DD")}
            <span>创建</span>
          </div>
        </div>
        <div className="btn-field">
          <div className="play-btn-container">
            <div
              className="play-btn"
              onClick={() => getSongsUrls(playlistBaseinfo?.id)}
            >
              <div className="play-icon">
                <div className="play"></div>
                播放
              </div>
            </div>
            <div className="add-btn"></div>
          </div>
          <div className="store-btn">
            <i>({numberFormatter(playlistBaseinfo?.subscribedCount || 0)})</i>
          </div>
          <div className="share-btn">
            <i>({numberFormatter(playlistBaseinfo?.shareCount || 0)})</i>
          </div>
          <div className="download-btn">
            <i>下载</i>
          </div>
          <div className="comments-btn">
            <i>({numberFormatter(playlistBaseinfo?.commentCount || 0)})</i>
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
