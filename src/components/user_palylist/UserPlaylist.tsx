import React from "react";
import { Link } from "react-router-dom";
import { IPlaylist } from "../../constants/type";
import { numberFormatter } from "../../utils";
import { linkToPlaylistDetailPage } from "../../utils/link";
import SectionHeader from "../section_header/SectionHeader";
import "./index.scss";

type UserPlaylistPropsType = {
  title: string;
  playlist: IPlaylist[];
};

function UserPlaylist(props: UserPlaylistPropsType) {
  return (
    <div className="user-playlist-container">
      <SectionHeader
        title={props.title}
        hasTitleIcon={false}
        moreLink=""
      ></SectionHeader>
      <ul className="playlist">
        {props.playlist.map((playItem) => {
          return (
            <div className="playlist-item" key={playItem.id}>
              <div className="image-field">
                <div
                  className="img"
                  style={{
                    backgroundImage: `url(${playItem.coverImgUrl})`,
                  }}
                >
                  <Link to={linkToPlaylistDetailPage(playItem.id)}></Link>
                </div>
                <div className="meta-info">
                  <div className="view-count">
                    <div className="view-icon"></div>
                    <span className="count">
                      {numberFormatter(playItem.playCount)}
                    </span>
                  </div>
                  <div className="play-btn-container">
                    <div className="play-btn"></div>
                  </div>
                </div>
              </div>
              <p className="name">
                <Link to={linkToPlaylistDetailPage(playItem.id)}>
                  {playItem.name}
                </Link>
              </p>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default UserPlaylist;
