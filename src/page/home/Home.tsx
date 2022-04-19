import React from "react";
import "./index.scss";
import { Banner } from "../../components";
import { BoardList, HotPlaylist, TopAlbum } from "../../container";
import Top5Artists from "../../container/top5_artists/Top5Artists";
import Top5Dj from "../../container/top5_dj/Top5Dj";

export default function Home() {
  return (
    <div className="home-container">
      <Banner></Banner>
      <div className="home-content">
        <div className="left-content">
          <HotPlaylist></HotPlaylist>
          <TopAlbum></TopAlbum>
          <BoardList></BoardList>
        </div>
        <div className="right-content">
          <Top5Artists></Top5Artists>
          <Top5Dj></Top5Dj>
        </div>
      </div>
    </div>
  );
}
