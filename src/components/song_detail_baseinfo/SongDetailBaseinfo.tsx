import React from "react";
import { Link } from "react-router-dom";
import { ILyricUser, ISong, ITrack } from "../../constants/type";
import { useActionTracks } from "../../hooks/useActionTracks";
import { numberFormatter } from "../../utils";
import {
  linkToAlbumDetailPage,
  linkToArtistDetailPage,
  linkToUserHomePage,
} from "../../utils/link";
import "./index.scss";

type SongDetailBaseinfoPropsType = {
  song: ISong | undefined;
  lyricText: string | undefined;
  transUser: ILyricUser | undefined;
  lyricUser: ILyricUser | undefined;
  commentsCount: number;
};

function SongDetailBaseinfo(props: SongDetailBaseinfoPropsType) {
  const { addSongToTracks, appendSongListToTracks } = useActionTracks();
  console.log(props);
  return (
    <div className="song-detail-baseinfo-container">
      <div className="left-img">
        <div className="playlist-img">
          <div
            className="img"
            style={{ backgroundImage: `url(${props.song?.al.picUrl})` }}
          ></div>
          <div className="mask"></div>
        </div>
      </div>
      <div className="info-field">
        <div className="title">
          <div className="icon"></div>
          <div className="text">{props.song?.name}</div>
        </div>
        <div className="creator">
          <div className="label">歌手：</div>
          <div
            className="songers"
            title={props.song?.ar.map((ar: any) => ar.name).join("/")}
          >
            {props.song?.ar.map((ar: any, _index: number) => (
              <span key={`${ar}_${_index}`}>
                <Link to={linkToArtistDetailPage(ar.id)}>{ar.name}</Link>
              </span>
            ))}
          </div>
        </div>
        <div className="album">
          <div className="label">所属专辑：</div>
          <div className="text text-decoration">
            <Link to={linkToAlbumDetailPage(props.song?.al.id)}>
              {props.song?.al.name}
            </Link>
          </div>
        </div>
        <div className="btn-field">
          <div className="play-btn-container">
            <div
              className="play-btn"
              onClick={() => addSongToTracks(props.song)}
            >
              <div className="play-icon">
                <div className="play"></div>
                播放
              </div>
            </div>
            <div
              className="add-btn"
              onClick={() => appendSongListToTracks([props?.song as ITrack])}
            ></div>
          </div>
          <div className="store-btn">
            <i>收藏</i>
          </div>
          <div className="share-btn">
            <i>分享</i>
          </div>
          <div className="download-btn">
            <i>下载</i>
          </div>
          <div className="comments-btn">
            <i>({numberFormatter(props.commentsCount)})</i>
          </div>
        </div>
        <p className="lyric-text">{props.lyricText}</p>
        <p className="lyric-user">
          {props.lyricUser?.userid && (
            <span>
              贡献滚动歌词：
              <Link to={linkToUserHomePage(props.lyricUser?.userid)}>
                {props.lyricUser?.nickname}
              </Link>
            </span>
          )}
          &nbsp;&nbsp;
          {props.transUser?.userid && (
            <span>
              贡献翻译：
              <Link to={linkToUserHomePage(props.transUser?.userid)}>
                {props.transUser?.nickname}
              </Link>
            </span>
          )}
        </p>
      </div>
    </div>
  );
}

export default SongDetailBaseinfo;
