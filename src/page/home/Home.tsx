import React from "react";
import "./index.scss";
import { Banner } from "../../components";
import {
  BoardList,
  HotPlaylist,
  Top5Artists,
  Top5Dj,
  TopAlbum,
} from "../../container";

export default function Home() {
  return (
    <div className="home-container">
      <Banner></Banner>
      <div className="home-content content-w">
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
