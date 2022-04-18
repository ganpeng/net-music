import React from "react";
import "./index.scss";
import { Banner, Carousel } from "../../components";
import { HotPlaylist } from "../../container";

export default function Home() {
  return (
    <div className="home-container">
      <Banner></Banner>
      <div className="home-content">
        <div className="left-content">
          <HotPlaylist></HotPlaylist>
          <Carousel></Carousel>
        </div>
        <div className="right-content"></div>
      </div>
    </div>
  );
}
