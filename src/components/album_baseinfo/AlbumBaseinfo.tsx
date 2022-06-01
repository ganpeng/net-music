import React from "react";
import { Link } from "react-router-dom";
import { IAlbum } from "../../constants/type";
import { dateFormatter, numberFormatter } from "../../utils";
import { linkToArtistDetailPage } from "../../utils/link";
import "./index.scss";

type AlbumBaseinfoPropsType = {
  album: IAlbum | undefined;
};

function AlbumBaseinfo(props: AlbumBaseinfoPropsType) {
  const { album } = props;
  return (
    <div className="album-baseinfo-container">
      <div className="top-field">
        <div className="playlist-img">
          <div
            className="img"
            style={{ backgroundImage: `url(${album?.blurPicUrl})` }}
          ></div>
          <div className="mask"></div>
        </div>
        <div className="info-field">
          <div className="title">
            <div className="icon"></div>
            <div className="text">{album?.name}</div>
          </div>
          <div className="creator">
            <div className="label">歌手：</div>
            <div className="text text-decoration">
              {album?.artist.id && (
                <Link to={linkToArtistDetailPage(album?.artist.id)}>
                  {album?.artist.name}
                </Link>
              )}
            </div>
          </div>
          <div className="publish-date">
            <div className="label">发行时间：</div>
            <div className="text">
              {album?.publishTime
                ? dateFormatter(album?.publishTime, "YYYY-MM-DD")
                : ""}
            </div>
          </div>
          <div className="company">
            <div className="label">发行公司：</div>
            <div className="text">{album?.company}</div>
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
              <i>收藏</i>
            </div>
            <div className="share-btn">
              <i>({numberFormatter(album?.info.shareCount || 0)})</i>
            </div>
            <div className="download-btn">
              <i>下载</i>
            </div>
            <div className="comments-btn">
              <i>({numberFormatter(album?.info.commentCount || 0)})</i>
            </div>
          </div>
        </div>
      </div>
      <div className="description">
        <h3 className="label">专辑介绍: </h3>
        <div className="text">{album?.description}</div>
      </div>
    </div>
  );
}

export default AlbumBaseinfo;
