import React from "react";
import "./index.scss";

function MyMusicAuthed() {
  return (
    <div className="my-music-authed-container content-w content-h">
      <div className="left-side-field">
        <ul className="menu-list">
          <li className="menu-item">我的视频</li>
          <li className="menu-item">我的电台</li>
          <li className="menu-item">创建的歌单(11)</li>
          <li className="menu-item">收藏的歌单(9)</li>
        </ul>
      </div>
      <div className="right-content-field"></div>
    </div>
  );
}

export default MyMusicAuthed;
