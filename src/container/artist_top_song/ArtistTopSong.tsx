import { get } from "lodash";
import React from "react";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import { getArtistTopSongById } from "../../service";
import { timeFormatter } from "../../utils";
import "./index.scss";

function ArtistTopSong() {
  const [searchParams] = useSearchParams();
  const id = Number(searchParams.get("id"));
  const { data } = useQuery(["artist_top_song", id], () =>
    getArtistTopSongById(id)
  );
  console.log(data);
  return (
    <div className="artist-top-song-container">
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
          <i>收藏热门50</i>
        </div>
      </div>
      <div className="playlist-songs-container">
        <ul className="songlist">
          {data?.songs.map((track, index) => {
            return (
              <li className="song-item" key={track.id}>
                <div className="song-index">{index + 1}</div>
                <div className="title">
                  <div className="play-icon"></div>
                  <div className="song-name">
                    {track.name}{" "}
                    {get(track, "tns") || [].length > 0
                      ? `(${get(track, "tns") || [].join(",")})`
                      : ""}
                  </div>
                </div>
                <div className="duration">{timeFormatter(track.dt)}</div>
                <div className="al-name text-decoration" title={track.al.name}>
                  {track.al.name}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ArtistTopSong;
