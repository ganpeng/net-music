import { get } from "lodash";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IPlayListDetail } from "../../constants/type";
import { TracksContext } from "../../context";
import { useActionTracks } from "../../hooks/useActionTracks";
import { timeFormatter } from "../../utils";
import {
  linkToArtistDetailPage,
  linkToMvDetailPage,
  linkToSongDetailPage,
} from "../../utils/link";
import "./index.scss";

type SonglistPropsType = {
  topItem: IPlayListDetail | undefined;
};

function Songlist(props: SonglistPropsType) {
  const tracksContext = useContext(TracksContext);
  const { addSongToTracks } = useActionTracks();
  return (
    <div className="songlist-container">
      <div className="songlist-header">
        <div className="header-left">
          <div className="title">歌曲列表</div>
          <div className="song-num">{props.topItem?.trackCount}首歌</div>
        </div>
        <div className="header-right">
          <div className="play-count-label">播放:</div>
          <div className="play-count">{props.topItem?.playCount}</div>
          <div className="unit">次</div>
        </div>
      </div>
      <ul className="songlist">
        <li className="song-item header">
          <div className="index"></div>
          <div className="title">
            <div className="text">标题</div>
          </div>
          <div className="duration">
            <div className="text">时长</div>
          </div>
          <div className="songers">
            <div className="text">歌手</div>
          </div>
        </li>
        {props?.topItem?.tracks.map((track, index) => {
          return (
            <li className="song-item" key={track.id}>
              <div className="song-index">{index + 1}</div>
              <div className="title">
                {index <= 2 && (
                  <div
                    className="img"
                    style={{ backgroundImage: `url(${track.al.picUrl})` }}
                  >
                    <Link
                      className="text-a"
                      to={linkToSongDetailPage(track.id)}
                    ></Link>
                  </div>
                )}
                <div
                  className={`play-icon ${
                    tracksContext?.currentTrack?.id === track.id
                      ? "is-playing"
                      : ""
                  }`}
                  onClick={() => addSongToTracks(track)}
                ></div>
                <div className="song-name" title={track.name}>
                  <span className="name text-decoration">
                    <Link to={linkToSongDetailPage(track.id)}>
                      {track.name}
                    </Link>
                  </span>
                  {(get(track, "tns") || []).length > 0 && (
                    <span className="tns">
                      &nbsp;-&nbsp; ({`${get(track, "tns") || [].join(",")}`})
                    </span>
                  )}
                  {(get(track, "alia") || []).length > 0 && (
                    <span className="tns">
                      &nbsp;-&nbsp; ({`${get(track, "alia") || [].join(",")}`})
                    </span>
                  )}
                </div>
                {track.mv !== 0 && (
                  <div className="mv-icon">
                    <Link
                      className="block-a"
                      to={linkToMvDetailPage(track.mv)}
                    ></Link>
                  </div>
                )}
              </div>
              <div className="duration">{timeFormatter(track.dt)}</div>
              <div
                className="songers"
                title={track.ar.map((ar: any) => ar.name).join("/")}
              >
                {track.ar.map((ar: any, _index: number) => (
                  <span key={`${ar}_${_index}`}>
                    <Link to={linkToArtistDetailPage(ar.id)}>{ar.name}</Link>
                  </span>
                ))}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Songlist;
