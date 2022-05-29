import React from "react";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import { getArtistMvById } from "../../service";
import "./index.scss";

function ArtistMv() {
  const [searchParams] = useSearchParams();
  const id = Number(searchParams.get("id"));
  const { data: artistMvData } = useQuery(["artist_mv", id], () =>
    getArtistMvById(id)
  );
  console.log(artistMvData);
  return (
    <div className="artist-mv-container">
      <ul className="mv-list">
        {artistMvData?.mvs.map((mv) => {
          return (
            <li className="mv-item" key={mv.id}>
              <div
                className="img"
                style={{ backgroundImage: `url(${mv.imgurl})` }}
              >
                <div className="blur-pic"></div>
                <div className="play-btn"></div>
              </div>
              <div className="name text-decoration">{mv.name}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ArtistMv;
