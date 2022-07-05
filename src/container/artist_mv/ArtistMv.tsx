import React from "react";
import { useQuery } from "react-query";
import { Link, useSearchParams } from "react-router-dom";
import { NoData } from "../../components";
import { getArtistMvById } from "../../service";
import { linkToMvDetailPage } from "../../utils/link";
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
      {artistMvData?.mvs.length === 0 ? (
        <NoData text="暂无MV"></NoData>
      ) : (
        <ul className="mv-list">
          {artistMvData?.mvs.map((mv) => {
            return (
              <li className="mv-item" key={mv.id}>
                <div
                  className="img"
                  style={{ backgroundImage: `url(${mv.imgurl})` }}
                >
                  <Link className="block-a" to={linkToMvDetailPage(mv.id)}>
                    <div className="blur-pic"></div>
                    <div className="play-btn"></div>
                  </Link>
                </div>
                <div className="name text-decoration">
                  <Link to={linkToMvDetailPage(mv.id)}>{mv.name}</Link>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default ArtistMv;
