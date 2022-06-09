import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IPlayListDetail } from "../../constants/type";
import { TracksContext } from "../../context";
import { timeFormatter } from "../../utils";
import {
  linkToAlbumDetailPage,
  linkToArtistDetailPage,
  linkToSongDetailPage,
} from "../../utils/link";
import "./index.scss";

type PlaylistSongsPropsType = {
  topItem: IPlayListDetail | undefined;
};

function PlaylistSongs(props: PlaylistSongsPropsType) {
  const tracksContext = useContext(TracksContext);
  return (
    <div className="playlist-songs-container">
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
          <div className="al-name">
            <div className="text">专辑</div>
          </div>
        </li>
        {props?.topItem?.tracks.map((track, index) => {
          return (
            <li className="song-item" key={track.id}>
              <div className="song-index">{index + 1}</div>
              <div className="title">
                <div
                  className={`play-icon ${
                    tracksContext?.currentTrack?.id === track.id
                      ? "is-playing"
                      : ""
                  }`}
                ></div>
                <div className="song-name">
                  <Link to={linkToSongDetailPage(track.id)}>{track.name}</Link>
                </div>
              </div>
              <div className="duration">{timeFormatter(track.dt)}</div>
              <div
                className="songers"
                title={track.ar?.map((ar: any) => ar.name).join("/")}
              >
                {track.ar?.map((ar: any, _index: number) => (
                  <span key={`${ar}_${_index}`}>
                    <Link to={linkToArtistDetailPage(ar.id)}>{ar.name}</Link>
                  </span>
                ))}
              </div>
              <div className="al-name text-decoration" title={track.al.name}>
                <Link to={linkToAlbumDetailPage(track.al.id)}>
                  {track.al.name}
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default PlaylistSongs;
