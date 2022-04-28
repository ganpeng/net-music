import { debounce } from "lodash";
import React, { useContext, useEffect, useState } from "react";
import { TracksContext } from "../../context";
import "./index.scss";

function MusicPlayer() {
  const tracksContext = useContext(TracksContext);
  const [isVisible, setIsVisible] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  const toggleLocked = () => {
    setIsLocked((isLocked) => {
      return !isLocked;
    });
  };

  const mousemoveHandler = debounce((e: MouseEvent) => {
    if (isLocked) {
      return false;
    }
    const windowInnerHeight = window.innerHeight;
    if (windowInnerHeight - e.clientY <= 67) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }, 400);

  console.log(tracksContext?.tracks);

  useEffect(() => {
    document.addEventListener("mousemove", mousemoveHandler);
    return () => {
      document.removeEventListener("mousemove", mousemoveHandler);
    };
  }, [mousemoveHandler]);

  return (
    <div className={`music-player-container ${isVisible ? "is-visible" : ""}`}>
      <div className="updown">
        <div className="left-ud">
          <div
            className={`lock-btn ${isLocked ? "is-locked" : ""}`}
            onClick={toggleLocked}
          ></div>
        </div>
      </div>
      <div className="audio-container">
        <div className="play-prev-next-btn-container">
          <div className="prev-btn"></div>
          <div className="play-pause-btn"></div>
          <div className="next-btn"></div>
        </div>
        <audio src=""></audio>
      </div>
    </div>
  );
}

export default MusicPlayer;
