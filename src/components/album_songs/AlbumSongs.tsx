import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ISong } from "../../constants/type";
import { TracksContext } from "../../context";
import { useActionTracks } from "../../hooks/useActionTracks";
import { timeFormatter } from "../../utils";
import { linkToArtistDetailPage, linkToSongDetailPage } from "../../utils/link";
import "./index.scss";

type AlbumSongsPropsType = {
  count: number;
  songs: ISong[];
};

function AlbumSongs(props: AlbumSongsPropsType) {
  const tracksContext = useContext(TracksContext);
  const { addSongToTracks } = useActionTracks();
  return (
    <div className="album-songs-container">
      <div className="songlist-header">
        <div className="header-left">
          <div className="title">包含歌曲列表</div>
          <div className="song-num">{props.count}首歌</div>
        </div>
        <div className="header-right"></div>
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
        {props?.songs?.map((track, index) => {
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
                  onClick={() => addSongToTracks(track)}
                ></div>
                <div className="song-name" title={track.name}>
                  <Link to={linkToSongDetailPage(track.id)}>{track.name}</Link>
                </div>
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

export default AlbumSongs;
