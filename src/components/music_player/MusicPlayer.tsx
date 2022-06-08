import { debounce, get } from "lodash";
import React, { useContext, useEffect, useState, useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import { defaultAlbum } from "../../constants/images";
import { TracksContext } from "../../context";
import { timeFormatter } from "../../utils";
import {
  linkToAlbumDetailPage,
  linkToArtistDetailPage,
  linkToSongDetailPage,
} from "../../utils/link";
import NoData from "../no_data/NoData";
import Slider from "../slider/Slider";
import VolumeSlider from "../volume_slider/VolumeSlider";
import "./index.scss";

function MusicPlayer() {
  const tracksContext = useContext(TracksContext);
  const [isVisible, setIsVisible] = useState(false);
  const [playlistVisible, setPlaylistVisible] = useState(false);
  const [isLocked, setIsLocked] = useState(true);
  // const [activePlayIndex, setActivePlayIndex] = useState(0);
  // 音乐播放相关
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volumVisible, setVolumVisible] = useState(false);
  const [volume, setVolume] = useState(0.2);

  // 播放器dom
  const musicPlayer = useRef<HTMLAudioElement | null>(null);
  const toggleLocked = () => {
    setIsLocked((isLocked) => {
      return !isLocked;
    });
  };

  const getActivePlayUrl = useMemo(() => {
    return get(tracksContext, `currentTrack.song.url`);
  }, [tracksContext]);

  const activeTrackIndex = useMemo(() => {
    const index = tracksContext?.tracks?.findIndex(
      (track) => track.id === get(tracksContext, `currentTrack.id`)
    );
    return index || 0;
  }, [tracksContext]);

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
    changeMusic(activeTrackIndex + 1);
  };
  const volumeChangeHandler = (e: any) => {
    const value = e.target.value;
    setVolume(value / 100);
    if (musicPlayer.current) {
      musicPlayer.current.volume = volume;
    }
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
    if (index === activeTrackIndex) {
      if (musicPlayer.current) {
        musicPlayer.current.currentTime = 0;
      }
    } else {
      let tracks = tracksContext?.tracks;
      let len = tracks?.length || 0;
      let track = null;
      if (index < 0) {
        track = get(tracks, `${len - 1}`);
      } else if (index >= len) {
        track = get(tracks, `0`);
      } else {
        track = get(tracks, `${index}`);
      }
      tracksContext?.setCurrentTrack(track);
    }
  };

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
            onClick={() => changeMusic(activeTrackIndex - 1)}
          ></div>
          <div
            className={`play-pause-btn ${isPlaying ? "is-playing" : ""}`}
            onClick={togglePlayPause}
          ></div>
          <div
            className="next-btn"
            onClick={() => changeMusic(activeTrackIndex + 1)}
          ></div>
        </div>
        <div className="audio-info-play-container">
          <div
            className="music-img"
            style={{
              backgroundImage: `url(${
                tracksContext?.currentTrack?.al?.picUrl || defaultAlbum
              })`,
            }}
          >
            <div className="img-mask">
              <Link
                to={linkToSongDetailPage(tracksContext?.currentTrack?.id)}
              ></Link>
            </div>
          </div>
          <div className="base-info-bar-container">
            <div className="base-info-container">
              <div
                className="name text-decoration"
                title={tracksContext?.currentTrack?.name}
              >
                <Link
                  to={linkToSongDetailPage(tracksContext?.currentTrack?.id)}
                >
                  {tracksContext?.currentTrack?.name}
                </Link>
              </div>
              <div
                className="songers"
                title={tracksContext?.currentTrack?.ar
                  ?.map((ar: any) => ar.name)
                  .join("/")}
              >
                {tracksContext?.currentTrack?.ar?.map(
                  (ar: any, _index: number) => (
                    <span key={`${ar}_${_index}`}>
                      <Link to={linkToArtistDetailPage(ar.id)}>{ar.name}</Link>
                    </span>
                  )
                )}
              </div>
              {tracksContext?.currentTrack?.id && (
                <div className="goto-btn">
                  <Link
                    to={linkToAlbumDetailPage(tracksContext.currentTrack.al.id)}
                  ></Link>
                </div>
              )}
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
              {tracksContext?.tracks?.length}
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
          src={getActivePlayUrl}
          autoPlay={true}
        ></audio>
      </div>
      {playlistVisible && (
        <div className="play-list-container">
          <div className="play-list-header">
            <div className="header-left">
              <div className="title">
                播放列表({tracksContext?.tracks?.length})
              </div>
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
              <div className="song-name">
                {tracksContext?.currentTrack?.name}
              </div>
              <div
                className="close-btn"
                onClick={() => setPlaylistVisible(false)}
              ></div>
            </div>
          </div>
          <div className="play-list-content">
            <div className="play-list-content-left">
              {get(tracksContext?.tracks || [], "length") > 0 ? (
                <ul className="play-list">
                  {tracksContext?.tracks?.map((track, index) => {
                    return (
                      <li className="play-item" key={index}>
                        <div
                          className={`playing-icon ${
                            activeTrackIndex === index ? "active" : ""
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
                            <span key={`${ar}_${_index}`}>
                              <Link to={linkToArtistDetailPage(ar.id)}>
                                {ar.name}
                              </Link>
                            </span>
                          ))}
                        </div>
                        <div
                          className="duration"
                          onClick={() => changeMusic(index)}
                        >
                          {timeFormatter(track.dt)}
                        </div>
                        <div className="goto-btn">
                          <Link to={linkToAlbumDetailPage(track.al.id)}></Link>
                        </div>
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
