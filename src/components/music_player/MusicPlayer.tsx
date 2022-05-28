import { debounce, get } from "lodash";
import React, { useContext, useEffect, useState, useRef, useMemo } from "react";
import { defaultAlbum } from "../../constants/images";
import { TracksContext } from "../../context";
import { timeFormatter } from "../../utils";
import NoData from "../no_data/NoData";
import Slider from "../slider/Slider";
import VolumeSlider from "../volume_slider/VolumeSlider";
import "./index.scss";

function MusicPlayer() {
  const tracksContext = useContext(TracksContext);
  const filterTracks = tracksContext?.tracks?.filter(
    (track) => get(track, "song.level") !== "exhigh" && get(track, "song.url")
  );
  const [isVisible, setIsVisible] = useState(false);
  const [playlistVisible, setPlaylistVisible] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  const [activePlayIndex, setActivePlayIndex] = useState(0);
  // 音乐播放相关
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volumVisible, setVolumVisible] = useState(false);
  const [volume, setVolume] = useState(1);

  // 播放器dom
  const musicPlayer = useRef<HTMLAudioElement | null>(null);
  const toggleLocked = () => {
    setIsLocked((isLocked) => {
      return !isLocked;
    });
  };

  const activePlayMusic = useMemo(() => {
    return get(filterTracks, `${activePlayIndex}`);
  }, [filterTracks, activePlayIndex]);
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
    setIsPlaying(true);
    setDuration(e.target.duration);
  };
  const pauseHandler = (e: any) => {
    setIsPlaying(false);
  };
  const playingHandler = (e: any) => {};
  const timeUpdateHandler = (e: any) => {
    setCurrentTime(e.target.currentTime);
  };
  const endedHandler = (e: any) => {
    changeMusic(activePlayIndex + 1);
  };
  const volumeChangeHandler = (e: any) => {
    const value = e.target.value;
    setVolume(value / 100);
    if (musicPlayer.current) {
      musicPlayer.current.volume = volume;
    }
    // console.log(e.target.value);
  };
  const togglePlayPause = () => {
    if (isPlaying) {
      setIsPlaying(false);
      if (musicPlayer.current) {
        musicPlayer.current.pause();
      }
    } else {
      setIsPlaying(true);
      if (musicPlayer.current) {
        musicPlayer.current.play();
      }
    }
  };
  // 播放器滑块移动
  const sliderChangeHandler = (e: any) => {
    let value = e.target.value || 0;
    let currentTime = (value / 100) * duration;
    setCurrentTime(currentTime);
    if (musicPlayer.current) {
      musicPlayer.current.currentTime = currentTime;
    }
  };

  // 音乐列表事件
  const changeMusic = (index: number) => {
    if (index === activePlayIndex) {
      if (musicPlayer.current) {
        musicPlayer.current.currentTime = 0;
      }
    } else {
      let len = filterTracks?.length || 0;
      if (index < 0) {
        setActivePlayIndex(len - 1);
      } else if (index >= len) {
        setActivePlayIndex(0);
      } else {
        setActivePlayIndex(index);
      }
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
          <div
            className="prev-btn"
            onClick={() => changeMusic(activePlayIndex - 1)}
          ></div>
          <div
            className={`play-pause-btn ${isPlaying ? "is-playing" : ""}`}
            onClick={togglePlayPause}
          ></div>
          <div
            className="next-btn"
            onClick={() => changeMusic(activePlayIndex + 1)}
          ></div>
        </div>
        <div className="audio-info-play-container">
          <div
            className="music-img"
            style={{
              backgroundImage: `url(${
                activePlayMusic?.al?.picUrl || defaultAlbum
              })`,
            }}
          >
            <div className="img-mask"></div>
          </div>
          <div className="base-info-bar-container">
            <div className="base-info-container">
              <div
                className="name text-decoration"
                title={activePlayMusic?.name}
              >
                {activePlayMusic?.name}
              </div>
              <div
                className="songers"
                title={activePlayMusic?.ar?.map((ar: any) => ar.name).join("/")}
              >
                {activePlayMusic?.ar?.map((ar: any, _index: number) => (
                  <span key={`${ar}_${_index}`}>{ar.name}</span>
                ))}
              </div>
              <div className="goto-btn"></div>
            </div>
            <div className="progress-bar-time-container">
              <div className="audio-play-progress-bar-container">
                <Slider
                  current={currentTime}
                  total={duration}
                  sliderChangeHandler={sliderChangeHandler}
                ></Slider>
              </div>
              <div className="time-container">
                <div className="current-time">
                  {timeFormatter(currentTime * 1000)}
                </div>
                <div className="split">/</div>
                <div className="total-time">
                  {timeFormatter(duration * 1000)}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="btns-container">
          <div className="left-btns">
            <div className="inner-btn"></div>
            <div className="save-btn"></div>
            <div className="share-btn"></div>
          </div>
          <div className="right-btns">
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
            <div className="random-btn"></div>
            <div
              className="play-list-btn"
              onClick={() => setPlaylistVisible(!playlistVisible)}
            >
              {filterTracks?.length}
            </div>
          </div>
        </div>

        <audio
          ref={musicPlayer}
          onTimeUpdate={timeUpdateHandler}
          onPlay={playHandler}
          onPause={pauseHandler}
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
                <div
                  className="clear-btn"
                  onClick={() => tracksContext?.setTracks([])}
                >
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
              {get(filterTracks || [], "length") > 0 ? (
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
                        <div
                          className="songers"
                          title={track.ar.map((ar: any) => ar.name).join("/")}
                        >
                          {track.ar.map((ar: any, _index: number) => (
                            <span key={`${ar}_${_index}`}>{ar.name}</span>
                          ))}
                        </div>
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
              ) : (
                <NoData text="你还没有添加任何歌曲"></NoData>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MusicPlayer;
