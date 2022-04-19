import { take } from "lodash";
import React from "react";
import { useQuery } from "react-query";
import { getHotDjList } from "../../service";
import "./index.scss";

function Top5Dj() {
  const { data } = useQuery("djs", getHotDjList);
  console.log(data);
  return (
    <div className="top5-dj-container">
      <div className="title-field">
        <div className="title">热门主播</div>
      </div>
      <div className="top-artist-list">
        {take(data?.data?.list, 5).map((artist) => {
          return (
            <div className="top-artist-item" key={artist.id}>
              <div
                className="pic"
                style={{ backgroundImage: `url(${artist.avatarUrl})` }}
              ></div>
              <p className="name">{artist.nickName}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Top5Dj;
