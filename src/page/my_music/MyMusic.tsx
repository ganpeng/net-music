import React from "react";
import { MyMusicNoAuth } from "../../components";
import "./index.scss";

function MyMusic() {
  return (
    <div className="my-music-container content-w content-h">
      <MyMusicNoAuth></MyMusicNoAuth>
    </div>
  );
}

export default MyMusic;
