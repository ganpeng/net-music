import { get, times } from "lodash";
import React, { CSSProperties, useState } from "react";
import { useQuery } from "react-query";
import { getBannerData } from "../../service";
import "./index.scss";

export default function Banner() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { isError, isLoading, data } = useQuery("bannerList", getBannerData);
  if (isError) {
    return <h2>error</h2>;
  }
  if (isLoading) {
    return <h2>isLoading</h2>;
  }
  const activeImageurl = get(data, `banners.${activeIndex}.imageUrl`);
  const bannersLength: number = get(data, `banners.length`) || 0;
  const style: CSSProperties = {
    backgroundImage: `url(${activeImageurl})`,
  };

  const prevHandler = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    } else {
      setActiveIndex(bannersLength - 1);
    }
  };
  const nextHandler = () => {
    if (activeIndex < bannersLength - 1) {
      setActiveIndex(activeIndex + 1);
    } else {
      setActiveIndex(0);
    }
  };

  return (
    <div className="banner-container">
      <div className="filter-bg-image" style={style}></div>
      <div className="banner-download-wrapper">
        <div className="banner-image-list-container">
          <div className="banner-image" style={style}></div>
          <ul className="pagination-list">
            {times(bannersLength, (index) => {
              return (
                <li
                  className={`pagination-item ${
                    activeIndex === index ? "active" : ""
                  }`}
                  key={index}
                  onClick={() => setActiveIndex(index)}
                ></li>
              );
            })}
          </ul>
        </div>
        <div className="download-client-container"></div>
        <div className="banner-btn-container">
          {activeIndex > 0 && (
            <div className="arr arr-left" onClick={() => prevHandler()}></div>
          )}
          {activeIndex < bannersLength - 1 && (
            <div className="arr arr-right" onClick={() => nextHandler()}></div>
          )}
        </div>
      </div>
      <div className="mask"></div>
    </div>
  );
}
