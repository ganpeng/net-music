import { debounce, get } from "lodash";
import React, { useContext, useEffect, useState, useRef } from "react";
import { TracksContext } from "../../context";
import { timeFormatter } from "../../utils";
import "./index.scss";

function MusicPlayer() {
  const tracksContext = useContext(TracksContext);
  const filterTracks = tracksContext?.tracks?.filter((track) =>
    get(track, "song.url")
  );
  const [isVisible, setIsVisible] = useState(false);
  const [playlistVisible, setPlaylistVisible] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  const [activePlayIndex, setActivePlayIndex] = useState(0);
  // 音乐播放相关
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const musicPlayer = useRef<HTMLAudioElement | null>(null);
  const toggleLocked = () => {
    setIsLocked((isLocked) => {
      return !isLocked;
    });
  };

  const getActivePlayUrl = () => {
    return get(filterTracks, `${activePlayIndex}.song.url`);
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

  // 音乐播放器事件
  const playHandler = (e: any) => {
    setDuration(e.target.duration);
  };
  const playingHandler = (e: any) => {
    console.log(e);
  };
  const timeUpdateHandler = (e: any) => {
    setCurrentTime(e.target.currentTime);
  };
  const endedHandler = (e: any) => {
    setActivePlayIndex(activePlayIndex + 1);
  };

  // 音乐列表事件
  const changeMusic = (index: number) => {
    if (index === activePlayIndex) {
      if (musicPlayer.current) {
        musicPlayer.current.currentTime = 0;
      }
    } else {
      setActivePlayIndex(index);
    }
  };

  // 如果重新获取歌曲列表的话，初始化播放音乐为第一个
  useEffect(() => {
    if (filterTracks?.length === 0) {
      setActivePlayIndex(0);
    }
  }, [filterTracks]);

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

        <div className="audio-play-progress-bar-container">
          <div className="total-bar"></div>
          <div
            className="current-bar"
            style={{ width: `${(currentTime * 100) / duration}%` }}
          ></div>
        </div>
        <div className="time-container">
          <div className="current-time">
            {timeFormatter(currentTime * 1000)}
          </div>
          <div className="split">/</div>
          <div className="total-time">{timeFormatter(duration * 1000)}</div>
        </div>

        <div
          className="play-list-btn"
          onClick={() => setPlaylistVisible(!playlistVisible)}
        >
          {filterTracks?.length}
        </div>

        <audio
          ref={musicPlayer}
          onTimeUpdate={timeUpdateHandler}
          onPlay={playHandler}
          onPlaying={playingHandler}
          onEnded={endedHandler}
          src={getActivePlayUrl()}
          autoPlay={true}
        ></audio>
      </div>
      {playlistVisible && (
        <div className="play-list-container">
          <div className="play-list-header">
            <div className="header-left">
              <div className="title">播放列表({filterTracks?.length})</div>
              <div className="btns">
                <div className="save-all-btn">
                  <span className="save-all-btn-icon"></span>
                  <span className="text">收藏全部</span>
                </div>
                <span className="splite-line"></span>
                <div className="clear-btn">
                  <span className="clear-btn-icon"></span>
                  <span className="text">清除</span>
                </div>
              </div>
            </div>
            <div className="header-right">
              <div className="song-name">breeze</div>
              <div
                className="close-btn"
                onClick={() => setPlaylistVisible(false)}
              ></div>
            </div>
          </div>
          <div className="play-list-content">
            <div className="play-list-content-left">
              <ul className="play-list">
                {filterTracks?.map((track, index) => {
                  return (
                    <li className="play-item" key={index}>
                      <div
                        className={`playing-icon ${
                          activePlayIndex === index ? "active" : ""
                        }`}
                        onClick={() => changeMusic(index)}
                      ></div>
                      <div
                        className="song-name"
                        onClick={() => changeMusic(index)}
                      >
                        {track.name}
                      </div>
                      <div className="operator-container"></div>
                      <div className="singer">{get(track, "ar.0.name")}</div>
                      <div
                        className="duration"
                        onClick={() => changeMusic(index)}
                      >
                        {timeFormatter(track.dt)}
                      </div>
                      <div className="goto-btn"></div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MusicPlayer;
