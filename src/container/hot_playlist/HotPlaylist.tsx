import React from "react";
import {
  SectionHeader,
  HotPlaylistCategory,
  HotRecommend,
} from "../../components";
function HotPlaylist() {
  return (
    <div className="hot-playlist-container">
      <SectionHeader title="热门推荐">
        <HotPlaylistCategory></HotPlaylistCategory>
      </SectionHeader>
      <HotRecommend></HotRecommend>
    </div>
  );
}

export default HotPlaylist;
