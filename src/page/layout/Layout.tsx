import React, { useMemo } from "react";
import PageHeader from "../../components/header/PageHeader";
import { Outlet, useLocation } from "react-router-dom";
import "./index.scss";
import MusicPlayer from "../../components/music_player/MusicPlayer";
import { Login, PageFooter } from "../../components";

export default function PageLayout() {
  const location = useLocation();

  const musicPlayerVisible = useMemo(() => {
    return location.pathname !== "/mv-detail";
  }, [location.pathname]);

  return (
    <div className="container">
      <div className="page-header-cointainer">
        <PageHeader></PageHeader>
      </div>
      <div className="aside-content-container">
        <div className="page-content-container">
          <Outlet></Outlet>
        </div>
      </div>
      <div className="page-footer-container">
        <PageFooter></PageFooter>
      </div>
      <div className="login-section">
        <Login></Login>
      </div>
      {musicPlayerVisible && (
        <div className="music-player-section">
          <MusicPlayer></MusicPlayer>
        </div>
      )}
    </div>
  );
}
