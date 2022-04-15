import React from "react";
import { Banner } from "../../components";
import { HotPlaylist } from "../../container";
export default function Home() {
  return (
    <div className="home-container">
      <Banner></Banner>
      <HotPlaylist></HotPlaylist>
    </div>
  );
}
