import { get, times } from "lodash";
import React, { CSSProperties, useState } from "react";
import { useQuery } from "react-query";
import { useInterval } from "react-use";
import { getBannerData } from "../../service";
import BannerContentLoader from "../my_content_loader/BannerContentLoader";
import "./index.scss";

function Banner() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [delay, setDelay] = useState<number | null>(5000);

  const { data, isFetching } = useQuery("bannerList", getBannerData);
  const bannersLength: number = get(data, `banners.length`) || 0;
  const activeImageUrl = get(data, `banners.${activeIndex}.imageUrl`);
  const style: CSSProperties = {
    backgroundImage: `url(${activeImageUrl})`,
  };

  useInterval(() => {
    carouselChangeHandler(activeIndex + 1);
  }, delay);

  const carouselChangeHandler = (newActiveIndex: number) => {
    if (newActiveIndex < 0) {
      setActiveIndex(bannersLength - 1);
    } else if (newActiveIndex > bannersLength - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex(newActiveIndex);
    }
  };

  const carouselMouseOverHandler = () => {
    setDelay(null);
  };
  const carouselMouseOutHandler = () => {
    setDelay(3000);
  };

  return isFetching ? (
    <BannerContentLoader></BannerContentLoader>
  ) : (
    <div className="banner-container">
      <div className="filter-bg-image" style={style}></div>
      <div className="banner-download-wrapper">
        <div className="banner-image-list-container">
          <ul
            className="banner-list"
            onMouseOver={carouselMouseOverHandler}
            onMouseOut={carouselMouseOutHandler}
          >
            {data?.banners.map((banner, index) => {
              return (
                <li
                  className="banner-image"
                  key={index}
                  style={{
                    backgroundImage: `url(${banner.imageUrl})`,
                    transform: `translateX(${(index - activeIndex) * 100}%)`,
                  }}
                ></li>
              );
            })}
          </ul>
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
            <div
              className="arr arr-left"
              onClick={() => carouselChangeHandler(activeIndex - 1)}
            ></div>
          )}
          {activeIndex < bannersLength - 1 && (
            <div
              className="arr arr-right"
              onClick={() => carouselChangeHandler(activeIndex + 1)}
            ></div>
          )}
        </div>
      </div>
      <div className="mask"></div>
    </div>
  );
}

export default Banner;
