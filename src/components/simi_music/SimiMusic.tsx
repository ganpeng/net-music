import React from "react";
import { useQuery } from "react-query";
import { Link, useSearchParams } from "react-router-dom";
import { ISong } from "../../constants/type";
import { getSimiMusicById } from "../../service";
import { linkToArtistDetailPage, linkToSongDetailPage } from "../../utils/link";
import "./index.scss";

function SimiMusic() {
  const [searchParams] = useSearchParams();
  const id = Number(searchParams.get("id"));
  const { data: simiMusicData } = useQuery(["simi-music", id], () =>
    getSimiMusicById(id)
  );
  console.log(simiMusicData);
  return (
    <div className="simi_music-container">
      <ul className="simi-music-list">
        {simiMusicData?.songs.map((song: ISong) => {
          return (
            <li className="simi-music-item" key={song.id}>
              <div className="left-info">
                <p className="name text-decoration">
                  <Link to={linkToSongDetailPage(song.id)}>{song.name}</Link>
                </p>
                <div
                  className="songers"
                  title={song.artists.map((ar: any) => ar.name).join("/")}
                >
                  {song.artists.map((ar: any, _index: number) => (
                    <span key={`${ar}_${_index}`}>
                      <Link to={linkToArtistDetailPage(ar.id)}>{ar.name}</Link>
                    </span>
                  ))}
                </div>
              </div>
              <div className="right-btn">
                <div className="play-btn"></div>
                <div className="add-btn"></div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SimiMusic;