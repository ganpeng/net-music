import { take } from "lodash";
import React from "react";
import { useQuery } from "react-query";
import { getTopArtists } from "../../service";
import "./index.scss";

function Top5Artists() {
  const { data } = useQuery("artists", getTopArtists);
  return (
    <div className="top5-artists-container">
      <div className="title-field">
        <div className="title">入驻歌手</div>
        <div className="check-total">查看全部&#62;</div>
      </div>
      <div className="top-artist-list">
        {take(data?.artists, 5).map((artist) => {
          return (
            <div className="top-artist-item" key={artist.id}>
              <div
                className="pic"
                style={{ backgroundImage: `url(${artist.picUrl})` }}
              ></div>
              <p className="name">{artist.name}</p>
            </div>
          );
        })}
      </div>
      <div className="artist-regist-btn">申请成为音乐人</div>
    </div>
  );
}

export default Top5Artists;
