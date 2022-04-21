import React from "react";
import { IPlayListDetail } from "../../constants/type";
import "./index.scss";

type SonglistPropsType = {
  topItem: IPlayListDetail | undefined;
};

function Songlist(props: SonglistPropsType) {
  return (
    <div className="songlist-container">
      <div className="songlist-header">
        <div className="header-left">
          <div className="title">歌曲列表</div>
          <div className="song-num">{props.topItem?.trackCount}首歌</div>
        </div>
        <div className="header-right">
          <div className="play-count-label">播放:</div>
          <div className="play-count">{props.topItem?.playCount}</div>
          <div className="unit">次</div>
        </div>
      </div>
    </div>
  );
}

export default Songlist;
