import { get } from "lodash";
import React, { useContext } from "react";
import { useQuery } from "react-query";
import { Link, useSearchParams } from "react-router-dom";
import { TracksContext } from "../../context";
import { useActionTracks } from "../../hooks/useActionTracks";
import { useArtistTopSongsUrl } from "../../hooks/useArtistTopSongsUrl";
import { getArtistTopSongById } from "../../service";
import { timeFormatter } from "../../utils";
import { linkToAlbumDetailPage, linkToSongDetailPage } from "../../utils/link";
import "./index.scss";

function ArtistTopSong() {
  const tracksContext = useContext(TracksContext);
  const [searchParams] = useSearchParams();
  const id = Number(searchParams.get("id"));
  const { data } = useQuery(["artist_top_song", id], () =>
    getArtistTopSongById(id)
  );

  const { getSongsUrls } = useArtistTopSongsUrl();
  const { addSongToTracks, appendSongListToTracks } = useActionTracks();

  return (
    <div className="artist-top-song-container">
      <div className="btn-field">
        <div className="play-btn-container">
          <div className="play-btn" onClick={() => getSongsUrls(id)}>
            <div className="play-icon">
              <div className="play"></div>
              播放
            </div>
          </div>
          <div
            className="add-btn"
            onClick={() => appendSongListToTracks(data?.songs)}
          ></div>
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
                    {(get(track, "alia") || []).length > 0 && (
                      <span className="tns">
                        &nbsp;-&nbsp; ({`${get(track, "alia") || [].join(",")}`}
                        )
                      </span>
                    )}
                  </div>
                </div>
                <div className="duration">{timeFormatter(track.dt)}</div>
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
    </div>
  );
}

export default ArtistTopSong;
