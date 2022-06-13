import React, { useContext } from "react";
import "./index.scss";
import { Banner, HomeLogin, HomeUserinfo } from "../../components";
import {
  BoardList,
  HotPlaylist,
  Top5Artists,
  Top5Dj,
  TopAlbum,
} from "../../container";
import { TracksContext } from "../../context";

export default function Home() {
  const tracksContext = useContext(TracksContext);
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
          {tracksContext?.cookie ? (
            <HomeUserinfo></HomeUserinfo>
          ) : (
            <HomeLogin></HomeLogin>
          )}
          <div className="right-pd-content">
            <Top5Artists></Top5Artists>
            <Top5Dj></Top5Dj>
          </div>
        </div>
      </div>
    </div>
  );
}
