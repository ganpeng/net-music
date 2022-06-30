import React, { useMemo } from "react";
import "./index.scss";

type SliderPropType = {
  current: number;
  total: number;
  direction?: string;
  sliderChangeHandler: (e: any) => void;
};

function VideoSlider(prop: SliderPropType) {
  const { current, total, sliderChangeHandler } = prop;

  const value = useMemo(() => {
    if (total === 0) {
      return 0;
    } else {
      return (current / total) * 100;
    }
  }, [current, total]);

  return (
    <div className="video-slider-container">
      <input
        type="range"
        name=""
        id=""
        value={value}
        onInput={(e) => sliderChangeHandler(e)}
      />
      <div className="total-bar"></div>
      <div
        className="current-bar"
        style={{ width: `${(current * 100) / total}%` }}
      ></div>
    </div>
  );
}

export default VideoSlider;
