import React from "react";
import "./index.scss";
import { Banner } from "../../components";
import { HotPlaylist, TopAlbum } from "../../container";

export default function Home() {
  return (
    <div className="home-container">
      <Banner></Banner>
      <div className="home-content">
        <div className="left-content">
          <HotPlaylist></HotPlaylist>
          <TopAlbum></TopAlbum>
        </div>
        <div className="right-content"></div>
      </div>
    </div>
  );
}
