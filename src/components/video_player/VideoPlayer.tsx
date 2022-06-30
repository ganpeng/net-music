import React, { useEffect, useRef, useState } from "react";
import screenfull from "screenfull";
import { VideoSlider, VolumeSlider } from "..";
import { timeFormatter } from "../../utils";
import "./index.scss";
const url = require("../../assets/images/a.mp4");

function VideoPlayer() {
  // 视频播放相关
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volumVisible, setVolumVisible] = useState(false);
  const [volume, setVolume] = useState(0.2);
  const [isScreenfull, setIsScreenfull] = useState(false);

  // 播放器dom
  const player = useRef<HTMLVideoElement | null>(null);

  // 音乐播放器事件
  const playHandler = (e: any) => {
    setIsPlaying(true);
    setDuration(e.target.duration);
    setVolume(volume);
  };
  const pauseHandler = (e: any) => {
    setIsPlaying(false);
  };
  const playingHandler = (e: any) => {};
  const timeUpdateHandler = (e: any) => {
    setCurrentTime(e.target.currentTime);
  };

  const endedHandler = (e: any) => {};

  const volumeChangeHandler = (e: any) => {
    const value = e.target.value;
    setVolume(value / 100);
    if (player.current) {
      player.current.volume = volume;
    }
  };
  const togglePlayPause = () => {
    if (isPlaying) {
      setIsPlaying(false);
      if (player.current) {
        player.current.pause();
      }
    } else {
      setIsPlaying(true);
      if (player.current) {
        player.current.play();
      }
    }
  };
  // 播放器滑块移动
  const sliderChangeHandler = (e: any) => {
    let value = e.target.value || 0;
    let currentTime = (value / 100) * duration;
    setCurrentTime(currentTime);
    if (player.current) {
      player.current.currentTime = currentTime;
    }
  };
  const toggleFullScreenHandler = () => {
    if (screenfull.isFullscreen) {
      screenfull.exit();
    } else {
      screenfull.request(document.querySelector(".video-player") || undefined);
    }
  };

  useEffect(() => {
    if (screenfull.isEnabled) {
      screenfull.on("change", () => {
        if (screenfull.isFullscreen) {
          setIsScreenfull(true);
        } else {
          setIsScreenfull(false);
        }
      });
    }
    return () => {
      screenfull.off("change", () => {});
    };
  }, []);

  return (
    <div className="video-player-container">
      <div className={`video-player ${isScreenfull ? "is-screenfull" : ""}`}>
        <video
          ref={player}
          src={url}
          onTimeUpdate={timeUpdateHandler}
          onPlay={playHandler}
          onPause={pauseHandler}
          onPlaying={playingHandler}
          onEnded={endedHandler}
        ></video>
        <div className="controls-bar">
          <div className="play-pause-btn" onClick={togglePlayPause}>
            {isPlaying ? (
              <div className="pause-btn"></div>
            ) : (
              <div className="play-btn"></div>
            )}
          </div>
          <div className="current-time">
            {timeFormatter(currentTime * 1000)}
          </div>
          <div className="progress-bar-time-container">
            <div className="video-play-progress-bar-container">
              <VideoSlider
                current={currentTime}
                total={duration}
                sliderChangeHandler={sliderChangeHandler}
              ></VideoSlider>
            </div>
          </div>
          <div className="total-time">{timeFormatter(duration * 1000)}</div>
          <div className="volume-btn-container">
            <div
              className="volume-btn"
              onClick={(e) => setVolumVisible(!volumVisible)}
            ></div>
            <div
              className={`volume-dialog ${volumVisible ? "is-visible" : ""}`}
            >
              <VolumeSlider
                current={volume * 100}
                total={100}
                sliderChangeHandler={volumeChangeHandler}
              ></VolumeSlider>
            </div>
          </div>
          <div className="quality">
            <div className="current">标清</div>
          </div>
          <div className="full-btn" onClick={toggleFullScreenHandler}></div>
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;
