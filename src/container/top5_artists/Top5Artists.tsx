import { take } from "lodash";
import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { getTopArtists } from "../../service";
import { linkToArtistDetailPage, linkToArtistListPage } from "../../utils/link";
import "./index.scss";

function Top5Artists() {
  const { data } = useQuery("artists", getTopArtists);
  return (
    <div className="top5-artists-container">
      <div className="title-field">
        <div className="title">入驻歌手</div>
        <div className="check-total">
          <Link to={linkToArtistListPage()}>查看全部&#62;</Link>
        </div>
      </div>
      <div className="top-artist-list">
        {take(data?.artists, 5).map((artist) => {
          return (
            <div className="top-artist-item" key={artist.id}>
              <div
                className="img"
                style={{ backgroundImage: `url(${artist.picUrl})` }}
              >
                <Link to={linkToArtistDetailPage(artist.id)}></Link>
              </div>
              <p className="name text-decoration">
                <Link to={linkToArtistDetailPage(artist.id)}>
                  {artist.name}
                </Link>
              </p>
            </div>
          );
        })}
      </div>
      <div className="artist-regist-btn">申请成为音乐人</div>
    </div>
  );
}

export default Top5Artists;
