import React from "react";
import ContentLoader from "react-content-loader";

function BannerContentLoader() {
  return (
    <ContentLoader
      backgroundColor="#999"
      speed={2}
      width={1920}
      height={285}
      viewBox="0 0 1920 285"
    >
      <rect x="470" y="0" rx="0" ry="0" width="982" height="285" />
    </ContentLoader>
  );
}

export default BannerContentLoader;
