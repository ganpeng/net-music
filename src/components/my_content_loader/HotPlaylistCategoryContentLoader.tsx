import React from "react";
import ContentLoader from "react-content-loader";

function HotPlaylistCategoryContentLoader() {
  return (
    <ContentLoader speed={2} width={240} height={15} viewBox="0 0 240 15">
      <rect x="10" y="0" rx="0" ry="0" width="240" height="30" />
    </ContentLoader>
  );
}

export default HotPlaylistCategoryContentLoader;
