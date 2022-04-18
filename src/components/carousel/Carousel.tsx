import React, { useState } from "react";
import times from "lodash/times";
import "./index.scss";
import useInterval from "react-use/lib/useInterval";

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [delay, setDelay] = useState<number | null>(3000);

  useInterval(() => {
    carouselChangeHandler(activeIndex + 1);
  }, delay);

  const carouselChangeHandler = (newActiveIndex: number) => {
    if (newActiveIndex < 0) {
      setActiveIndex(4);
    } else if (newActiveIndex > 4) {
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

  return (
    <div
      className="carousel-container"
      onMouseOver={carouselMouseOverHandler}
      onMouseOut={carouselMouseOutHandler}
    >
      <div
        className="prev-btn"
        onClick={() => carouselChangeHandler(activeIndex - 1)}
      >
        向左
      </div>
      <div className="carousel">
        {times(5, (index) => {
          return (
            <div
              className="carousel-item"
              key={index}
              style={{
                transform: `translateX(${(index - activeIndex) * 100}%)`,
              }}
            >
              {index}
            </div>
          );
        })}
      </div>
      <div
        className="next-btn"
        onClick={() => carouselChangeHandler(activeIndex + 1)}
      >
        向右
      </div>
    </div>
  );
}

export default Carousel;
