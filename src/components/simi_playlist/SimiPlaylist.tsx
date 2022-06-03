import { take } from "lodash";
import React from "react";
import { useQuery } from "react-query";
import { Link, useSearchParams } from "react-router-dom";
import { IPlaylist } from "../../constants/type";
import { getSimiPlaylistById } from "../../service";
import { linkToPlaylistDetailPage, linkToUserHomePage } from "../../utils/link";
import "./index.scss";

function SimiPlaylist() {
  const [searchParams] = useSearchParams();
  const id = Number(searchParams.get("id"));
  const { data: simiPlaylistData } = useQuery(["simi-playlist", id], () =>
    getSimiPlaylistById(id)
  );
  console.log(simiPlaylistData);
  return (
    <div className="simi-playlist-container">
      <ul className="simi-playlist">
        {take(simiPlaylistData?.playlists, 3).map((item: IPlaylist) => {
          return (
            <li className="simi-playlist-item" key={item.id}>
              <Link to={linkToPlaylistDetailPage(item.id)}>
                <img src={item.coverImgUrl} alt="" />
              </Link>
              <div className="name-nickname">
                <div className="name text-decoration" title={item.name}>
                  <Link to={linkToPlaylistDetailPage(item.id)}>
                    {item.name}
                  </Link>
                </div>
                <div className="nickname">
                  <span>by</span>
                  <Link to={linkToUserHomePage(item.creator.userId)}>
                    {item.creator.nickname}
                  </Link>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SimiPlaylist;
