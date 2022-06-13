import { take } from "lodash";
import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { IDj } from "../../constants/type";
import { getHotDjList } from "../../service";
import { linkToUserHomePage } from "../../utils/link";
import "./index.scss";

function Top5Dj() {
  const { data } = useQuery("djs", getHotDjList);
  return (
    <div className="top5-dj-container">
      <div className="title-field">
        <div className="title">热门主播</div>
      </div>
      <div className="top-artist-list">
        {take(data?.data?.list, 5).map((artist: IDj) => {
          return (
            <div className="top-artist-item" key={artist.id}>
              <div
                className="pic"
                style={{ backgroundImage: `url(${artist.avatarUrl})` }}
              >
                <Link
                  className="block-a"
                  to={linkToUserHomePage(artist?.id)}
                ></Link>
              </div>
              <p className="name">
                <Link to={linkToUserHomePage(artist?.id)}>
                  {artist.nickName}
                </Link>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Top5Dj;
